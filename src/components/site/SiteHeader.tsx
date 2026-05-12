import { useState } from "react";
import { Button } from "@/components/ui/button";
import { JANANI, links } from "@/lib/janani";
import { cn } from "@/lib/utils";
import WhatsAppBookingDialog from "@/components/site/WhatsAppBookingDialog";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const logo = "/logo-hd.png";

interface Props {
  currentPath?: string;
}

export default function SiteHeader({ currentPath = "/" }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between gap-4">
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
            <div className="text-xs text-muted-foreground">Rehab Centre</div>
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

        <div className="flex items-center gap-1 sm:gap-2">
          <WhatsAppBookingDialog triggerVariant="outline" triggerLabel="Book" className="text-xs sm:text-sm" />
          <Button asChild variant="hero" size="pill" className="shrink-0 text-xs sm:text-sm">
            <a href={links.tel} aria-label={`Call now ${JANANI.phone}`}>
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t bg-background/95 backdrop-blur md:hidden">
          <div className="container py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.to;
              return (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground hover:bg-accent/50",
                    isActive ? "text-foreground bg-accent/50" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
