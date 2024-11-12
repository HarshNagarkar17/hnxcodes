import { ArrowUpRight } from "lucide-react";

interface Props {
  work: {
    role: string;
    period: string;
    responsibilities: string[];
    company: string;
  };
}
export default function WorkExperienceCard({ work }: Props) {
  return (
    <div className="group relative">
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
              {work.company}
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              {work.role}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {work.period}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Responsibilities:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {work.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
