import { apply } from "@/content/site";
import { AnceuText } from "./AnceuText";
import { Button } from "./Button";

export function Apply() {
  return (
    <section id={apply.id} className="section-gap bg-cream-paper pb-160">
      <div className="page-shell">
        <p className="label-mono text-pure-ink">08 / Participa</p>
        <h2 className="mt-20 text-section text-pure-ink">{apply.title}</h2>
        <p className="mt-40 max-w-[34rem] text-body text-pure-ink">{apply.lead}</p>

        <div className="mt-40 max-w-[34rem] border-t border-bone-gray pt-20">
          <p className="label-mono text-pure-ink">{apply.included.title}</p>
          <ul className="mt-16 space-y-12">
            {apply.included.items.map((item) => (
              <li key={item} className="text-body-sm text-pure-ink">
                <AnceuText text={item} />
              </li>
            ))}
          </ul>
          <p className="mt-16 text-body-sm text-charcoal-press">
            <AnceuText text={apply.included.note} />
          </p>
        </div>

        <ul className="mt-40 max-w-[34rem] space-y-16">
          {apply.requirements.map((item) => (
            <li
              key={item}
              className="border-l border-pure-ink pl-20 text-body-sm text-pure-ink"
            >
              <AnceuText text={item} />
            </li>
          ))}
        </ul>

        <div className="mt-60 grid gap-40 md:grid-cols-2">
          {apply.cohorts.map((cohort) => (
            <article
              key={cohort.id}
              className="flex flex-col border-t border-bone-gray pt-20"
            >
              <p className="label-mono text-charcoal-press">
                {cohort.edition} ● {cohort.label}
              </p>
              <p className="mt-16 max-w-[18ch] text-display text-pure-ink">
                {cohort.dates}
              </p>
              <div className="mt-24">
                <Button
                  href={cohort.formUrl}
                  variant="ink"
                  className="w-fit"
                >
                  {apply.ctaLabel} →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
