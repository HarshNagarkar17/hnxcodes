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
    <section className="space-y-4 animate-fade-in">
      <h2 className="text-sm font-medium text-gray-300 tracking-tight">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs font-light text-gray-400 bg-gray-900/50 border border-gray-800 rounded-md px-2 py-1 hover:text-neon-green hover:border-gray-700 transition-all duration-200 hover-glow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
