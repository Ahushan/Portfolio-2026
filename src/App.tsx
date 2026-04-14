import { Suspense, lazy } from "react";
import cosmic from "./assets/images/gif/cosmic.gif";
import BarLoader from "./components/otherComponents/BarLoader";
import { TechStackData } from "./data/Constant";

const Hero = lazy(() => import("./pages/hero/Hero"));
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/project/Projects"));
const Footer = lazy(() => import("./components/layout/Footer"));
const TechStackSection = lazy(
  () => import("./pages/techStackSection/TechStackSection")
);
const CertificationsSection = lazy(
  () => import("./pages/certificationsSection/CertificationsSection")
);

const App = () => {
  return (
    <section className="relative bg-black/50 md:bg-black/60 select-none">
      <div className="fixed inset-0 -z-10">
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
      <div className="relative z-10">

        <Suspense fallback={<BarLoader />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<BarLoader />}>
          <Home />
        </Suspense>

        <Suspense fallback={<BarLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<BarLoader />}>
          <TechStackSection TechStackData={TechStackData} />
        </Suspense>

        <Suspense fallback={<BarLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<BarLoader />}>
          <CertificationsSection />
        </Suspense>

        <Suspense fallback={<BarLoader />}>
          <Footer />
        </Suspense>

      </div>
    </section>
  );
};

export default App;