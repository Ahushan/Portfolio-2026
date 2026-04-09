import HorizontalCard from "../../components/otherComponents/HorizontalCards";
import { useRef, type JSX } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { naturalSkillsCardData } from "../../data/Constant";

const About = (): JSX.Element => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-120%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-transparent"
      id="About"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Horizontal Scroll Wrapper */}
        <motion.div
          style={{ x }}
          className="flex items-center gap-10 px-10 min-w-max"
        >
          <div className="w-[40vw] shrink-0" />

          {/* Cards */}
          {naturalSkillsCardData.map((card, index) => (
            <HorizontalCard
              key={`${card.id}-${card.title}`}
              cardData={card}
              index={index}
            />
          ))}

          <div className="w-[40vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;