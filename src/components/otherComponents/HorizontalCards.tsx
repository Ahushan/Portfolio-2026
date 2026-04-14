import { motion } from "framer-motion";
import type { naturalSkillsCardDataTypes } from "../../data/types";
import animatedGif from "../../assets/images/gif/animated.gif";

export interface HorizontalCardProps {
  cardData: naturalSkillsCardDataTypes;
  index: number;
}

function HorizontalCard({ cardData, index }: HorizontalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      whileHover={{ scale: 1.04 }}
      className="relative max-w-[320px] h-105 rounded-2xl overflow-hidden bg-black shrink-0 border-2 border-white"
    >
      <img
        src={animatedGif}
        alt="bg animation"
        className="absolute inset-0 w-[320px] h-75 object-cover z-10 top-[55%] scale-150"
      />
      <div className="relative h-fit z-20 p-6 flex flex-col gap-4">
        <h2 className={`text-2xl ${cardData.color}  bg-clip-text text-transparent font-bold`}>{cardData.title}</h2>
        <p className="text-sm text-gray-300">{cardData.description}</p>
      </div>
    </motion.div>
  );
}

export default HorizontalCard;