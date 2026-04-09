import { WavyBackground } from "./components/background/WavyBackground"
import About from "./pages/about/About"
import Hero from "./pages/hero/Hero"
import Home from "./pages/home/Home"
import Skills from "./pages/skill/Skills"
import { skillsData } from "./data/Constant"
import Projects from "./pages/project/Projects"
import More from "./pages/more/More"
import Footer from "./components/layout/Footer"

const App = () => {
  return (
    <>
      <section className="relative bg-black/50">

        <div className="fixed inset-0 -z-10">
          <WavyBackground />
        </div>

        <div className="relative  z-10">
          <Hero />
          <Home />
          <About />
          <Skills skillsData={skillsData}/>
          <Projects />
          <More />
          <Footer />
        </div>

      </section>
    </>
  )
}

export default App