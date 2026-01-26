import { Button } from "@/components/ui/button";
import { JANANI, links } from "@/lib/janani";
import WhatsAppBookingForm from "@/components/site/WhatsAppBookingForm";
import SEO from "@/components/seo/SEO";

export default function Contact() {
  return (
    <main>
      <SEO
        title="Contact | Janani Rehabilitation Centre Hyderabad"
        description="Contact Janani Rehabilitation Centre for admissions & enquiries. Call 8019577648. Located in Hayathnagar, Hyderabad. Serving LB Nagar, Dilsukhnagar, Miryalaguda, Suryapet, Khammam, Nalgonda & all Telangana."
        canonical="/contact"
        keywords="contact janani rehab, de-addiction centre phone, rehabilitation centre address hyderabad, rehab admissions telangana, addiction treatment contact hayathnagar"
        pageType="ContactPage"
      />
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
              If the embedded map is blocked on some devices, use “Open Maps” above.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
