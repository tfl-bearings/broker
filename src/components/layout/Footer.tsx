import Brand from "@/components/ui/Brand";
import SmartLink from "@/components/ui/SmartLink";
import { disclaimers, footerColumns, site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Brand markId="foot" />
            <p>{site.tagline}</p>
          </div>

          {footerColumns.map((col) => (
            <div className="foot-col" key={col.title}>
              <h5>{col.title}</h5>
              {col.links.map((link) => (
                <SmartLink key={link.label} href={link.href}>
                  {link.label}
                </SmartLink>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <div>
            {disclaimers.map((text, i) => (
              <p className="disc" key={i}>
                {text}
              </p>
            ))}
          </div>
          <div className="foot-meta">
            {site.email}
            <br />
            &copy; {site.year} {site.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
