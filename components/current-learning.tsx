import React from "react";

const CurrentLearning = () => {
  return (
    <section className="space-y-3 animate-fade-in relative">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-medium text-gray-300 tracking-tight gotham-text">
          Currently
        </h2>
        <div className="text-batman-red/30 text-xs">◆</div>
      </div>

      <div className="text-gray-400 font-light text-sm leading-relaxed relative z-10">
        <p>
          Exploring{" "}
          <a
            href="#"
            className="batman-highlight hover-glow transition-all duration-200"
          >
            Generative AI
          </a>{" "}
          and revisiting{" "}
          <a
            href="#"
            className="batman-highlight hover-glow transition-all duration-200"
          >
            CS fundamentals
          </a>
        </p>
      </div>
    </section>
  );
};

export default CurrentLearning;
