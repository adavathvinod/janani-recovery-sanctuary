import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { JANANI, links } from "@/lib/janani";
import WhatsAppBookingForm from "@/components/site/WhatsAppBookingForm";

export default function Contact() {
  return (
    <main>
      <Helmet>
        {/* ===============================
            PRIMARY SEO
        =============================== */}
        <title>Contact | Janani Rehabilitation Centre Hyderabad</title>
        <meta name="description" content="Contact Janani Rehabilitation Centre for admissions & enquiries. Call 8019577648. Located in Hayathnagar, Hyderabad. Serving LB Nagar, Dilsukhnagar, Miryalaguda, Suryapet, Khammam, Nalgonda & all Telangana." />
        <meta name="keywords" content="contact janani rehab, de-addiction centre phone, rehabilitation centre address hyderabad, rehab admissions telangana, addiction treatment contact hayathnagar, rehab enquiry lb nagar" />
        <meta name="author" content="Janani Rehabilitation Centre" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <link rel="canonical" href="https://jananideaddiction.com/contact" />

        {/* ===============================
            OPEN GRAPH
        =============================== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jananideaddiction.com/contact" />
        <meta property="og:title" content="Contact | Janani Rehabilitation Centre Hyderabad" />
        <meta property="og:description" content="Contact Janani Rehabilitation Centre for admissions & enquiries. Call 8019577648. Located in Hayathnagar, Hyderabad." />
        <meta property="og:image" content="https://jananideaddiction.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Janani Rehabilitation Centre" />
        <meta property="og:locale" content="en_IN" />

        {/* ===============================
            TWITTER
        =============================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Janani Rehabilitation Centre Hyderabad" />
        <meta name="twitter:description" content="Contact us for admissions & enquiries. Call 8019577648." />
        <meta name="twitter:image" content="https://jananideaddiction.com/og-image.jpg" />

        {/* ===============================
            STRUCTURED DATA
        =============================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Janani Rehabilitation Centre",
            "description": "Contact Janani Rehabilitation Centre for admissions & enquiries in Hyderabad, Telangana.",
            "url": "https://jananideaddiction.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Janani Alcohol & Drug Rehabilitation Centre",
              "telephone": "+91-8019577648",
              "email": "jananirehabilition@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.4 Block, 2nd Floor, Plot No.2, Survey No.268, Word, Street No. 7, Hayathnagar_Khalsa",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "501505",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.329866,
                "longitude": 78.593726
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8019577648",
                "contactType": "Admissions & Enquiry",
                "availableLanguage": ["English", "Hindi", "Telugu"]
              }
            }
          })}
        </script>
      </Helmet>

      <section className="py-14 md:py-18">
        <div className="container grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <h1 className="text-4xl md:text-5xl">Contact</h1>
            <p className="mt-3 text-muted-foreground">Fast enquiry, directions and admissions support.</p>

            <div className="mt-6 rounded-3xl border bg-card p-6 shadow-soft">
              <div className="text-sm font-semibold">Phone</div>
              <a className="mt-1 block text-lg text-foreground underline-offset-4 hover:underline" href={links.tel}>
                {JANANI.phone}
              </a>

              <div className="mt-4 text-sm font-semibold">Email</div>
              <a
                className="mt-1 block text-foreground underline-offset-4 hover:underline"
                href={`mailto:${JANANI.email}`}
              >
                {JANANI.email}
              </a>

              <div className="mt-4 text-sm font-semibold">Address</div>
              <p className="mt-1 text-sm text-muted-foreground">{JANANI.addressLine}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill">
                  <a href={links.tel}>Click to Call</a>
                </Button>
                <Button asChild variant="soft" size="pill">
                  <a href={links.whatsapp} target="_blank" rel="noreferrer">
                    Click to WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="pill">
                  <a href={links.maps} target="_blank" rel="noreferrer">
                    Open Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border bg-card p-6 shadow-soft">
              <WhatsAppBookingForm />
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-elevated">
              <iframe
                title="Janani Rehabilitation Centre Location"
                loading="lazy"
                className="h-[420px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.703149887559!2d78.59153697493335!3d17.329866083547504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba197651edd5b%3A0xa4b90fb80d6ddf39!2sJANANI%20DE-ADDICTION%20%26%20REHABILITATION%20CENTRE!5e0!3m2!1sen!2sin!4v1769425092541!5m2!1sen!2sin"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              If the embedded map is blocked on some devices, use "Open Maps" above.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}