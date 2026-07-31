"use client";

import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/Icon";
import { interestOptions, timelineOptions } from "@/data/content";
import { contactChannels } from "@/data/site";
import { cx, delay } from "@/lib/utils";

interface Status {
  text: string;
  error: boolean;
}

export default function Contact() {
  const [status, setStatus] = useState<Status | null>(null);

  /**
   * Front-end only for now.
   * TODO(launch): POST to a route handler that forwards to the CRM / mail
   * provider, and replace the success copy with a real confirmation.
   */
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const consent = form.get("consent");

    if (!name || !email || !consent) {
      setStatus({
        text: "Please add your name, email and tick the consent box.",
        error: true,
      });
      return;
    }

    setStatus({
      text: "Thanks - connect this form to your CRM or mail handler to receive submissions.",
      error: false,
    });
  };

  return (
    <section className="contact-sec on-dark" id="contact">
      <div className="wrap">
        <div className="contact-split">
          <div className="reveal">
            <span className="eyebrow on-dark">Get started</span>
            <h2>Tell us what you are launching</h2>
            <p className="lede">
              Send us your model and target markets and we will come back with a
              written scope, a fixed monthly figure, and a realistic date you can
              be live &mdash; usually within one business day.
            </p>

            <ul className="cinfo">
              {contactChannels.map((c) => (
                <li key={c.label}>
                  <span className="ci">
                    <Icon name={c.icon} size={17} />
                  </span>
                  <div>
                    <div className="cl">{c.label}</div>
                    {c.href ? (
                      <a className="cv" href={c.href}>
                        {c.value}
                      </a>
                    ) : (
                      <span className="cv">{c.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="lead reveal" style={delay(80)} onSubmit={onSubmit} noValidate>
            <div className="frow">
              <div className="field">
                <label htmlFor="fn">Full name</label>
                <input id="fn" name="name" type="text" placeholder="Jane Okafor" />
              </div>
              <div className="field">
                <label htmlFor="fc">Company</label>
                <input id="fc" name="company" type="text" placeholder="Optional" />
              </div>
            </div>

            <div className="frow">
              <div className="field">
                <label htmlFor="fe">Work email</label>
                <input id="fe" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="field">
                <label htmlFor="fp">Phone / WhatsApp</label>
                <input id="fp" name="phone" type="tel" placeholder="+00 000 000 0000" />
              </div>
            </div>

            <div className="frow">
              <div className="field">
                <label htmlFor="fi">I&rsquo;m interested in</label>
                <select
                  id="fi"
                  name="interest"
                  defaultValue={
                    interestOptions.find((o) => o.selected)?.value ??
                    interestOptions[0].value
                  }
                >
                  {interestOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="ft">Target launch</label>
                <select
                  id="ft"
                  name="timeline"
                  defaultValue={
                    timelineOptions.find((o) => o.selected)?.value ??
                    timelineOptions[0].value
                  }
                >
                  {timelineOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field" style={{ marginBottom: 6 }}>
              <label htmlFor="fm">Tell us about your desk</label>
              <textarea
                id="fm"
                name="message"
                placeholder="Target markets, expected client numbers, whether you already hold a licence, and anything you already have running."
              />
            </div>

            <label className="consent">
              <input type="checkbox" name="consent" />
              <span>
                I agree to be contacted about this enquiry and accept the privacy
                policy. Trading in leveraged products carries a high risk of loss.
              </span>
            </label>

            <button type="submit" className="btn-accent">
              Request a written quote
              <Icon name="arrowRight" size={17} />
            </button>

            {status ? (
              <div className={cx("form-msg", status.error && "error")} role="status">
                {status.text}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
