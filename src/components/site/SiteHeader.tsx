import { Button } from "@/components/ui/button";
import { JANANI, links } from "@/lib/janani";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Programs" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const logo = "/logo-hd.png";

interface Props {
  currentPath?: string;
}

export default function SiteHeader({ currentPath = "/" }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-[85px] items-center justify-between gap-4">
        <a
          href="/"
          className="group flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:gap-3"
        >
          <img
            src={logo}
            alt={`${JANANI.name} logo`}
            className="h-10 w-10 rounded-full shadow-soft shrink-0"
            loading="eager"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-semibold text-foreground">Janani</div>
            <div className="text-xs text-muted-foreground">{JANANI.tagline}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <a
                key={item.to}
                href={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="pill" className="shrink-0 px-6 sm:px-8 py-2.5 text-sm sm:text-base font-semibold">
            <a href={links.tel} aria-label={`Call now ${JANANI.phone}`}>
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
