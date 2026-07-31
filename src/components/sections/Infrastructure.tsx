import Icon from "@/components/ui/Icon";
import SectionHead from "@/components/ui/SectionHead";
import { infraCards, metrics } from "@/data/infrastructure";
import { delay } from "@/lib/utils";

export default function Infrastructure() {
  return (
    <section className="infra on-dark" id="infrastructure">
      <div className="wrap">
        <SectionHead
          onDark
          eyebrow="Infrastructure & operations"
          title="Uptime is our job, not yours"
          lede="You rent the environment. We carry the pager. Monitoring, patching, backups and incident response are included in every tier at no extra charge."
        />

        <div className="metrics">
          {metrics.map((metric, i) => (
            <div className="metric reveal" key={metric.label} style={delay(i * 70)}>
              <div className="mv">
                {metric.parts.map((part, j) =>
                  part.kind === "text" ? (
                    <span key={j}>{part.value}</span>
                  ) : (
                    <span
                      key={j}
                      data-count={part.to}
                      data-dec={part.decimals ?? 0}
                    >
                      0
                    </span>
                  ),
                )}
              </div>
              <div className="ml">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="infra-grid">
          {infraCards.map((card, i) => (
            <div className="icard reveal" key={card.title} style={delay(i * 70)}>
              <span className="icard-icon">
                <Icon name={card.icon} size={19} />
              </span>
              <div className="ii">{card.tag}</div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
