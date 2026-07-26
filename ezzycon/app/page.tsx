import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Trust from "@/components/trust";
import Services from "@/components/services";
import Work from "@/components/work";
import About from "@/components/about";
import founder from "@/components/founder";
import Process from "@/components/process";
import Difference from "@/components/difference";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AIAssistant from "@/components/ai-assistant";

export default function Home() {
  return (
    <>
      {/* ========================================
          NAVIGATION
      ======================================== */}

      <Navbar />

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <main className="overflow-x-hidden">

        {/* ========================================
            HERO
        ======================================== */}

        <section id="home">
          <Hero />
        </section>

        {/* ========================================
            TRUST / CLIENTS
        ======================================== */}

        <section id="trust">
          <Trust />
        </section>

        {/* ========================================
            SERVICES
        ======================================== */}

        <section id="services">
          <Services />
        </section>

        {/* ========================================
            SELECTED WORK
        ======================================== */}

        <section id="work">
          <Work />
        </section>

        {/* ========================================
            FOUNDER / ABOUT
        ======================================== */}

        <section id="about">
          <About />
        </section>

        {/* ========================================
            OUR PROCESS
        ======================================== */}

        <section id="process">
          <Process />
        </section>

        {/* ========================================
            WHY EZZYCON / DIFFERENCE
        ======================================== */}

        <section id="difference">
          <Difference />
        </section>

        {/* ========================================
            CONTACT / CTA
        ======================================== */}

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* ========================================
          FOOTER
      ======================================== */}

      <Footer />

      {/* ========================================
          EZZYCON AI ASSISTANT
      ======================================== */}

      <AIAssistant />
    </>
  );
}