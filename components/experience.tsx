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
    period: "DEC 2023 - Present",
    current: true,
    description:
      "Building scalable frontend applications and refining UI systems for better user experience and maintainability",
  },
  {
    title: "Frontend Intern",
    company: "Addon Solutions",
    period: "NOV 2023 - DEC 2023",
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
    <section className="space-y-4 animate-fade-in">
      <h2 className="text-sm font-medium text-gray-300 tracking-tight">
        Experience
      </h2>

      <div className="space-y-2">
        {experienceData.map((item, index) => (
          <div key={index} className="space-y-1">
            <div
              className="flex items-start justify-between cursor-pointer hover-glow group py-1"
              onClick={() => toggleExpanded(index)}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex items-center pt-0.5">
                  {expandedItems.includes(index) ? (
                    <ChevronDown className="h-3 w-3 text-neon-green flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-3 w-3 text-gray-500 group-hover:text-neon-green transition-colors flex-shrink-0" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Desktop layout */}
                  <div className="hidden sm:flex items-center gap-2 text-sm">
                    <span className="text-white font-light">{item.title}</span>
                    <span className="text-gray-500">·</span>
                    <span className="text-gray-400 font-light">
                      {item.company}
                    </span>
                  </div>

                  {/* Mobile layout */}
                  <div className="sm:hidden space-y-1">
                    <div className="text-sm text-white font-light">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-400 font-light">
                      {item.company}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                <span className="text-gray-500 text-xs font-light whitespace-nowrap">
                  {item.period}
                </span>
                {item.current && (
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full flex-shrink-0"></div>
                )}
              </div>
            </div>

            {expandedItems.includes(index) && item.description && (
              <div className="ml-6 pl-3 border-l border-gray-800">
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
