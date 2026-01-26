import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { JANANI, links } from "@/lib/janani";
import { NavLink } from "@/components/NavLink";
import heroImg from "@/assets/janani/hd/reception-2-hd.jpg";
import bedsImg from "@/assets/janani/hd/beds-1-hd.jpg";
import cctvImg from "@/assets/janani/hd/cctv-room-hd.jpg";
import buddhaImg from "@/assets/janani/hd/buddha-wall-hd.jpg";
import { Shield, UtensilsCrossed, BedDouble, Leaf, ShieldCheck, Stethoscope, Lock } from "lucide-react";
import SEO from "@/components/seo/SEO";

const features = [
  {
    title: "Luxury Living",
    desc: "Premium high-class beds and spacious rooms.",
    icon: <BedDouble aria-hidden="true" />,
  },
  {
    title: "Nutrition",
    desc: "In-house kitchen providing healthy, balanced meals.",
    icon: <UtensilsCrossed aria-hidden="true" />,
  },
  {
    title: "Safety",
    desc: "24/7 CCTV surveillance for a secure environment.",
    icon: <Shield aria-hidden="true" />,
  },
  {
    title: "Recreation",
    desc: "Large open/free space for meditation and movement.",
    icon: <Leaf aria-hidden="true" />,
  },
];

const trustBadges = [
  {
    title: "24/7 CCTV",
    desc: "Safety-first environment with continuous monitoring.",
    icon: <ShieldCheck aria-hidden="true" />,
  },
  {
    title: "Medical Supervision",
    desc: "Structured care guided by trained professionals.",
    icon: <Stethoscope aria-hidden="true" />,
  },
  {
    title: "Confidential Support",
    desc: "Discreet admissions with respectful communication.",
    icon: <Lock aria-hidden="true" />,
  },
];

