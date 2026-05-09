import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Educations from "@/components/Educations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {

  return (
    <div className="
      flex min-h-screen flex-col text-white
      bg-linear-to-b from-white/5 to-black/20
      backdrop-blur-sm
    ">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Educations />
      <Contact />
      <Footer />
    </div>
  )
}
