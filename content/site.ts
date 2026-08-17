export const site = {
  name: "RURALI-ART",
  org: "Rural Hackers",
  email: "ana@ruralhackers.com",
  url: "https://ruralhackers.com",
  anceuUrl: "https://anceu.com",
  pegadasUrl: "https://linktr.ee/pegadas.do.recordo",
  hashtags: ["#RuralIART", "#IACreativa"],
  ministryCredit: "Actividad subvencionada por el Ministerio de Cultura",
  description:
    "Lab intensivo en Anceu para artistas: aprende a usar la IA en tus procesos y recupera horas para crear. Dos cohortes, ética, comunidad y toolkit abierto.",
} as const;

export const nav = [
  { href: "#que-es", label: "Qué es" },
  { href: "#lab", label: "Lab" },
  { href: "#metodo", label: "Método" },
  { href: "#muestra", label: "Muestra" },
  { href: "#becas", label: "Becas" },
  { href: "#quien", label: "Quiénes" },
  { href: "#calendario", label: "Calendario" },
  { href: "#convocatoria", label: "Convocatoria" },
] as const;

export const hero = {
  brand: "RURALI-ART",
  eyebrow: "Anceu · Galicia · Oct–Nov 2026",
  headline: "La IA no tiene que hacer tu obra. Puede devolverte el tiempo para hacerla.",
  support:
    "Siete días en Anceu — con alojamiento y manutención incluidos — para meter la IA en tu flujo de trabajo: investigar, organizar, preparar, documentar. Menos horas en lo que te frena, más en lo que solo tú puedes crear.",
  primaryCta: { href: "#convocatoria", label: "Quiero participar" },
  secondaryCta: { href: "#que-es", label: "Cómo funciona" },
  images: {
    large: {
      src: "/images/hero-large.jpg",
      alt: "Ordenador entre helechos en Anceu — tecnología en el rural",
      width: 1500,
      height: 2000,
    },
    small: {
      src: "/images/hero-small.jpg",
      alt: "Hórreo en Anceu — territorio donde nace RURALI-ART",
      width: 2000,
      height: 1350,
    },
  },
} as const;

export const about = {
  id: "que-es",
  title: "Para ti, si te falta tiempo de taller",
  lead:
    "Sabes lo que es: la gestión, la investigación, los mails, los borradores y la producción se comen el día. Este lab es para artistas que quieren usar la IA ahí — en lo operativo — y proteger las horas de creación.",
  body: "No venimos a pedirte que la máquina haga tu obra. Venimos a que salgas con procesos claros, herramientas concretas y criterio ético para tu estudio. Anceu da calma; la comunidad da contexto; tú te llevas el método.",
  pillars: [
    {
      title: "Productividad creativa",
      text: "IA para investigar más rápido, organizar materiales, preparar borradores y documentar. Tú decides el criterio; la herramienta acelera.",
    },
    {
      title: "Procesos que se quedan",
      text: "No es un taller de demos. Diseñas flujos que puedas repetir en tu práctica cuando vuelvas a casa.",
    },
    {
      title: "Ética sin rollos vacíos",
      text: "Autoría, licencias, consentimiento y sesgos aplicados a cómo trabajas tú — no a un manifiesto abstracto.",
    },
  ],
} as const;

export const lab = {
  id: "lab",
  title: "AI Creators Lab",
  lead:
    "Dos cohortes de 12 artistas en Anceu. Siete días con un ritmo claro: mañanas de formación en IA facilitada por el equipo de Rural Hackers y tardes de creación colectiva en la aldea.",
  facts: [
    { label: "Cohortes", value: "2" },
    { label: "Artistas por cohorte", value: "12" },
    { label: "Duración", value: "7 días" },
    { label: "Cuándo", value: "Oct–Nov" },
  ],
  modules: [
    {
      title: "Formación en IA",
      tag: "Mañanas",
      text: "Sesiones prácticas facilitadas por el equipo de Rural Hackers para aprender herramientas de IA (texto, imagen, audio, audiovisual) y meterlas en tu flujo de trabajo. Investigar, organizar, preparar y documentar más rápido — para recuperar tiempo de taller. Priorizamos herramientas accesibles y de código abierto.",
      image: {
        src: "/images/lab-atelier.jpg",
        alt: "Rogelio, vecino de Anceu — memoria viva del territorio",
        width: 2000,
        height: 1333,
      },
    },
    {
      title: "Ética, licencias y uso responsable",
      tag: "Transversal",
      text: "Atraviesa toda la experiencia: propiedad intelectual, licencias Creative Commons, autoría, sesgos y uso responsable de datos. Cada herramienta se mira con criterio ético; juntos armáis un protocolo útil para vuestro estudio.",
      image: {
        src: "/images/lab-ruralia.jpg",
        alt: "Gato junto a un portátil en Anceu — vida y tecnología compartidas",
        width: 1500,
        height: 2000,
      },
    },
    {
      title: "Creación colectiva",
      tag: "Tardes",
      text: "Por ejemplo puedes continuar Pegadas do Recordo, un proyecto en marcha sobre memoria viva — historias y experiencias de Anceu —.",
      image: {
        src: "/images/lab-cowork.jpg",
        alt: "Caminata por Anceu con mochilas — inmersión en el territorio",
        width: 2000,
        height: 1125,
      },
    },
  ],
} as const;

