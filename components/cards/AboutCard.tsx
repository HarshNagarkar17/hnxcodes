import React from "react";

const AboutCard = ({ data }: { data: string }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
        About
        <div className="ml-4 h-px bg-gray-200 dark:bg-gray-800 flex-1" />
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
        {data}{" "}
        {/* <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-0.5"
        >
          I pursued a double degree in computer science and business
          <ArrowUpRight className="w-4 h-4" />
        </a>
        ,{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-0.5"
        >
          interned at big tech companies in Silicon Valley
          <ArrowUpRight className="w-4 h-4" />
        </a>
        , and{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-0.5"
        >
          competed in over 21 hackathons for fun
          <ArrowUpRight className="w-4 h-4" />
        </a>
        . I also had the pleasure of being part of the first ever in-person
        cohort of{" "}
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-0.5"
        >
          buildspace sf1
          <ArrowUpRight className="w-4 h-4" />
        </a>
        . */}
      </p>
    </>
  );
};

export default AboutCard;
