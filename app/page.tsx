import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Lab } from "@/components/Lab";
import { Method } from "@/components/Method";
import { Showcase } from "@/components/Showcase";
import { Scholarships } from "@/components/Scholarships";
import { Who } from "@/components/Who";
import { Timeline } from "@/components/Timeline";
import { Apply } from "@/components/Apply";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <About />
        <Lab />
        <Method />
        <Showcase />
        <Scholarships />
        <Who />
        <Timeline />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
