import React from "react";
import { motion } from "framer-motion";

interface Props {
  skill: { category: string; items: string[] };
  index: number;
}
const SkillCard = ({ skill, index }: Props) => {
  return (
    <motion.div
      key={skill.category}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="flex items-center gap-6 bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-2 flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
            {skill.category}
          </h3>
          <ul className="space-y-2">
            {skill.items.map((item) => (
              <li
                key={item}
                className="text-gray-700 dark:text-gray-300 flex items-center"
              >
                <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
