import { motion } from "framer-motion";
import type { JSX } from "react";
import { PixelImage } from "../../components/otherComponents/PixelImage";
import TextGenerateEffect from "../../components/texts/TextGenerateEffect";

import image1 from "../../assets/images/my_images/my-image1.png";
import image2 from "../../assets/images/my_images/my-image2.png";
import image3 from "../../assets/images/my_images/my-image3.png";
import flower from "../../assets/images/gif/flowers.gif"

const Home = (): JSX.Element => {
  const Image_Gallery = [image1, image2, image3];

  return (
    <section className="relative px-4 md:px-8 py-10" id="Home">

      <div className="max-w-6xl  mx-auto flex flex-col lg:flex-row items-center gap-12">

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 flex justify-center md:w-96 rounded-md overflow-hidden">

            <img
              src={flower}
              alt="background animation"
              className="
              absolute inset-0
              w-full h-full
              object-cover
              pointer-events-none
              select-none
              opacity-80
              z-0
              "
            />

            <div className="relative z-10">
              <PixelImage
                src={Image_Gallery}
                showReplayButton={true}
                grayscaleAnimation={false}
                grid="3x3"
              />
            </div>

          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="max-w-xl">

            <h1
              className=" my-2
          text-3xl md:text-4xl lg:text-5xl uppercase
          font-extrabold tracking-wide text-nowrap

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
          "
            >
              About me
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TextGenerateEffect
                className="
                text-md md:text-base
                text-white
                leading-relaxed
                tracking-wide font-light
                "
                words="A versatile creator skilled in frontend and backend development, database management, UI/UX design, and content writing. My expertise spans crafting seamless user interfaces to building robust backend systems, ensuring cohesive and user-friendly experiences. I design efficient databases and understand scalable system design principles. Proficient in Git for collaboration, I transform ideas into impactful digital products. Looking ahead, I aim to integrate AI and ML into my projects to build innovative solutions."
              />

            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;