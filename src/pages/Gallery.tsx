import { useEffect, useMemo, useState } from "react";
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
        speed: 0.8, // slow, continuous marquee feel
        stopOnInteraction: false, // allow swipe/drag and then continue
        stopOnMouseEnter: true, // pause on hover (desktop)
      }),
    ];
  }, [reducedMotion]);

  return (
    <main>
      <section className="py-14 md:py-18">
        <div className="container">
          <h1 className="text-4xl md:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-prose text-muted-foreground">
            High-quality photos of the facility. (Slides auto-scroll gently; you can also swipe.)
          </p>

          <div className="mt-8">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={plugins}
              className="mx-auto max-w-6xl"
            >
              <CarouselContent>
                {photos.map((p) => (
                  <CarouselItem key={p.alt} className="md:basis-1/2 lg:basis-[38%]">
                    <figure className="photo-frame group">
                      <img
                        src={p.src}
                        alt={p.alt}
                        className="img-premium aspect-[16/10] w-full object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                        <div className="inline-flex max-w-full items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground shadow-soft backdrop-blur">
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
      </section>
    </main>
  );
}
