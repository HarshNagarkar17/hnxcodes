import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  codeUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "Argent",
    description:
      "A web app where you create a room of AI agents—like a senator, lawyer, engineer, or artist—and let them debate your chosen topic from different perspectives in a dynamic, chat-style interface.",
    codeUrl: "https://github.com/HarshNagarkar17/Argent",
  },
  {
    title: "Argent MCP Chat",
    description:
      "A web app to chat with AI agents across multiple connected MCP servers, letting you ask questions, debate, and explore ideas in a seamless, ChatGPT-style interface.",
    codeUrl: "https://github.com/HarshNagarkar17/argent-ai",
  },
  {
    title: "CalmWriter",
    description:
      "A minimal note-taking app designed for a calm, distraction-free writing experience, helping you focus on thoughts, ideas, and journaling with a clean, elegant interface.",
    codeUrl: "https://github.com/HarshNagarkar17/calmwriter",
    liveUrl: "https://calmwriter.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="space-y-4 animate-fade-in relative">
      <div className="flex items-center gap-2 relative z-10">
        <h2 className="text-sm font-medium text-gray-300 tracking-tight gotham-text">
          Projects
        </h2>
        <div className="text-batman-red/40 text-xs">◆</div>
        <div className="text-batman-red/20 text-xs ml-2">[ CLASSIFIED ]</div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 relative z-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="dark-card p-5 rounded-lg space-y-3 hover:border-batman-red/40 transition-all duration-500 group shadow-realm batman-border"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-white font-light hover-glow cursor-pointer text-sm group-hover:text-batman-red transition-all duration-300 neon-text">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs font-light">
              {project.description}
            </p>

            <div className="flex gap-2 pt-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center justify-center rounded-md border border-batman-red text-batman-red text-xs font-light h-6 px-3 transition-all duration-300 hover:bg-batman-red hover:text-white hover:shadow-lg hover:shadow-batman-red/30 signal-light"
                >
                  Access <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              )}

              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  className="inline-flex items-center justify-center rounded-md border border-batman-red text-batman-red text-xs font-light h-6 px-3 transition-all duration-300 hover:bg-batman-red hover:text-white hover:shadow-lg hover:shadow-batman-red/30 signal-light"
                >
                  Source <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-batman-red/40 font-mono tracking-wide text-center pt-2">
        ◆ ◆ ◆ TECH DIVISION ◆ ◆ ◆
      </div>
    </section>
  );
};

export default Projects;
