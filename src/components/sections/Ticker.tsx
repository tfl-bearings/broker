import { tickerItems } from "@/data/content";

export default function Ticker() {
  /* Rendered twice so the -50% keyframe loops seamlessly. */
  const track = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {track.map((item, i) => (
          <span className="tick" key={`${item.label}-${i}`}>
            {item.label}{" "}
            <b className={item.accent ? "g" : undefined}>&middot; {item.value}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
