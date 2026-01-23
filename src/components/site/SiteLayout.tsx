import { Outlet, ScrollRestoration } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import FloatingActions from "@/components/site/FloatingActions";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <FloatingActions />
      <ScrollRestoration />
    </div>
  );
}
