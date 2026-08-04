import Icon from "@/components/ui/Icon";
import SmartLink from "@/components/ui/SmartLink";
import { heroQuotes, heroStats } from "@/data/content";
import { delay } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div>
          <span className="live-badge reveal">
            <span className="dot" aria-hidden="true" />
            Live in 2&ndash;3 days &middot; No setup fee
          </span>

          <span className="eyebrow reveal" style={{ ...delay(60), marginTop: 20 }}>
            MetaTrader 5 Manager &middot; Monthly Rental
          </span>

          <h1 className="reveal" style={delay(110)}>
            Run your own MT5 desk.
            <br />
            <span className="grad-text">We hand you the keys.</span>
          </h1>

          <p className="sub reveal" style={delay(170)}>
            A fully managed MetaTrader 5 Manager environment on a simple monthly
            rent &mdash; API access, custom spreads and commissions, A-book and
            B-book routing, a complete Forex CRM, and client terminals on every
            device. No capital lock-in. No setup charges.
          </p>

          <div className="hero-cta-row reveal" style={delay(230)}>
            <SmartLink href="#pricing" className="btn-accent">
              View plans &amp; pricing
              <Icon name="arrowRight" size={17} />
            </SmartLink>
            <SmartLink href="#crm" className="btn-ghost">
              Explore the CRM
            </SmartLink>
          </div>

          <div className="hero-stats reveal" style={delay(300)}>
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="n">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={delay(200)}>
          <div className="term">
            <div className="term-bar">
              <span className="tdot" />
              <span className="tdot" />
              <span className="tdot" />
              <span className="tt">meridian &mdash; manager terminal</span>
              <span className="live">
                <span className="dot" style={{ width: 6, height: 6 }} />
                CONNECTED
              </span>
            </div>

            <div className="term-body">
              {heroQuotes.map((q) => (
                <div className="qrow" key={q.symbol}>
                  <span className="sym">{q.symbol}</span>
                  <span className="px">{q.price}</span>
                  <span
                    className={`ch ${q.direction === "up" ? "up" : "dn"}`}
                  >
                    {q.change}
                  </span>
                </div>
              ))}
            </div>

            <div className="term-foot">
              <span>GROUPS: 12 &middot; ACCOUNTS: 1,480</span>
              <span>ROUTING: A / B HYBRID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
