import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import logo from "@/assets/janani/hd/logo-hd.png";
import { JANANI, links } from "@/lib/janani";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4">
        <NavLink
          to="/"
          className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <img
            src={logo}
            alt={`${JANANI.name} logo`}
            className="h-10 w-10 rounded-full shadow-soft"
            loading="eager"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-semibold text-foreground">Janani</div>
            <div className="text-xs text-muted-foreground">Rehabilitation Centre</div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
              activeClassName="text-foreground"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button asChild variant="hero" size="pill" className="shrink-0">
          <a href={links.tel} aria-label={`Call now ${JANANI.phone}`}>
            Call Now
          </a>
        </Button>
      </div>
    </header>
  );
}
