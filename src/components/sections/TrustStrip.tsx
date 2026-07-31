import { trustChips } from "@/data/content";
import { delay } from "@/lib/utils";

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap">
        <div className="trust-lbl">
          Built to connect with the stack you already run
        </div>
        <div className="trust-row">
          {trustChips.map((chip, i) => (
            <span className="chip reveal" key={chip} style={delay(i * 40)}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
