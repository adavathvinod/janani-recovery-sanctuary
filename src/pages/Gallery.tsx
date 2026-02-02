import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import reception1 from "@/assets/janani/hd/reception-1-hd.jpg";
import reception2 from "@/assets/janani/hd/reception-2-hd.jpg";
import beds from "@/assets/janani/hd/beds-1-hd.jpg";
import cctv from "@/assets/janani/hd/cctv-room-hd.jpg";
import timetable from "@/assets/janani/hd/timetable-hd.jpg";
import aaSteps from "@/assets/janani/hd/aa-steps-hd.jpg";
import buddha from "@/assets/janani/hd/buddha-wall-hd.jpg";

const photos = [
  { src: reception1, alt: "Reception area" },
  { src: reception2, alt: "Reception and seating" },
  { src: beds, alt: "Accommodation and beds" },
  { src: cctv, alt: "CCTV safety monitoring" },
  { src: buddha, alt: "Wellness ambience" },
  { src: timetable, alt: "Daily routine timetable" },
  { src: aaSteps, alt: "Twelve steps principles poster" },
];

export default function Gallery() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mql.matches);
    update();

    // Safari < 14
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyMql = mql as any;
    if (anyMql.addEventListener) {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }
    mql.addListener(update);
    return () => mql.removeListener(update);
  }, []);

  const plugins = useMemo(() => {
    if (reducedMotion) return [];
    return [
      AutoScroll({
        speed: 0.8,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ];
  }, [reducedMotion]);

  return (
    <main>
      <Helmet>
        {/* ===============================
            PRIMARY SEO
        =============================== */}
        <title>Gallery | Janani Rehabilitation Centre Photos</title>
        <meta name="description" content="View photos of Janani Rehabilitation Centre's facility - premium accommodation, CCTV security, meditation areas & more. Best de-addiction centre in Hyderabad, Telangana." />
        <meta name="keywords" content="rehab centre photos, rehabilitation facility hyderabad, de-addiction centre images, janani rehab gallery, addiction treatment facility telangana, rehab rooms hyderabad" />
        <meta name="author" content="Janani Rehabilitation Centre" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana" />
        <link rel="canonical" href="https://jananideaddiction.com/gallery" />

        {/* ===============================
            OPEN GRAPH
        =============================== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jananideaddiction.com/gallery" />
        <meta property="og:title" content="Gallery | Janani Rehabilitation Centre Photos" />
        <meta property="og:description" content="View photos of Janani Rehabilitation Centre's premium facility in Hyderabad, Telangana." />
        <meta property="og:image" content="https://jananideaddiction.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Janani Rehabilitation Centre" />
        <meta property="og:locale" content="en_IN" />

        {/* ===============================
            TWITTER
        =============================== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Janani Rehabilitation Centre Photos" />
        <meta name="twitter:description" content="View photos of our premium rehabilitation facility in Hyderabad." />
        <meta name="twitter:image" content="https://jananideaddiction.com/og-image.jpg" />

        {/* ===============================
            STRUCTURED DATA
        =============================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Janani Rehabilitation Centre Gallery",
            "description": "Photo gallery showcasing Janani Rehabilitation Centre's premium facilities in Hyderabad, Telangana.",
            "url": "https://jananideaddiction.com/gallery",
            "mainEntity": {
              "@type": "ImageGallery",
              "name": "Facility Photos",
              "description": "Premium accommodation, CCTV security, meditation areas and more at Janani Rehabilitation Centre"
            }
          })}
        </script>
      </Helmet>

      <section className="py-14 md:py-18">
        <div className="container">
          <h1 className="text-4xl md:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-prose text-muted-foreground">
            High-quality photos of the facility. (Slides auto-scroll gently; you can also swipe.)
          </p>

          <div className="mt-8">
            {/* Full-bleed, premium marquee strip */}
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
              <Carousel opts={{ loop: true, align: "start" }} plugins={plugins} className="w-full">
                <CarouselContent className="py-2">
                  {photos.map((p) => (
                    <CarouselItem key={p.alt} className="basis-[86%] sm:basis-[70%] md:basis-[44%] lg:basis-[34%]">
                      <figure className="photo-frame photo-cinematic group">
                        <img
                          src={p.src}
                          alt={p.alt}
                          className="img-premium aspect-[16/10] w-full object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                          <div className="inline-flex max-w-full items-center gap-2 rounded-full border bg-background/55 px-3 py-1 text-xs text-foreground shadow-soft backdrop-blur">
                            {p.alt}
                          </div>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}