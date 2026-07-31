import SectionHead from "@/components/ui/SectionHead";
import { workflowStages } from "@/data/crm";
import { delay } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Workflow() {
  return (
    <section id="workflow">
      <div className="wrap">
        <SectionHead
          eyebrow="How the CRM maps to your team"
          title="One client lifecycle, four departments"
          lede="Every module exists because a specific person has a specific job to do. Here is who touches what, and in what order."
        />

        <div className="flow">
          {workflowStages.map((stage, i) => (
            <div className="flow-card edge reveal" key={stage.title} style={delay(i * 70)}>
              <div className="fn">{pad(i + 1)}</div>
              <div className="dept">{stage.dept}</div>
              <h4>{stage.title}</h4>
              <ul>
                {stage.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
