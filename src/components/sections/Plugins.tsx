import SectionHead from "@/components/ui/SectionHead";
import { plugins } from "@/data/services";
import { pluginAnchor } from "@/lib/anchors";
import { hueVar } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Plugins() {
  return (
    <section
      id="plugins"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <SectionHead
          eyebrow="Server-side modules"
          title="Plugins that change what your desk can sell"
          lede="Each of these runs server-side against your Manager environment. Availability by tier is listed in your proposal."
        />

        <div className="plug-grid reveal">
          {plugins.map((p, i) => (
            <div
              className="plug"
              id={pluginAnchor(p.title)}
              style={hueVar(p.hue)}
              key={p.title}
            >
              <div className="pi">MODULE {pad(i + 1)}</div>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
