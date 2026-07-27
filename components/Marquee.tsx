export function Marquee() {
  const line =
    "CONVOCATORIA ABIERTA ● MÁS TIEMPO DE TALLER ● IA PARA TU PROCESO ● 19–25 OCT ● 2–8 NOV ● ANCEU ● ";

  return (
    <div
      className="overflow-hidden bg-cream-paper py-20"
      style={{ minHeight: 40 }}
      aria-hidden
    >
      <div className="animate-marquee flex w-max whitespace-nowrap label-mono text-pure-ink">
        <span className="px-10">{line.repeat(4)}</span>
        <span className="px-10">{line.repeat(4)}</span>
      </div>
    </div>
  );
}
