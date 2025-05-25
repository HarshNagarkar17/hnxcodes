import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section className="space-y-4 animate-fade-in">
      <h2 className="text-sm font-medium text-gray-300 tracking-tight">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-white font-light hover-glow cursor-pointer text-sm">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-xs font-light">
              {project.description}
            </p>

            <div className="flex gap-2">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-xs border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-200 font-light h-6 px-2 rounded-sm"
                >
                  Live <ArrowRight className="ml-1 h-2 w-2" />
                </Link>
              )}

              {project.codeUrl && (
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-xs border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-200 font-light h-6 px-2 rounded-sm"
                >
                  Code <ArrowRight className="ml-1 h-2 w-2" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
