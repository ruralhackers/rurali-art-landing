import Image from "next/image";
import { scholarships } from "@/content/site";
import { AnceuText } from "./AnceuText";

export function Scholarships() {
  return (
    <section id={scholarships.id} className="section-gap bg-cream-paper">
      <div className="page-shell grid items-center gap-40 lg:grid-cols-12 lg:gap-60">
        <div className="lg:col-span-6">
          <p className="label-mono text-pure-ink">05 / Becas</p>
          <h2 className="mt-20 text-section text-pure-ink">
            {scholarships.title}
          </h2>
          <p className="mt-24 label-mono text-pure-ink">{scholarships.fact}</p>
          <p className="mt-40 max-w-[34rem] text-body text-pure-ink">
            <AnceuText text={scholarships.lead} />
          </p>
          <p className="mt-20 max-w-[34rem] text-body-sm text-pure-ink">
            {scholarships.body}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="media-card relative aspect-[3/2] bg-bone-gray">
            <Image
              src={scholarships.image.src}
              alt={scholarships.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