export const method = {
  id: "metodo",
  title: "Método: la IA al servicio de tu estudio",
  lead:
    "Aprendes haciendo. Pruebas herramientas sobre tareas reales de tu práctica, mides qué te ahorra tiempo y te quedas solo con lo que sirve. El territorio y la comunidad acompañan; el criterio creativo es tuyo.",
  items: [
    {
      title: "Procesos, no demos",
      text: "Cada sesión apunta a un cuello de botella concreto: investigación, organización, preparación de materiales, documentación. Sales con flujos que puedes repetir.",
      image: {
        src: "/images/lote.png",
        alt: "Trabajo de procesos creativos en Anceu",
        width: 615,
        height: 774,
      },
    },
    {
      title: "Comunidad como contexto",
      text: "Trabajas con memoria y territorio de Anceu, con consentimiento y diálogo. No es extracción: es práctica situada que pone a prueba tus procesos con material vivo.",
      image: {
        src: "/images/mural.jpg",
        alt: "Mural en Anceu — práctica creativa en el territorio",
        width: 1505,
        height: 2000,
      },
    },
  ],
} as const;

export const showcase = {
  id: "muestra",
  title: "Muestra y conversación",
  lead:
    "Cierre público gratuito en la aldea: compartís lo que habéis trabajado — procesos, hallazgos y piezas — en proyecciones, instalaciones, performances y espacios no convencionales.",
  image: {
    src: "/images/se.jpg",
    alt: "Momento de la muestra y conversación en Anceu",
    width: 2000,
    height: 1333,
  },
} as const;

export const scholarships = {
  id: "becas",
  title: "Becas de profundización",
  lead:
    "Becas de un mes para desarrollar tu proyecto en Anceu en marzo de 2027. Cinco artistas de ambas cohortes continúan en Anceu Coliving con beca completa: alojamiento, manutención, mentoría semanal y recursos técnicos.",
  body: "Financiadas con mecenazgo privado (entre los partners, Eleven Yellow).",
  fact: "5 plazas · 1 mes · Marzo 2027 · Anceu",
  image: {
    src: "/images/naranjas.jpg",
    alt: "Naranjas en Anceu durante la residencia creativa",
    width: 2000,
    height: 1333,
  },
} as const;

export const who = {
  id: "quien",
  title: "Quiénes somos",
  lead:
    "RURALI-ART es un proyecto de Rural Hackers: cultura, tecnología e innovación comunitaria desde Anceu, para que el rural sea un lugar donde crear y trabajar mejor — no solo un paisaje.",
  image: {
    src: "/images/ordenador-mano.jpg",
    alt: "Ordenador sostenido hacia el cielo en Anceu — Rural Hackers",
    width: 2000,
    height: 1499,
  },
  links: [
    { href: "https://ruralhackers.com", label: "Rural Hackers" },
    { href: "https://anceu.com", label: "Anceu Coliving" },
  ],
} as const;

export const timeline = {
  id: "calendario",
  title: "Calendario",
  phases: [
    {
      when: "1 ago–1 sep 2026",
      title: "Inscripción",
      text: "Envía tu solicitud y elige cohorte.",
    },
    {
      when: "19–25 oct 2026",
      title: "Cohorte 1",
      text: "Siete días de lab en Anceu.",
    },
    {
      when: "2–8 nov 2026",
      title: "Cohorte 2",
      text: "Siete días de lab en Anceu.",
    },
    {
      when: "Marzo 2027",
      title: "Becas",
      text: "Un mes en Anceu para cinco artistas de las cohortes.",
    },
  ],
} as const;

export const apply = {
  id: "convocatoria",
  title: "Convocatoria",
  lead:
    "Si quieres usar la IA para recuperar tiempo de taller — no para que te sustituya — esta convocatoria es tuya.",
  included: {
    title: "Qué incluye",
    items: [
      "Alojamiento en Anceu",
      "Manutención",
      "Facilitación del aprendizaje de IA por el equipo de Rural Hackers",
    ],
    note: "No incluye el transporte hasta la aldea de Anceu.",
  },
  requirements: [
    "Perfil artístico o creativo (visual, sonoro, textual, audiovisual, híbrido…).",
    "Motivación clara: mejorar productividad y procesos con IA, no solo generar obra con ella.",
    "Disponibilidad 7 días en Anceu: 19–25 octubre o 2–8 noviembre 2026.",
    "Respeto por la ética, el consentimiento y el trabajo con la comunidad local.",
  ],
  ctaLabel: "Inscribirme",
  cohorts: [
    {
      id: "ed1",
      label: "Cohorte 1",
      edition: "ED1",
      dates: "19–25 octubre 2026",
      formUrl: "https://forms.gle/ryQwRzf43VykFWVY7",
    },
    {
      id: "ed2",
      label: "Cohorte 2",
      edition: "ED2",
      dates: "2–8 noviembre 2026",
      formUrl: "https://forms.gle/ryQwRzf43VykFWVY7",
    },
  ],
} as const;

export const partners = {
  title: "Partners y apoyo",
  items: [
    { name: "Ministerio de Cultura", role: "Ayuda a la acción y promoción cultural" },
    { name: "Rural Hackers", role: "Entidad impulsora" },
    {
      name: "Eleven Yellow",
      role: "Mecenazgo y mentoría técnica",
      href: "https://www.elevenyellow.com",
    },
  ],
} as const;
