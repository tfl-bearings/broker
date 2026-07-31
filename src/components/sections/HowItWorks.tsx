import { serverNames, steps } from "@/data/content";
import { delay } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="wrap split">
        <div className="reveal">
          <span className="eyebrow">How it works</span>
          <h2>From sign-up to live desk in days</h2>
          <p className="lede">
            No procurement cycle, no capital lock-in, no six-week provisioning
            queue. Four steps, and you are taking flow.
          </p>

          <ul className="steps">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="num">{pad(i + 1)}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={delay(100)}>
          <div className="server-card">
            <div className="lbl">Choose your server name</div>
            {serverNames.map((s) => (
              <div className="server-opt" key={s.host}>
                <span>{s.host}</span>
                <span className="tag">
                  {s.available ? "Available" : "Taken"}
                </span>
              </div>
            ))}
            <p className="server-note">
              Generic, neutral server names that are not tied to any visible
              third-party brand. Your clients see your branding throughout the
              Trader&rsquo;s Room, WebTrader and mobile apps. Final options are
              confirmed at provisioning, and a dedicated branded server entry is
              available as an add-on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
