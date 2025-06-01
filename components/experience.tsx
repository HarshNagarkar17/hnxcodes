"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Softcolon Technologies",
    period: "Feb 2024 - Present",
    current: true,
    description:
      "Building scalable frontend applications and refining UI systems for better user experience and maintainability",
  },
  {
    title: "Frontend Intern",
    company: "Addon Solutions",
    period: "Dec 2023 - Feb 2024",
    description:
      "Assisted in building responsive frontend features and improving UI consistency across projects.",
  },
];

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="space-y-4 animate-fade-in relative">
      <div className="flex items-center gap-2 relative z-10">
        <h2 className="text-sm font-medium text-gray-300 tracking-tight gotham-text">
          Experience
        </h2>
        <div className="text-batman-red/40 text-xs">▼</div>
        <div className="text-batman-red/20 text-xs ml-2">
          [ EMPLOYMENT HISTORY ]
        </div>
      </div>

      <div className="space-y-2 relative z-10">
        {experienceData.map((item, index) => (
          <div key={index} className="space-y-1">
            <div
              className="flex items-start justify-between cursor-pointer hover-glow group py-3 px-4 rounded-lg hover:bg-batman-dark-gray/40 transition-all duration-300 border border-transparent hover:border-batman-red/30 shadow-realm"
              onClick={() => toggleExpanded(index)}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex items-center pt-0.5">
                  {expandedItems.includes(index) ? (
                    <ChevronDown className="h-3 w-3 text-batman-red flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-3 w-3 text-gray-500 group-hover:text-batman-red transition-colors flex-shrink-0" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Desktop layout */}
                  <div className="hidden select-none sm:flex items-center gap-2 text-sm">
                    <span className="text-white font-light group-hover:text-batman-red transition-colors neon-text">
                      {item.title}
                    </span>
                    <span className="text-batman-red/60">•</span>
                    <span className="text-gray-400 font-light">
                      {item.company}
                    </span>
                  </div>

                  {/* Mobile layout */}
                  <div className="sm:hidden space-y-1 select-none">
                    <div className="text-sm text-white font-light flex items-center gap-2">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-400 font-light">
                      {item.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 ml-2 select-none">
                <span className="text-gray-500 text-xs font-light whitespace-nowrap">
                  {item.period}
                </span>
                {item.current && (
                  <div className="w-1.5 h-1.5 bg-batman-red rounded-full flex-shrink-0 animate-pulse neon-dot"></div>
                )}
              </div>
            </div>

            {expandedItems.includes(index) && item.description && (
              <div className="ml-6 pl-4 border-l-2 border-batman-red/40 bg-batman-dark-gray/30 p-4 rounded-r-lg shadow-realm">
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-xs text-batman-red/40 font-mono tracking-wide text-center pt-3">
        ◆ ◆ ◆ PROFESSIONAL TIMELINE ◆ ◆ ◆
      </div>
    </section>
  );
};

export default Experience;
