import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Educations from "@/components/Educations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import LinkedinReviews from "./components/Reviews";
import Methodology from "./components/Methodology";
import Results from "./components/Results";
import Journey from "./components/Journey";
import FAQ from "./components/FAQ";

export default function App() {

  return (
    <div className="
      flex min-h-screen flex-col text-white
      bg-white/90
      backdrop-blur-sm
    ">
      <Header />
      <Hero />
      <Methodology />
      <Results />
      <Journey />
      <Services />
      <Testimonials />
      <LinkedinReviews />
      <Educations />

      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
