import { Helmet } from "react-helmet-async";
import hero from "@/assets/janani/hd/buddha-wall-hd.jpg";

export default function About() {
  return (
    <main>
      <Helmet>
        {/* ===============================
            PRIMARY SEO
        =============================== */}
        <title>About Us | Janani Rehabilitation Centre Hyderabad</title>
        <meta name="description" content="Learn about Janani Alcohol & Drug Rehabilitation Centre's mission, approach, and commitment to professional addiction recovery in Hyderabad, Telangana. Serving Hayathnagar, LB Nagar, Dilsukhnagar & all Telangana." />
        <meta name="keywords" content="about janani rehab, rehabilitation centre history, addiction treatment hyderabad, de-addiction mission, recovery approach telangana, rehab centre hayathnagar, addiction help lb nagar" />
        <meta name="author" content="Janani Rehabilitation Centre" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <link rel="canonical" href="https://jananideaddiction.com/about" />

        {/* ===============================
            OPEN GRAPH
        =============================== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jananideaddiction.com/about" />
        <meta property="og:title" content="About Us | Janani Rehabilitation Centre Hyderabad" />
        <meta property="og:description" content="Learn about Janani Alcohol & Drug Rehabilitation Centre's mission and commitment to professional addiction recovery in Hyderabad, Telangana." />
        <meta property="og:image" content="https://jananideaddiction.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Janani Rehabilitation Centre" />
        <meta property="og:locale" content="en_IN" />

        {/* ===============================
            TWITTER
        =============================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Janani Rehabilitation Centre Hyderabad" />
        <meta name="twitter:description" content="Professional addiction recovery mission in Hyderabad, Telangana." />
        <meta name="twitter:image" content="https://jananideaddiction.com/og-image.jpg" />

        {/* ===============================
            STRUCTURED DATA
        =============================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Janani Rehabilitation Centre",
            "description": "Learn about Janani Alcohol & Drug Rehabilitation Centre's mission, approach, and commitment to professional addiction recovery in Hyderabad, Telangana.",
            "url": "https://jananideaddiction.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Janani Alcohol & Drug Rehabilitation Centre",
              "description": "Professional addiction treatment and rehabilitation services in Hyderabad",
              "foundingLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "addressCountry": "IN"
                }
              }
            }
          })}
        </script>
      </Helmet>

      <section className="bg-hero">
        <div className="container grid gap-10 py-14 md:grid-cols-12 md:items-center md:py-20">
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-5xl">About Janani</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Janani Alcohol & Drug Rehabilitation Centre is committed to providing structured, professional support for
              recovery—within a calm, clean, and respectful environment.
            </p>
            <div className="mt-6 grid gap-4 rounded-2xl border bg-background/70 p-5 shadow-soft">
              <div>
                <div className="text-sm font-semibold">Our mission</div>
                <div className="text-sm text-muted-foreground">To help individuals reclaim health, dignity, and stability.</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Our approach</div>
                <div className="text-sm text-muted-foreground">
                  A balanced blend of clinical guidance, counseling, routine, and wellness practices.
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-elevated">
              <img src={hero} alt="Wellness ambience at Janani" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}