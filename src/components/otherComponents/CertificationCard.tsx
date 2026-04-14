import { Award, Calendar } from "lucide-react";
import TiltCard from "./TiltCard";

type CertificationCardTypes = {
  title: string;
  company: string;
  description: string;
  date: string;
  techStacks: string[];
};

type CertificationCardPropType = {
  CertificationCardData: CertificationCardTypes[];
};

const CertificationCard = ({ CertificationCardData }: CertificationCardPropType) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {CertificationCardData.map((cert, index) => (
        <TiltCard key={`${index}-${cert.title}`}>
          
          <div
            className="
            h-full flex flex-col
            rounded-md p-5
            bg-white/85 backdrop-blur-sm
            border-3 border-indigo-900
            transition-all duration-300
            "
          >
            
            {/* HEADER */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-indigo-900" />
                <span className="text-xs text-black uppercase tracking-wider">
                  Certification
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-black">
                <Calendar className="h-3 w-3" />
                {cert.date}
              </div>
            </div>

            {/* TITLE */}
            <h2 className="text-black text-base font-semibold leading-snug">
              {cert.title}
            </h2>

            {/* COMPANY */}
            <p className="text-indigo-900 text-sm mt-1 font-medium">
              {cert.company}
            </p>

            {/* DESCRIPTION */}
            <div className="flex-1 mt-3">
              <p className="text-sm text-gray-950 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* TECH STACK (SCROLL X) */}
            <div className="mt-4 overflow-x-auto no-scrollbar">
              <div className="flex gap-2 min-w-max">
                {cert.techStacks.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="
                    px-3 py-1 text-xs rounded-md
                    bg-black text-white/90
                    border border-white/10
                    whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </TiltCard>
      ))}
    </div>
  );
};

export default CertificationCard;