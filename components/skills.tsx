const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

const Skills = () => {
  return (
    <section className="space-y-4 animate-fade-in relative">
      <div className="flex items-center gap-2 relative z-10">
        <h2 className="text-sm font-medium text-gray-300 tracking-tight gotham-text">
          Skills
        </h2>
        <div className="text-batman-red/40 text-xs">◆</div>
        <div className="text-batman-red/20 text-xs ml-2">[ ARSENAL ]</div>
      </div>

      <div className="flex flex-wrap gap-2 select-none relative z-10">
        {skills.map((skill, index) => {
          return (
            <span
              key={index}
              className={`text-xs font-light border rounded-md px-3 py-1.5 transition-all duration-300 hover-glow shadow-realm text-gray-400 bg-gray-900/50 border-gray-800 hover:text-batman-red hover:border-batman-red/30`}
            >
              {skill}
            </span>
          );
        })}
      </div>

      <div className="text-xs text-batman-red/40 font-mono tracking-wide text-center pt-2">
        ◆ ◆ ◆ SPECIALIZED CAPABILITIES ◆ ◆ ◆
      </div>
    </section>
  );
};

export default Skills;
