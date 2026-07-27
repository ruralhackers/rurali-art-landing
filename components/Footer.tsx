import { partners, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-cream-paper text-pure-ink">
      <div className="page-shell border-t border-bone-gray py-60">
        <div className="grid gap-60 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-section">{site.name}</p>
            <p className="mt-20 max-w-[28rem] text-body-sm">
              Un proyecto de {site.org} en{" "}
              <a
                href={site.anceuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                Anceu
              </a>
              , Galicia.
            </p>
            <div className="mt-40 flex items-start gap-16">
              <div
                className="flex h-60 w-[140px] items-center justify-center rounded-[var(--radius-md)] border border-bone-gray bg-paper-white px-10"
                aria-hidden
              >
                <span className="text-center text-caption leading-tight">
                  Logo Ministerio
                  <br />
                  de Cultura
                </span>
              </div>
              <p className="max-w-xs text-body-sm">{site.ministryCredit}</p>
            </div>
          </div>

          <div className="grid gap-40 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h2 className="label-mono text-charcoal-press">{partners.title}</h2>
              <ul className="mt-20 space-y-16">
                {partners.items.map((partner) => (
                  <li key={partner.name}>
                    {"href" in partner && partner.href ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-mono underline underline-offset-4 transition-opacity hover:opacity-60"
                      >
                        {partner.name}
                      </a>
                    ) : (
                      <p className="label-mono">{partner.name}</p>
                    )}
                    <p className="text-caption text-charcoal-press">{partner.role}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label-mono text-charcoal-press">Contacto</h2>
              <ul className="mt-20 space-y-12 text-body-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    ruralhackers.com
                  </a>
                </li>
                <li>
                  <a
                    href={site.anceuUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    anceu.com
                  </a>
                </li>
                <li className="label-mono text-charcoal-press">
                  {site.hashtags.join(" ● ")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-60 flex flex-col gap-12 border-t border-bone-gray pt-24 label-mono text-caption sm:flex-row sm:items-center sm:justify-between">
          <span>Versión 0.1</span>
          <span>
            <a
              href={site.anceuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Anceu
            </a>{" "}
            ● Ponte Caldelas ● Galicia
          </span>
        </div>
      </div>
    </footer>
  );
}
