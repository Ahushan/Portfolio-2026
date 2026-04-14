import HorizontalCard from "../../components/otherComponents/HorizontalCards";
import { useRef, type JSX } from "react";
import { motion } from "framer-motion";
import { naturalSkillsCardData } from "../../data/Constant";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const About = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative py-5" id="About">

      {/* TITLE (unchanged) */}
      <h1
        className="
          text-3xl md:text-4xl lg:text-5xl uppercase 
          font-extrabold tracking-wide text-nowrap pl-5

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
        "
      >
        tech asernal
      </h1>

      {/* SCROLL AREA (unchanged layout) */}
      <motion.div
        ref={scrollRef}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="
          overflow-x-auto
          overflow-y-visible
          py-4
          flex
          gap-10
          px-[10vw]
          scroll-smooth
          scrollbar-hide
        "
      >

        {naturalSkillsCardData.map((cardData, index) => (
          <motion.div
            key={`${cardData.id}-${index}`}
            variants={card}
            className="shrink-0"
          >
            <HorizontalCard
              cardData={cardData}
              index={index}
            />
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
};

export default About;