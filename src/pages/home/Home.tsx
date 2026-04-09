import { motion } from "framer-motion";
import type { JSX } from "react";
import { PixelImage } from "../../components/otherComponents/PixelImage";
import TextGenerateEffect from "../../components/texts/TextGenerateEffect";
import image1 from '../../assets/images/my_images/my-image1.png'
import image2 from '../../assets/images/my_images/my-image2.png'

const Home = (): JSX.Element => {
  const Image_Gallery = [image1, image2]
  return (
    <div className="relative m-4 rounded-2xl" id="Home">

      {/* Main Flex Container */}
      <div className="h-fit w-full flex flex-col lg:flex-row items-center lg:items-center gap-10">

        {/* LEFT SIDE - IMAGE */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-72.5 md:w-105 overflow-hidden">
            <PixelImage src={Image_Gallery} showReplayButton={true} grayscaleAnimation={false} grid="3x3" />
            <div className="absolute flex justify-center -bottom-1 bg-linear-to-t  from-white via-[#B49444] to-transparent from-10% h-50 w-72 select-none md:h-76 md:w-86 z-0 rounded-lg">
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - ABOUT */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div
            className="about mx-auto lg:mx-0
            max-w-[90%] lg:max-w-[80%]
            rounded-md shadow-sm bg-black/50 
            p-5 text-gray-100 transition-all duration-500 ease-in-out
            hover:scale-[0.98]"
          >
            <motion.div
              className="text-gray-300 text-sm md:text-base leading-relaxed md:leading-7 
              tracking-wide ease-in-out select-none lg:text-justify hyphens-auto 
              space-y-4 font-techmono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <TextGenerateEffect
                className="space-mono-regular text-gray-300 text-sm md:text-base leading-relaxed md:leading-7 tracking-wide ease-in-out select-none lg:text-justify hyphens-auto space-y-4"
                words="A versatile creator skilled in frontend and backend development, database management, UI/UX design, and content writing. My expertise spans crafting seamless user interfaces to building robust backend systems, ensuring that every aspect of a project is cohesive and user-friendly. I design and optimize databases for efficient data handling and understand scalable system design principles that adapt to evolving needs. I am also proficient in version control systems, particularly Git, which facilitates effective collaboration and code management within teams. Driven by creativity and precision, I turn ideas into impactful digital experiences. Looking ahead, I aspire to deepen my knowledge in artificial intelligence and machine learning, aiming to integrate these technologies into my projects to create innovative solutions that enhance user experiences and drive business success."
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
