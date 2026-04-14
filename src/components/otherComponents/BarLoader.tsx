import { motion } from "framer-motion";
import type { JSX } from "react";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const bar = {
  initial: {
    scaleY: 0.4,
    opacity: 0.4,
  },
  animate: {
    scaleY: [0.4, 1, 0.4],
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
};

const BarLoader = (): JSX.Element => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      className="
        flex gap-1 h-screen w-screen
        justify-center items-center
        bg-black
      "
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          variants={bar}
          className="h-12 w-2 bg-white rounded-full"
        />
      ))}
    </motion.div>
  );
};

export default BarLoader;