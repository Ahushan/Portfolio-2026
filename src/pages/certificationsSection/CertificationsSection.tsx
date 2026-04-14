import CertificationCard from "../../components/otherComponents/CertificationCard";
import { certificationsData } from "../../data/Constant";
import { motion } from "framer-motion";

const CertificationsSection = () => {
  return (
    <motion.div
      id="CertificationsSection"
      className="bg-transparent h-fit overflow-hidden p-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* TITLE */}
      <h1
        className="
          text-3xl md:text-4xl lg:text-5xl uppercase
          font-extrabold tracking-wide text-nowrap

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
        "
      >
        Certifications
      </h1>

      {/* CARD */}
      <div className="mt-6">
        <CertificationCard CertificationCardData={certificationsData} />
      </div>
    </motion.div>
  );
};

export default CertificationsSection;