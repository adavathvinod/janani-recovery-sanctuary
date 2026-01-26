import hero from "@/assets/janani/hd/buddha-wall-hd.jpg";
import SEO from "@/components/seo/SEO";

export default function About() {
  return (
    <main>
      <SEO
        title="About Us | Janani Rehabilitation Centre Hyderabad"
        description="Learn about Janani Alcohol & Drug Rehabilitation Centre's mission, approach, and commitment to professional addiction recovery in Hyderabad, Telangana. Serving Hayathnagar, LB Nagar, Dilsukhnagar & all Telangana."
        canonical="/about"
        keywords="about janani rehab, rehabilitation centre history, addiction treatment hyderabad, de-addiction mission, recovery approach telangana"
      />
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
