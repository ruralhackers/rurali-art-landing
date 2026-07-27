import Image from "next/image";
import { lab } from "@/content/site";
import { AnceuText } from "./AnceuText";

export function Lab() {
  return (
    <section id={lab.id} className="section-gap bg-bone-gray">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">02 / Programa</p>
        <h2 className="mt-20 text-section text-pure-ink">{lab.title}</h2>
        <p className="mt-40 max-w-[32rem] text-body text-pure-ink">
          <AnceuText text={lab.lead} />
        </p>

        <dl className="mt-60 grid grid-cols-2 gap-24 border-y border-bone-gray py-40 md:grid-cols-4">
          {lab.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label-mono text-charcoal-press">{fact.label}</dt>
              <dd className="mt-10 whitespace-nowrap text-stat text-pure-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-60 grid gap-20 lg:grid-cols-3">
          {lab.modules.map((module) => (
            <article key={module.title} className="flex flex-col gap-16">
              <div className="media-card relative aspect-[4/3] bg-cream-paper">
                <Image
                  src={module.image.src}
                  alt={module.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div>
                <p className="label-mono text-pure-ink">
                  {module.title} ● {module.tag}
                </p>
                <p className="mt-10 text-body-sm text-pure-ink">
                  <AnceuText text={module.text} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
