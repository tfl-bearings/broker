import BrandMark from "@/components/ui/BrandMark";
import SmartLink from "@/components/ui/SmartLink";
import { site } from "@/data/site";

interface Props {
  href?: string;
  /** Unique suffix for the mark's gradient ids — one per instance on a page. */
  markId: string;
}

export default function Brand({ href = "#", markId }: Props) {
  return (
    <SmartLink href={href} className="brand">
      <span className="mark">
        <BrandMark uid={markId} size={34} />
      </span>
      <span className="brand-text">
        <span className="n">{site.wordmark}</span>
        <span className="s">{site.submark}</span>
      </span>
    </SmartLink>
  );
}
