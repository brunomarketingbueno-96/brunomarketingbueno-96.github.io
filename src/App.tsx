import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LinkedinReviews from "@/components/Reviews";
import About from "@/components/About";
import Educations from "@/components/Educations";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {

  return (
    <div className="flex min-h-screen flex-col text-white
    bg-white/90 backdrop-blur-sm
    ">
      <Header />
      <Hero />
      <Introduction />
      <Methodology />
      <Results />
      <Services />
      <Testimonials />
      <LinkedinReviews />
      <About />
      <Educations />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}
