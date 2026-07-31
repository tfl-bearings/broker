"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import { faqItems } from "@/data/content";
import { cx } from "@/lib/utils";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="wrap">
        <SectionHead
          center
          eyebrow="Questions"
          title="Before you commit"
          lede="The things operators actually ask us on the first call."
        />

        <div className="faq reveal">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={cx("qa", isOpen && "open")} key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.question}
                  <span className="plus" aria-hidden="true" />
                </button>
                <div
                  className="ans"
                  id={`faq-answer-${i}`}
                  style={{ maxHeight: isOpen ? "40rem" : 0 }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
