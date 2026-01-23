import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import FloatingActions from "@/components/site/FloatingActions";
import ScrollToTop from "@/components/site/ScrollToTop";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ScrollToTop />
      <Outlet />
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
