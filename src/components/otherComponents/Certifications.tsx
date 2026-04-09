import { Award, Calendar } from "lucide-react";
import TiltCard from "./TiltCard";

type CertificationsTypes = {
  title: string;
  company: string;
  description: string;
  date: string;
  techStacks: string[];
};

type CertificationsPropType = {
  certifications: CertificationsTypes[];
};

const Certifications = ({ certifications }: CertificationsPropType) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {certifications.map((cert, index) => (
          <div key={`${index}-${cert.title}`}>
            <TiltCard>
              <div className="h-full flex flex-col
               bg-black rounded-lg p-4 shadow hover:shadow-xl transition-shadow border border-gray-500">
                
                {/* Header */}
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Award className="h-5 w-5 text-indigo-500 mt-1" />
                    <div className="flex items-center gap-2 text-sm text-gray-400 space-mono-regular">
                      <Calendar className="h-4 w-4" />
                      {cert.date}
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-white josefin tracking-tight">
                    {cert.title}
                  </h2>
                  <p className="text-indigo-400 text-sm atkinson uppercase mt-1 font-bold tracking-wide">
                    {cert.company}
                  </p>
                </div>

                {/* Description */}
                 <div className="flex-1 mb-4">
                  <p className="text-xs text-gray-300/90  josefin leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="flex josefin flex-wrap gap-2">
                    {cert.techStacks.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2.5 py-1.5 rounded-full bg-white/20 text-white border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certifications;
