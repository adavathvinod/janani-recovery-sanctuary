import { Button } from "@/components/ui/button";
import { JANANI, links } from "@/lib/janani";
import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";

type Action = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const actions: Action[] = [
  {
    label: "WhatsApp",
    href: links.whatsapp,
    icon: <MessageCircle aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: links.instagram,
    icon: <Instagram aria-hidden="true" />,
  },
  {
    label: "Call",
    href: links.tel,
    icon: <Phone aria-hidden="true" />,
  },
  {
    label: "Maps",
    href: links.maps,
    icon: <MapPin aria-hidden="true" />,
  },
];

export default function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 md:inset-auto md:bottom-auto md:right-5 md:top-1/2 md:-translate-y-1/2">
      {/* Mobile bottom bar */}
      <div className="pointer-events-auto mx-auto flex w-[min(520px,calc(100%-2rem))] items-center justify-between gap-2 rounded-full border bg-background/80 p-2 shadow-elevated backdrop-blur md:hidden">
        {actions.map((a) => (
          <Button
            key={a.label}
            asChild
            variant="soft"
            size="icon"
            className="h-11 w-11 rounded-full"
          >
            <a href={a.href} target={a.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span className="sr-only">{a.label}</span>
              {a.icon}
            </a>
          </Button>
        ))}
      </div>

      {/* Desktop vertical stack */}
      <div className="pointer-events-auto hidden flex-col gap-2 md:flex">
        {actions.map((a, idx) => (
          <Button
            key={a.label}
            asChild
            variant={idx === 2 ? "hero" : "outline"}
            size="icon"
            className="h-11 w-11 rounded-full shadow-soft"
          >
            <a
              href={a.href}
              aria-label={a.label === "Call" ? `Call ${JANANI.phone}` : a.label}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {a.icon}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
