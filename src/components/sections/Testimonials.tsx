import SectionHead from "@/components/ui/SectionHead";
import { testimonials } from "@/data/content";
import { delay } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section
      id="clients"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <SectionHead
          eyebrow="Client outcomes"
          title="What operators say"
          lede="Real names, real desks, real numbers — added once each client has signed off on the wording."
        />

        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure className="quote reveal" key={i} style={delay(i * 70)}>
              <p>{t.quote}</p>
              <figcaption className="who">
                <div className="av">LOGO</div>
                <div>
                  <div className="wn">{t.name}</div>
                  <div className="wr">{t.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
