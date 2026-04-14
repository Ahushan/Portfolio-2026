import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { type TechStackDataTypes } from "../../data/types";

type TechStackCardProps = {
  skill: TechStackDataTypes;
  index: number;
  isInView: boolean;
};

function TechStackCard({ skill, index, isInView }: TechStackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="p-4 rounded-xl flex items-center relative"
      style={{
        background: `linear-gradient(to right, black, ${skill.color})`,
      }}
    >
      {/* Skill Name */}
      <span className="text-white pl-4 font-light uppercase tracking-widest">
        {skill.name}
      </span>

      {/* Icon */}
      <div className="ml-3 w-10 h-10 flex items-center justify-center">
        <Icon icon={skill.icon} className="w-8 h-8" />
      </div>

      {/* Version */}
      <span className="absolute right-4 text-xs text-white/80">
        v1.0
      </span>
    </motion.div>
  );
}

export default TechStackCard;