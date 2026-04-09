import { motion } from "framer-motion";
import type { naturalSkillsCardDataTypes } from "../../data/types";

export interface HorizontalCardProps {
  cardData: naturalSkillsCardDataTypes;
  index: number;
}

function HorizontalCard({ cardData, index }: HorizontalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ scale: 1.04 }}
      className="group relative min-w-[320px] h-105 shrink-0"
    >
      {/* 🔥 Neon Border Layer */}
      <div
        className={`absolute inset-0 rounded-2xl ${cardData.color} p-0.5 
        transition-all duration-500`}
      >
        {/* 🧠 Inner Card */}
        <div className="h-full w-full rounded-2xl bg-[#0a0a0a] p-6 flex flex-col justify-between relative overflow-hidden">
          
          {/* ⚡ Glow Pulse Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div
              className={`absolute inset-0 ${cardData.color} blur-2xl opacity-20`}
            />
          </div>

          {/* 🔝 Content */}
          <div className="relative z-10">
            <cardData.icon className="w-10 h-10 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-2xl oswald text-white mb-3 tracking-wide">
              {cardData.title}
            </h3>

            <p className="text-sm atkinson text-gray-400 leading-relaxed">
              {cardData.description}
            </p>
          </div>

          {/* 🔽 Animated Bottom Bar */}
          <div className="relative h-0.5 w-full overflow-hidden">
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