import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
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
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    const id = window.setInterval(() => {
      api.scrollNext();
    }, 2600);
    return () => window.clearInterval(id);
  }, [api]);

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
              setApi={(a) => setApi(a)}
              opts={{ loop: true, align: "start" }}
              className="mx-auto max-w-5xl"
            >
              <CarouselContent>
                {photos.map((p) => (
                  <CarouselItem key={p.alt} className="md:basis-1/2 lg:basis-1/3">
                    <div className="overflow-hidden rounded-3xl border bg-card shadow-soft">
                      <img
                        src={p.src}
                        alt={p.alt}
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
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
