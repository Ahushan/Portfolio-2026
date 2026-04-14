// import { WavyBackground } from "./components/background/WavyBackground"
import About from "./pages/about/About"
import Hero from "./pages/hero/Hero"
import Home from "./pages/home/Home"
import { TechStackData } from "./data/Constant"
import Projects from "./pages/project/Projects"
import Footer from "./components/layout/Footer"
import TechStackSection from "./pages/techStackSection/TechStackSection"
import CertificationsSection from "./pages/certificationsSection/CertificationsSection"
import cosmic from "./assets/images/gif/cosmic.gif";

const App = () => {
  return (
    <>
      <section className="relative bg-black/50 md:bg-black/60 select-none">

        <div className="fixed inset-0 -z-10">
          {/* <WavyBackground /> */}
                <img
        src={cosmic}
        alt="background animation"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-100
          pointer-events-none
          z-0
        "
      />
        </div>

        <div className="relative  z-10">
          <Hero />
          {/* <div className="h-[10vh] bg-linear-to-b from-black via-black/95 to-transparent"></div> */}
          <Home />
          <About />
          <TechStackSection TechStackData={TechStackData} />
          <Projects />
          <CertificationsSection />
          <Footer />
        </div>

      </section>
    </>
  )
}

export default App