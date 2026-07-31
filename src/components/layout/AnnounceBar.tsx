import SmartLink from "@/components/ui/SmartLink";
import { announcement } from "@/data/site";

export default function AnnounceBar() {
  return (
    <div className="announce">
      <div className="announce-inner">
        <span>
          <b>{announcement.prefix}</b> {announcement.text}
        </span>
        <SmartLink href={announcement.href}>
          {announcement.linkLabel} &rarr;
        </SmartLink>
      </div>
    </div>
  );
}
