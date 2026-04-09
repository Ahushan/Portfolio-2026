import CreepyButton from "../../components/buttons/CreepyButton";
import { TextGenerateEffect } from "../../components/texts/TextGenerateEffect";
import Bitmoji from "../../assets/images/my_images/my_bitmoji.png";
import InViewNotification from "../../components/otherComponents/InViewNotification";
import { Bell } from "lucide-react";
import HeartGif from "../../assets/images/gif/512.gif";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-black via-blue-900 to-transparent via-80% text-white px-6 overflow-hidden">

      {/* Availability Badge */}
      <div className="absolute josefin top-4 right-4 inline-flex items-center gap-2 px-4 py-1 border-3 border-green-500/30 text-green-400 rounded-full text-xs md:text-sm backdrop-blur-md">
        <span className="w-2 h-2  bg-green-500 rounded-full animate-pulse"></span>
        Available for Work
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* 🔥 NAME */}
          <h1 className="splas moon-walk leading-tight">
            <div className="text-6xl md:text-7xl lg:text-8xl contrast-150 bg-linear-to-r from-[#CDAB58] via-[#FCF69E] to-[#B49444] bg-clip-text text-transparent">
              Mohamed
            </div>

            <div className="text-6xl md:text-7xl lg:text-8xl contrast-150 md:ml-12 bg-linear-to-r from-[#CDAB58] via-[#FCF69E] to-[#B49444] bg-clip-text text-transparent">
              Ahushan.
            </div>
          </h1>

          {/* Description */}
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            <TextGenerateEffect
              className="mt-6 text-sm text-start md:text-md atkinson text-gray-300 max-w-lg leading-relaxed mx-auto md:mx-0"
              words="I build scalable web applications with modern UI, clean architecture, and real-world performance."
            />
          </blockquote>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 atkinson text-nowrap flex-wrap justify-center md:justify-start">
            <CreepyButton
              coverClassName="bg-black text-white border border-white/20"
              className="bg-transparent text-white hover:scale-105 transition uppercase"
            >
              Download CV
            </CreepyButton>

            <CreepyButton
              coverClassName="bg-black text-white border border-white/20"
              className="bg-transparent text-white hover:scale-105 transition uppercase"
            >
              Contact Me
            </CreepyButton>
          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="flex justify-center items-center">
          <div className="relative group">

            <img
              src={Bitmoji}
              alt="Hero Visual"
              className="relative w-86 sm:w-86 md:w-96 lg:w-205 object-cover rounded-full transition-transform duration-300 group-hover:scale-95"
            />
            <InViewNotification
              tooltipPosition="top-end"
              arrowVariant="v-curve"
              showTooltipCurve={true}
              delay={2500}
              outerClassName="absolute -bottom-10 md:bottom-6"
              messageDivClassName="bg-white text-black text-sm md:text-base josefin font-italic font-[500]"
              icon={<Bell size={18} />}
              arrowClassName=""
            >
              <p className="text-start">
                Hey! I hope you're doing well. Welcome to my portfolio{" "}
                <img
                  src={HeartGif}
                  alt="Hero Visual"
                  className="inline h-6 w-6 align-middle"
                />
              </p>
            </InViewNotification>
          </div>
        </div>

      </div>
    </section>
  );
}