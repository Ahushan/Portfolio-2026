import { motion } from "framer-motion";
import { type skillsDataTypes } from "../../data/types";
import { Icon } from "@iconify/react";

type SkillBarPropTypes = {
  skill: skillsDataTypes;
  index: number;
  isInView: boolean;
};
function SkillsBar({ skill, index, isInView }: SkillBarPropTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`mb-4 p-3 rounded-xl flex items-center  `}
      style={{
        background: `linear-gradient(to right, black, ${skill.color})`,
      }}
    >
      <div className="flex items-center w-full relative">
        <span className="text-white space-mono-regular pl-5 font-medium uppercase tracking-widest">
          {skill.name}
        </span>
        <div className="w-10 flex justify-center items-center h-10 overflow-hidden ml-3">
          <Icon
            icon={skill.icon}
            className={`w-10 h-10`}
          />
        </div>
        <div className="absolute right-10 text-xs space-mono-regular text-white/90 version">
          v.19.2
        </div>
      </div>
    </motion.div>
  );
}

export default SkillsBar;
