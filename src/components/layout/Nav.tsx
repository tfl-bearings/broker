"use client";

import { useState } from "react";
import Brand from "@/components/ui/Brand";
import Icon from "@/components/ui/Icon";
import SmartLink from "@/components/ui/SmartLink";
import { navItems } from "@/data/nav";
import { cx } from "@/lib/utils";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenMega(null);
  };

  /** Below 1080px the mega menu is an accordion rather than a hover panel. */
  const toggleMega = (label: string) => {
    if (window.innerWidth > 1080) return;
    setOpenMega((current) => (current === label ? null : label));
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Brand markId="nav" />

        <nav className={cx("nav-links", menuOpen && "open")}>
          {navItems.map((item) =>
            item.columns ? (
              <div
                key={item.label}
                className={cx("nav-item", openMega === item.label && "open")}
              >
                <button
                  type="button"
                  aria-expanded={openMega === item.label}
                  onClick={() => toggleMega(item.label)}
                >
                  {item.label}
                  <Icon name="chevronDown" size={14} className="caret" />
                </button>
                <div className="mega">
                  {item.columns.map((col) => (
                    <div className="mega-col" key={col.title}>
                      <h5>{col.title}</h5>
                      {col.links.map((link) => (
                        <SmartLink
                          key={link.label}
                          href={link.href}
                          onClick={closeAll}
                        >
                          {link.label}
                          {link.note ? <small>{link.note}</small> : null}
                        </SmartLink>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <SmartLink
                key={item.label}
                href={item.href ?? "#"}
                onClick={closeAll}
              >
                {item.label}
              </SmartLink>
            ),
          )}

          <SmartLink href="#contact" className="nav-cta" onClick={closeAll}>
            Get started
          </SmartLink>
        </nav>

        <button
          type="button"
          className={cx("burger", menuOpen && "open")}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="progress" id="progress" />
    </header>
  );
}
