import Icon from "@/components/ui/Icon";
import { includedItems } from "@/data/content";
import { delay } from "@/lib/utils";

export default function IncludedStrip() {
  return (
    <section className="strip" id="included">
      <div className="wrap">
        <div className="sec-head reveal" style={{ marginBottom: 40 }}>
          <span className="eyebrow">Included as standard</span>
          <h2 style={{ fontSize: "clamp(26px, 3.6vw, 38px)" }}>
            What every plan gives you
          </h2>
        </div>

        <div className="strip-grid">
          {includedItems.map((item, i) => (
            <div className="strip-item reveal" key={item.highlight} style={delay(i * 70)}>
              <div className="ic">
                <Icon name={item.icon} size={20} />
              </div>
              <div className="k">
                {item.title === "access" ? (
                  <>
                    <span>{item.highlight}</span> {item.title}
                  </>
                ) : (
                  <>
                    {item.title} <span>{item.highlight}</span>
                  </>
                )}
              </div>
              <div className="d">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
