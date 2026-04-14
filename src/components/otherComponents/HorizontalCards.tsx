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
      initial={{ opacity: 1, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      whileHover={{ scale: 1.04 }}
      className="group relative min-w-[320px] h-105 shrink-0"
    >
      {/* 🌊 GIF BACKGROUND */}
      <img
        src={animatedGif}
        alt="background animation"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-20
          blur-sm
          pointer-events-none
          z-0
        "
      />

      {/* 🔥 DARK OVERLAY (important for readability) */}
      <div className="absolute inset-0 bg-[#0a0a0a]/90 z-0 rounded-2xl" />

      {/* 🔥 BORDER LAYER */}
      <div
        className={`absolute inset-0 rounded-2xl ${cardData.color} p-px`}
      >
        {/* 🧠 INNER CARD */}
        <div className="relative h-full w-full rounded-2xl bg-[#0a0a0a] p-6 flex flex-col justify-between overflow-hidden">
          
          {/* ⚡ GLOW EFFECT */}
          <div className="absolute inset-0 z-0">
            <div
              className={`absolute inset-0 ${cardData.color} blur-2xl opacity-20`}
            />
          </div>

          {/* 🔝 CONTENT */}
          <div className="relative z-10">
            <cardData.icon className="w-10 h-10 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-2xl oswald text-white mb-3 tracking-wide">
              {cardData.title}
            </h3>

            <p className="text-sm atkinson text-gray-400 leading-relaxed">
              {cardData.description}
            </p>
          </div>

          {/* 🔽 ANIMATED BAR */}
          <div className="relative h-0.5 w-full overflow-hidden z-10">
            <div
              className={`absolute inset-0 ${cardData.color} -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default HorizontalCard;