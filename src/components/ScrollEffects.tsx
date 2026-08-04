"use client";

import { useEffect } from "react";

/**
 * One client component that drives every scroll-linked behaviour on the page:
 *
 *  - fades in `.reveal` elements as they enter the viewport
 *  - drives the gradient progress bar in the sticky header
 *  - counts up any `[data-count]` element the first time it is seen
 *
 * Keeping these here means the section components can stay server components
 * and ship no JavaScript of their own.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* ---- reveal on scroll ---- */
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---- header progress bar ---- */
    const progress = document.getElementById("progress");
    const onScroll = () => {
      if (!progress) return;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      progress.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* ---- count-up metrics ---- */
    const countEls = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const runCount = (el: HTMLElement) => {
      const target = Number.parseFloat(el.dataset.count ?? "0");
      const decimals = Number.parseInt(el.dataset.dec ?? "0", 10);
      if (reduce) {
        el.textContent = target.toFixed(decimals);
        return;
      }
      const duration = 1400;
      let start: number | null = null;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      countEls.forEach(runCount);
    } else {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCount(entry.target as HTMLElement);
              cio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 },
      );
      countEls.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    }

    /*
     * Same-page anchors (#pricing, #crm, #svc-..., the bare "#" on the logo)
     * scroll to their target but must not touch the address bar — a deployed
     * marketing site shouldn't grow a trailing #fragment every time a visitor
     * clicks a nav link. Anything not starting with "#" (real routes, mailto:)
     * is left alone. "svc-" targets are left for ServiceExplorer's own
     * listener, which has to open the right tab before it can scroll to them.
     */
    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;

      const anchor = (event.target as HTMLElement | null)?.closest?.<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) return;

      event.preventDefault();

      const id = decodeURIComponent(anchor.getAttribute("href")!.slice(1));
      if (!id || id.startsWith("svc-")) {
        if (!id) window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        return;
      }

      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };
    document.addEventListener("click", onAnchorClick);
    cleanups.push(() => document.removeEventListener("click", onAnchorClick));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
