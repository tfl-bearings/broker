import SectionHead from "@/components/ui/SectionHead";
import { commitments } from "@/data/content";
import { delay } from "@/lib/utils";

/**
 * Occupies the slot where testimonials would normally sit. Swap back to
 * <Testimonials /> in page.tsx once real, written-approved client quotes exist
 * — that component is still in the repo and ready.
 */
export default function Commitments() {
  return (
    <section
      id="commitments"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <SectionHead
          eyebrow="Where we stand"
          title="What we put in writing"
          lede="Anyone can claim to be trusted. These are the terms we commit to instead — each one checkable, and each one something most providers in this market will not offer you."
        />

        <div className="commit-grid">
          {commitments.map((c, i) => (
            <div className="commit edge reveal" key={c.title} style={delay(i * 60)}>
              <span className="commit-mark" aria-hidden="true" />
              <h4>{c.title}</h4>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
