import Image from "next/image";
import { hero, site } from "@/content/site";
import { AnceuText } from "./AnceuText";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="top" className="bg-cream-paper pt-40 md:pt-60">
      <div className="page-shell">
        <p className="animate-rise label-mono text-pure-ink">
          <AnceuText text={hero.eyebrow} />
        </p>

        <h1 className="animate-rise mt-20 text-display-xl text-pure-ink">
          {hero.brand}
        </h1>

        <p className="animate-rise-delay-1 mt-24 max-w-[22ch] text-display text-pure-ink md:max-w-[28ch]">
          {hero.headline}
        </p>

        <div className="animate-rise-delay-2 mt-40 flex flex-wrap gap-x-40 gap-y-12 border-y border-bone-gray py-16 label-mono text-pure-ink">
          <span>IA para tu proceso</span>
          <span>
            ●{" "}
            <a
              href={site.anceuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Anceu
            </a>
            , Galicia
          </span>
          <span>● Oct–Nov 2026</span>
          <span>● 2 cohortes × 12</span>
          <span>● {site.org}</span>
        </div>

        <div className="mt-40 flex flex-wrap items-end justify-between gap-40">
          <p className="max-w-[32rem] text-body text-pure-ink">
            <AnceuText text={hero.support} />
          </p>
          <div className="flex flex-wrap gap-10">
            <Button href={hero.primaryCta.href} variant="ink">
              {hero.primaryCta.label} →
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="mt-60 grid items-end gap-20 md:grid-cols-12">
          <div className="media-card relative aspect-[3/4] bg-bone-gray md:col-span-5">
            <Image
              src={hero.images.large.src}
              alt={hero.images.large.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="media-card relative aspect-[16/10] bg-bone-gray md:col-span-7">
            <Image
              src={hero.images.small.src}
              alt={hero.images.small.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
