import CreepyButton from "../../components/buttons/CreepyButton";
import { TextGenerateEffect } from "../../components/texts/TextGenerateEffect";
import Bitmoji from "../../assets/images/my_images/my_bitmoji.png";
import InViewNotification from "../../components/otherComponents/InViewNotification";
import { Bell } from "lucide-react";
import HeartGif from "../../assets/images/gif/512.gif";
import Resume from "/resume/MOHAMED AHUSHAN J_resume.pdf";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [popUpOpen, setPopUpOpen] = React.useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-6 overflow-hidden">

      {/* AVAILABILITY BADGE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute josefin top-4 right-4 inline-flex items-center justify-center gap-2 px-4 py-1 border-3 border-green-500/30 text-green-400 rounded-full text-xs md:text-sm backdrop-blur-md"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Available for Work
      </motion.div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="moon-walk leading-tight">

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl md:text-7xl lg:text-8xl contrast-150 bg-linear-to-r from-[#CDAB58] via-[#FCF69E] to-[#B49444] bg-clip-text text-transparent"
            >
              Mohamed
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-6xl md:text-7xl lg:text-8xl contrast-150 md:ml-12 bg-linear-to-r from-[#CDAB58] via-[#FCF69E] to-[#B49444] bg-clip-text text-transparent"
            >
              Ahushan.
            </motion.div>

          </h1>

          <blockquote className="mt-6 border-l-2 pl-6 italic">
            <TextGenerateEffect
              className="mt-6 text-sm text-start md:text-md atkinson text-gray-300 max-w-lg leading-relaxed mx-auto md:mx-0"
              words="I build scalable web applications with modern UI, clean architecture, and real-world performance."
            />
          </blockquote>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex gap-4 atkinson text-nowrap flex-wrap justify-center md:justify-start"
          >
            <CreepyButton
              coverClassName="bg-black text-white border border-white/20"
              className="bg-transparent text-white hover:scale-105 transition-transform duration-300 uppercase"
            >
              <a href={Resume} download="MOHAMED AHUSHAN J_resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </CreepyButton>

            <CreepyButton
              coverClassName="bg-black text-white border border-white/20"
              className="bg-transparent text-white hover:scale-105 transition-transform duration-300 uppercase"
            >
              <div onClick={() => setPopUpOpen(true)}>
                Contact Me
              </div>
            </CreepyButton>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative group">

            <img
              src={Bitmoji}
              alt="Hero Visual"
              className="relative w-86 sm:w-86 md:w-96 lg:w-205 object-cover rounded-full transition-transform duration-500 group-hover:scale-95 will-change-transform"
            />

            <InViewNotification
              tooltipPosition="top-end"
              arrowVariant="v-curve"
              showTooltipCurve={true}
              delay={2500}
              outerClassName="absolute -bottom-10 md:bottom-6"
              messageDivClassName="bg-white text-black text-sm md:text-base josefin font-italic font-[500]"
              icon={<Bell size={18} />}
            >
              <p className="text-start">
                Hey! I hope you're doing well. Welcome to my portfolio{" "}
                <img src={HeartGif} className="inline h-6 w-6 align-middle" />
              </p>
            </InViewNotification>

          </div>
        </motion.div>

      </div>

      {/* POPUP */}
      <AnimatePresence>
        {popUpOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setPopUpOpen(false)}
            />

            {/* POPUP BOX */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed bottom-0 left-0 w-full z-50"
            >
              <div className="bg-[#0f0f0f] rounded-t-2xl p-6 max-w-2xl mx-auto border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

                <div className="flex flex-wrap gap-3">
                  <a href="https://linkedin.com/in/mohamed-ahushan-498473265" target="_blank"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-500/25 hover:bg-blue-500/50 transition">
                    <FaLinkedin className="text-blue-500" />
                    LinkedIn
                  </a>

                  <a href="mailto:ahushanahushan@gmail.com"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500/25 hover:bg-red-500/50 transition">
                    <MdEmail className="text-red-400" />
                    Gmail
                  </a>

                  <a href="https://twitter.com/" target="_blank"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-sky-500/25 hover:bg-sky-500/50 transition">
                    <FaTwitter className="text-sky-400" />
                    Twitter
                  </a>

                  <a href="https://www.instagram.com/" target="_blank"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-pink-500/25 hover:bg-pink-500/50 transition">
                    <FaInstagram className="text-pink-400" />
                    Instagram
                  </a>

                  <a href="https://github.com/Ahushan" target="_blank"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/20 hover:bg-white/40 transition">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href="https://leetcode.com/" target="_blank"
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400/25 hover:bg-yellow-400/50 transition">
                    <SiLeetcode className="text-yellow-400" />
                    LeetCode
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}