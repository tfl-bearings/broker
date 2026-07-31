import SectionHead from "@/components/ui/SectionHead";
import {
  crmModules,
  dashboardBars,
  dashboardKpis,
  dashboardNav,
  dashboardRows,
} from "@/data/crm";
import { delay } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export default function CrmShowcase() {
  return (
    <section className="crm-sec on-dark" id="crm">
      <div className="wrap">
        <SectionHead
          onDark
          eyebrow="Forex CRM & back office"
          title="The system your desk actually lives in"
          lede="A trading server moves orders. The CRM runs the business — who owns the lead, whether the documents passed, who approved the withdrawal, and what the introducer is owed. Ours ships with every plan."
        />

        <div className="crm-split">
          <div className="reveal">
            <h3 className="crm-lead">Four portals, one database</h3>
            <p className="crm-sub">
              Admin, client, partner and mobile surfaces read from the same
              records, so nobody reconciles spreadsheets between departments.
            </p>

            <ul className="crm-mods">
              {crmModules.map((m, i) => (
                <li key={m.name}>
                  <span className="mi">{pad(i + 1)}</span>
                  <div>
                    <b>{m.name}</b> &mdash; {m.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" style={delay(100)}>
            <div className="dash">
              <div className="dash-top">
                <span className="dd" />
                <span className="dd" />
                <span className="dd" />
                <span className="url">crm.yourbrokerage.com / dashboard</span>
              </div>

              <div className="dash-body">
                <div className="dash-side">
                  {dashboardNav.map((group) => (
                    <div key={group.group}>
                      <div className="sb">{group.group}</div>
                      {group.items.map((item) => (
                        <a
                          key={item}
                          href="#crm"
                          className={item === "Dashboard" ? "on" : undefined}
                        >
                          <span className="sq" />
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="dash-main">
                  <div className="dash-h">
                    <h5>Desk overview</h5>
                    <span className="who">
                      Role: Operations &middot; 3 pending approvals
                    </span>
                  </div>

                  <div className="kpis">
                    {dashboardKpis.map((k) => (
                      <div className="kpi" key={k.label}>
                        <div className="kl">{k.label}</div>
                        <div className="kv">{k.value}</div>
                        <div className="kd">{k.delta}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bars" aria-hidden="true">
                    {dashboardBars.map((h, i) => (
                      <i
                        key={i}
                        style={{ height: `${h}%`, animationDelay: `${i * 35}ms` }}
                      />
                    ))}
                  </div>

                  <div className="dtable">
                    <div className="tr th">
                      <span>Client</span>
                      <span>Stage</span>
                      <span>Balance</span>
                      <span>Status</span>
                    </div>
                    {dashboardRows.map((row) => (
                      <div className="tr" key={row.client}>
                        <span>{row.client}</span>
                        <span>{row.stage}</span>
                        <span>{row.balance}</span>
                        <span className={`pill ${row.status}`}>
                          {row.statusLabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mock-note">
              Interface preview &mdash; sample data shown for illustration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