const testimonials = [
  {
    name: "Parent of a Patient",
    quote:
      "Before: our home was in constant fear and uncertainty. After: we saw stability return — calm routines, respectful counseling, and real hope for the future.",
  },
  {
    name: "Recovered Client",
    quote:
      "Before: I felt stuck and isolated. After: the structured routine, supportive team, and peaceful environment helped me rebuild confidence—one day at a time.",
  },
  {
    name: "Family Member",
    quote:
      "Before: we didn’t know where to start. After: clear guidance, confidential support, and fast responses made the process feel safe and manageable.",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spot-x", `${Math.max(0, Math.min(100, x))}%`);
      el.style.setProperty("--spot-y", `${Math.max(0, Math.min(100, y))}%`);
    };

    el.addEventListener("pointermove", handle);
    return () => el.removeEventListener("pointermove", handle);
  }, []);

  return (
    <main className="reduce-motion">
      <SEO
        title="Janani Rehabilitation Centre | Best De-Addiction Centre in Hyderabad, Telangana"
        description="Janani Alcohol & Drug Rehabilitation Centre offers professional addiction treatment, detox, counseling & therapy in Hyderabad. Serving Hayathnagar, LB Nagar, Dilsukhnagar, Miryalaguda, Suryapet, Khammam, Nalgonda & all Telangana. Call 8019577648."
        canonical="/"
        keywords="rehabilitation centre hyderabad, de-addiction centre telangana, alcohol rehabilitation, drug rehabilitation, addiction treatment hyderabad, detox centre hayathnagar, rehab lb nagar, addiction counseling dilsukhnagar, best rehab miryalaguda, suryapet rehabilitation, khammam de-addiction, nalgonda rehab centre"
      />
      <section ref={(n) => (heroRef.current = n)} className="bg-hero">
        <div className="container grid gap-10 py-14 md:grid-cols-12 md:items-center md:py-20">
          <div className="md:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              Hyderabad • Premium Recovery & Healing
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] md:text-6xl">A New Beginning, A Better Life.</h1>
            <p className="mt-4 max-w-prose text-lg text-muted-foreground md:text-xl">
              Hyderabad’s Premier Sanctuary for Recovery & Healing.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="pill">
                <a href={links.tel} aria-label={`Call now ${JANANI.phone}`}>
                  Call Now
                </a>
              </Button>
              <Button asChild variant="soft" size="pill">
                <a href={links.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="pill">
                <NavLink to="/treatments">Explore Treatments</NavLink>
              </Button>
            </div>

            <div className="mt-8 grid gap-4 rounded-2xl border bg-background/70 p-5 shadow-soft md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold">Discreet care</div>
                <div className="text-xs text-muted-foreground">Professional, respectful & confidential.</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Structured routine</div>
                <div className="text-xs text-muted-foreground">Stability that supports long-term recovery.</div>
              </div>
              <div>
                <div className="text-sm font-semibold">Trusted environment</div>
                <div className="text-xs text-muted-foreground">Safety-first, calming, clean spaces.</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="photo-frame photo-cinematic">
              <img
                src={heroImg}
                alt="Janani rehabilitation centre reception area"
                className="img-premium photo-hover aspect-[4/3] w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border bg-background/75 p-4 shadow-soft backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">Admissions & Enquiry</div>
                    <div className="text-xs text-muted-foreground">Call {JANANI.phone} • Fast response</div>
                  </div>
                  <div className="hidden sm:block">
                    <Button asChild variant="hero" size="pill">
                      <a href={links.tel}>Call</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-surface py-8">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {trustBadges.map((b) => (
              <article key={b.title} className="flex items-start gap-4 rounded-2xl border bg-background p-5 shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-accent text-accent-foreground shadow-soft">
                  {b.icon}
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground">{b.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl">High-Class Amenities</h2>
              <p className="mt-2 max-w-prose text-muted-foreground">
                A tranquil, professional environment designed for comfort, safety and healing.
              </p>
            </div>
            <Button asChild variant="outline" size="pill" className="hidden md:inline-flex">
              <NavLink to="/gallery">View Gallery</NavLink>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <article key={f.title} className="group rounded-2xl border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-accent text-accent-foreground shadow-soft">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="photo-frame photo-cinematic">
                <img
                  src={bedsImg}
                  alt="Spacious accommodation with premium beds"
                  className="img-premium photo-hover aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <div className="photo-frame photo-cinematic shadow-soft">
                  <img
                    src={cctvImg}
                    alt="Security monitoring and CCTV safety"
                    className="img-premium photo-hover aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="photo-frame photo-cinematic shadow-soft">
                  <img
                    src={buddhaImg}
                    alt="Meditation and wellness ambience"
                    className="img-premium photo-hover aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl">Testimonials</h2>
              <p className="mt-2 max-w-prose text-muted-foreground">
                Realistic recovery journeys—focused on safety, structure, and support.
              </p>
            </div>
            <Button asChild variant="outline" size="pill" className="hidden md:inline-flex">
              <NavLink to="/contact">Talk to Us</NavLink>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border bg-card p-6 shadow-soft">
                <blockquote className="text-sm leading-relaxed text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-foreground">{t.name}</figcaption>
                <p className="mt-1 text-xs text-muted-foreground">Verified enquiry feedback (anonymized).</p>
              </figure>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border bg-background p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Recovery experiences vary by person. For admissions and guidance, reach us directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill">
                  <a href={links.tel}>Call Now</a>
                </Button>
                <Button asChild variant="soft" size="pill">
                  <a href={links.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-surface py-14 md:py-18">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl">Treatment Programs</h2>
              <p className="mt-3 text-muted-foreground">
                We support recovery through structured care with detox, counseling and therapy programs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill">
                  <NavLink to="/treatments">See Treatments</NavLink>
                </Button>
                <Button asChild variant="outline" size="pill">
                  <NavLink to="/contact">Get Directions</NavLink>
                </Button>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="rounded-3xl border bg-background p-6 shadow-soft">
                <h3 className="text-xl">Visit Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">{JANANI.addressLine}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild variant="soft" size="pill">
                    <a href={links.maps} target="_blank" rel="noreferrer">
                      Open Google Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="pill">
                    <a href={links.whatsapp} target="_blank" rel="noreferrer">
                      WhatsApp Enquiry
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
