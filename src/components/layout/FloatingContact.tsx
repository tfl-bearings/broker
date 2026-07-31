import Icon from "@/components/ui/Icon";
import type { IconName } from "@/lib/types";

/** TODO(launch): point these at the real WhatsApp and Telegram links. */
const channels: Array<{ icon: IconName; label: string; href: string }> = [
  { icon: "message", label: "WhatsApp", href: "#" },
  { icon: "send", label: "Telegram", href: "#" },
];

export default function FloatingContact() {
  return (
    <div className="float">
      {channels.map((c) => (
        <a key={c.label} href={c.href} title={c.label} aria-label={c.label}>
          <Icon name={c.icon} size={21} />
        </a>
      ))}
    </div>
  );
}
