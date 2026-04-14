import CertificationCard from "../../components/otherComponents/CertificationCard";
import { certificationsData } from "../../data/Constant";

const CertificationsSection = () => {
  return (
    <div
      className="bg-transparent h-fit overflow-hidden p-5 "
      id="CertificationsSection"
    >
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
      <CertificationCard CertificationCardData={certificationsData} />
    </div>
  );
};

export default CertificationsSection;
