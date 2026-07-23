import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Trust from "@/components/trust";
import Services from "@/components/services";
import Work from "@/components/work";
import Process from "@/components/process";
import Difference from "@/components/difference";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AIAssistant from "@/components/ai-assistant";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>

        <section id="trust">
          <Trust />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="difference">
          <Difference />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Ezzycon AI Assistant */}
      <AIAssistant />
    </>
  );
}