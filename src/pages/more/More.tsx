import Certifications from "../../components/otherComponents/Certifications";
import { certificationsData } from "../../data/Constant";

const More = () => {
  return (
    <div
      className="bg-transparent h-fit p-5 overflow-hidden mx-auto max-w-7xl "
      id="More"
    >
      <h1 className="text-[30px] w-fit pb-8 oswald  text-white font-extrabold  text-balance">
        CERTIFICATIONS
      </h1>
      <Certifications certifications={certificationsData} />
    </div>
  );
};

export default More;
