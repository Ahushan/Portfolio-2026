import Certifications from "../../components/otherComponents/Certifications";
import { certificationsData } from "../../data/Constant";

const More = () => {
  return (
    <div
      className="bg-transparent h-fit p-5 overflow-hidden mx-auto max-w-7xl "
      id="More"
    >
        <h1
          className="
          text-4xl md:text-7xl lg:text-8xl uppercase
          font-extrabold tracking-wide text-nowrap

          bg-linear-to-r from-gray-700 via-white to-gray-700
          bg-clip-text text-transparent

          shimmer-text
          "
        >
          Certifications
        </h1>
      <Certifications certifications={certificationsData} />
    </div>
  );
};

export default More;
