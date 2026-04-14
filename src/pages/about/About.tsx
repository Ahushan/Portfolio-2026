import HorizontalCard from "../../components/otherComponents/HorizontalCards";
import { useRef, type JSX } from "react";
import { naturalSkillsCardData } from "../../data/Constant";

const About = (): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative p-5" id="About">

      <h1
        className="
          text-3xl md:text-4xl lg:text-5xl uppercase 
          font-extrabold tracking-wide text-nowrap

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
          "
      >
        tech asernal
      </h1>

      <div
        ref={scrollRef}
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

        {naturalSkillsCardData.map((card, index) => (
          <div key={`${card.id}-${index}`} className="shrink-0">
            <HorizontalCard
              cardData={card}
              index={index}
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default About;