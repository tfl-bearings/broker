import { cx } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  lede?: string;
  center?: boolean;
  onDark?: boolean;
}

export default function SectionHead({
  eyebrow,
  title,
  lede,
  center,
  onDark,
}: Props) {
  return (
    <div className={cx("sec-head", "reveal", center && "center")}>
      <span className={cx("eyebrow", onDark && "on-dark")}>{eyebrow}</span>
      <h2>{title}</h2>
      {lede ? <p>{lede}</p> : null}
    </div>
  );
}
