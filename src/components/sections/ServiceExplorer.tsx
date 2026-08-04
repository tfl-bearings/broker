"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import { serviceCategories, totalServices } from "@/data/services";
import { serviceAnchor } from "@/lib/anchors";
import { cx, hueVar } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

const findOwner = (hash: string) =>
  serviceCategories.find((c) =>
    c.services.some((s) => serviceAnchor(s.title) === hash),
  );

export default function ServiceExplorer() {
  const [active, setActive] = useState(serviceCategories[0].id);

  /**
   * A service card can be linked to directly (#svc-kyc-and-aml-automation), but
   * it may sit in a hidden tab — and a browser cannot scroll to an element that
   * is display:none. So we resolve the target ourselves: open the owning tab,
   * let React commit, then scroll and flash the card.
   *
   * pendingRef + focusTick rather than plain state so the scroll always runs
   * after the panel has actually unhidden, including when the card is already
   * in the open tab (where `active` would not change).
   */
  const pendingRef = useRef<string | null>(null);
  const [focusTick, setFocusTick] = useState(0);

  const focusService = useCallback((rawHash: string) => {
    const hash = decodeURIComponent(rawHash.replace(/^#/, ""));
    if (!hash.startsWith("svc-")) return;

    const owner = findOwner(hash);
    if (!owner) return;

    pendingRef.current = hash;
    setActive(owner.id);
    setFocusTick((t) => t + 1);
  }, []);

  useEffect(() => {
    const hash = pendingRef.current;
    if (!hash) return;
    pendingRef.current = null;

    const el = document.getElementById(hash);
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });

    el.classList.remove("flash");
    void el.offsetWidth; // restart the animation when the same card is re-targeted
    el.classList.add("flash");

    const timer = window.setTimeout(() => el.classList.remove("flash"), 1900);
    return () => window.clearTimeout(timer);
  }, [focusTick]);

  useEffect(() => {
    // Direct hit on a URL that already carries a hash, once hydrated.
    const initial = window.setTimeout(() => {
      if (window.location.hash) focusService(window.location.hash);
    }, 0);

    const onHashChange = () => focusService(window.location.hash);

    /*
     * The target is read from the clicked anchor's own href, not from
     * window.location — the URL may not have updated yet, and for repeat clicks
     * on an already-current hash it never changes at all.
     */
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.<HTMLAnchorElement>(
        'a[href*="#svc-"]',
      );
      if (!anchor) return;
      const hash = anchor.getAttribute("href")?.split("#")[1];
      if (hash) focusService(hash);
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);

    return () => {
      window.clearTimeout(initial);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, [focusService]);

  return (
    <section id="services" className="mesh">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Full capability map"
          title="Everything a brokerage needs, under one roof"
          lede={`${totalServices} services across ${serviceCategories.length} disciplines. Take the whole stack, or bolt on only the pieces you are missing.`}
        />

        <div className="tabs reveal" role="tablist">
          {serviceCategories.map((c) => (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              type="button"
              role="tab"
              aria-selected={active === c.id}
              aria-controls={`panel-${c.id}`}
              className={cx("tab", active === c.id && "active")}
              style={hueVar(c.hue)}
              onClick={() => setActive(c.id)}
            >
              {c.label}
              <span className="cnt">{c.services.length}</span>
            </button>
          ))}
        </div>

        {/*
          Every panel is rendered, with inactive ones hidden rather than
          unmounted. All 40 services stay in the served HTML so search engines
          index the full capability map, not just the first tab.
        */}
        {serviceCategories.map((category) => (
          <div
            className="panel-svc"
            id={`panel-${category.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            hidden={active !== category.id}
            key={category.id}
          >
            <div className="svc-grid">
              {category.services.map((s, i) => (
                <article
                  className="svc edge"
                  id={serviceAnchor(s.title)}
                  style={hueVar(category.hue)}
                  key={s.title}
                >
                  <div className="no">
                    {pad(i + 1)} / {category.prefix}
                  </div>
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                  <div className="tagset">
                    {s.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
