import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Projects from "@/components/Projects";
import Educations from "@/components/Educations";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "./components/Services";

export default function App() {

  return (
    <div className="
      flex min-h-screen flex-col text-white
      bg-white/90
      backdrop-blur-sm
    ">
      <Header />
      <Hero />
      <Services />
      <Educations />
      {/* <About />
      <Projects />
      <Contact /> */}
      <Footer />
    </div>
  )
}
