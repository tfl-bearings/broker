import SmartLink from "@/components/ui/SmartLink";

export default function CtaBanner() {
  return (
    <section>
      <div className="wrap">
        <div className="cta-banner reveal">
          <h2>Ready to launch your desk?</h2>
          <p>
            Tell us which tier fits and we will have you live within 2&ndash;3
            days &mdash; with no setup charges. Rent by the month, scale when you
            are ready, leave whenever you want.
          </p>
          <div className="cta-row">
            <SmartLink href="#contact" className="btn-accent">
              Get started today
            </SmartLink>
            <SmartLink href="#pricing" className="btn-ghost">
              Compare the tiers
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
