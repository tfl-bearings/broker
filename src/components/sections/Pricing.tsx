"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import SmartLink from "@/components/ui/SmartLink";
import { addOns, plans } from "@/data/plans";
import type { BillingCycle } from "@/lib/types";
import { cx, delay } from "@/lib/utils";

const CYCLES: Array<{ key: BillingCycle; label: string }> = [
  { key: "monthly", label: "Monthly" },
  { key: "annual", label: "Annual" },
];

export default function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="mesh">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Pricing"
          title="Three tiers. One monthly rent."
          lede="Start lean with internal flow, add liquidity coverage, or take the complete client-facing brokerage. Every plan includes Manager API access, CRM onboarding and multi-device terminals — with no setup charges, ever."
        />

        <div className="toggle-row reveal">
          <div className="switch" role="group" aria-label="Billing period">
            {CYCLES.map((c) => (
              <button
                key={c.key}
                type="button"
                className={cx(cycle === c.key && "active")}
                aria-pressed={cycle === c.key}
                onClick={() => setCycle(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <span className="save-tag">Save ~17% on annual</span>
        </div>

        <div className="plans">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={cx("plan", "edge", "reveal", plan.featured && "featured")}
              style={delay(i * 80)}
            >
              {plan.badge ? <span className="flag">{plan.badge}</span> : null}

              <div className="tier-tag">{plan.tier}</div>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-desc">{plan.description}</div>

              <div className="price">
                <span className="cur">$</span>
                <span className="amt">{plan.price[cycle]}</span>
                <span className="per">/ month</span>
              </div>
              <div className="price-note">{plan.note[cycle]}</div>

              {plan.inherits ? (
                <div className="inc-prev">Everything in {plan.inherits}, plus:</div>
              ) : null}

              <ul className="feats">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="feat-note">{plan.audience}</div>
              <SmartLink href="#contact" className="cta">
                {plan.cta}
              </SmartLink>
            </div>
          ))}
        </div>

        <div className="addons reveal">
          <h3>Add-ons &amp; professional services</h3>
          <p>
            Bolt any of these onto any tier. Priced per engagement &mdash; ask for
            a written quote before you commit.
          </p>
          <div className="addon-grid">
            {addOns.map((a) => (
              <div className="addon" key={a.name}>
                <div className="an">{a.name}</div>
                <div className="ad">{a.description}</div>
                <div className="ap">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
