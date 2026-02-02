import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { JANANI, links } from "@/lib/janani";

const items = [
  {
    title: "Detox",
    desc: "Supervised detox support to help manage withdrawal and stabilize safely.",
  },
  {
    title: "Counseling",
    desc: "Individual and group counseling focused on relapse prevention and life skills.",
  },
  {
    title: "Therapy Programs",
    desc: "Structured therapy plans designed to support long-term recovery and emotional wellbeing.",
  },
];

export default function Treatments() {
  return (
    <main>
      <Helmet>
        {/* ===============================
            PRIMARY SEO
        =============================== */}
        <title>Treatments | Alcohol & Drug Rehabilitation in Hyderabad</title>
        <meta name="description" content="Explore detox, counseling & therapy programs at Janani Rehabilitation Centre. Professional addiction treatment in Hyderabad, Telangana. Serving LB Nagar, Dilsukhnagar, Hayathnagar & all Telangana." />
        <meta name="keywords" content="alcohol detox hyderabad, drug rehabilitation treatment, addiction counseling telangana, therapy programs, detox centre lb nagar, rehab dilsukhnagar, addiction treatment hayathnagar, substance abuse treatment" />
        <meta name="author" content="Janani Rehabilitation Centre" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <link rel="canonical" href="https://jananideaddiction.com/treatments" />

        {/* ===============================
            OPEN GRAPH
        =============================== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jananideaddiction.com/treatments" />
        <meta property="og:title" content="Treatments | Alcohol & Drug Rehabilitation in Hyderabad" />
        <meta property="og:description" content="Explore detox, counseling & therapy programs at Janani Rehabilitation Centre in Hyderabad, Telangana." />
        <meta property="og:image" content="https://jananideaddiction.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Janani Rehabilitation Centre" />
        <meta property="og:locale" content="en_IN" />

        {/* ===============================
            TWITTER
        =============================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Treatments | Alcohol & Drug Rehabilitation Hyderabad" />
        <meta name="twitter:description" content="Professional detox, counseling & therapy programs in Hyderabad, Telangana." />
        <meta name="twitter:image" content="https://jananideaddiction.com/og-image.jpg" />

        {/* ===============================
            STRUCTURED DATA
        =============================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Treatment Programs at Janani Rehabilitation Centre",
            "description": "Explore detox, counseling & therapy programs at Janani Rehabilitation Centre in Hyderabad, Telangana.",
            "url": "https://jananideaddiction.com/treatments",
            "mainEntity": {
              "@type": "MedicalTherapy",
              "name": "Addiction Treatment Programs",
              "description": "Comprehensive addiction treatment including detox, counseling, and therapy",
              "medicineSystem": "Conventional medicine with holistic support",
              "relevantSpecialty": ["Addiction Medicine", "Psychiatry"]
            },
            "specialty": {
              "@type": "MedicalSpecialty",
              "name": "Addiction Medicine"
            }
          })}
        </script>
      </Helmet>

      <section className="py-14 md:py-18">
        <div className="container">
          <h1 className="text-4xl md:text-5xl">Treatments</h1>
          <p className="mt-3 max-w-prose text-muted-foreground">
            Our treatment offerings are designed to support recovery with structure, care and a calm environment.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {items.map((i) => (
              <article key={i.title} className="rounded-2xl border bg-card p-6 shadow-soft">
                <h2 className="text-xl">{i.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border bg-surface p-6 shadow-soft md:p-8">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl">Ready to talk?</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Call <span className="text-foreground">{JANANI.phone}</span> for admissions and quick enquiry.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="hero" size="pill">
                    <a href={links.tel}>Call Now</a>
                  </Button>
                  <Button asChild variant="outline" size="pill">
                    <NavLink to="/contact">Visit Contact</NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}