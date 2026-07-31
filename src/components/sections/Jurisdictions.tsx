import SectionHead from "@/components/ui/SectionHead";
import { tierHue, tierLabel } from "@/data/hues";
import { jurisdictions } from "@/data/jurisdictions";
import { delay, hueVar } from "@/lib/utils";

export default function Jurisdictions() {
  return (
    <section id="jurisdictions" className="mesh mesh-b">
      <div className="wrap">
        <SectionHead
          eyebrow="Licensing & formation"
          title={`${jurisdictions.length} jurisdictions, compared honestly`}
          lede="Choosing a regime is a trade-off between cost, credibility, timeline and which markets will accept you. Indicative figures below — we will model your specific case before you commit to anything."
        />

        <div className="jur-grid">
          {jurisdictions.map((j, i) => (
            <div
              className="jur edge reveal"
              key={j.name}
              style={hueVar(tierHue[j.tier], delay(i * 40))}
            >
              <div className="jur-head">
                <div>
                  <div className="jn">{j.name}</div>
                </div>
                <span className="jur-tier">{tierLabel[j.tier]}</span>
              </div>
              <div className="jr">{j.regulator}</div>
              <dl>
                <dt>Capital</dt>
                <dd>{j.capital}</dd>
                <dt>Timeline</dt>
                <dd>{j.timeline}</dd>
                <dt>Profile</dt>
                <dd>{j.profile}</dd>
              </dl>
            </div>
          ))}
        </div>

        <p className="fineprint" style={{ marginTop: 22 }}>
          Capital and timeline figures are indicative market estimates as at 2026
          and are not legal advice. Requirements change, and regulators assess
          each application on its own facts. We will confirm current requirements
          in writing before any engagement begins.
        </p>
      </div>
    </section>
  );
}
