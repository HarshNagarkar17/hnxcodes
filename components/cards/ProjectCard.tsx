import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

interface Project {
  title: string;
  image: string;
  period: string;
  links: { website: string | null; source: string | null };
  description: string;
  technologies: string[];
}

interface Props {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.02]">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-gray-100 dark:bg-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {project.period}
                </p>
              </div>
              <div className="flex gap-2">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 relative group/link"
                  >
                    <Globe className="w-5 h-5" />
                    <span className="sr-only">Visit website</span>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity">
                      Website
                    </span>
                  </a>
                )}
                {project.links.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 relative group/link"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">View source</span>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity">
                      Source
                    </span>
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default relative group/tech"
                >
                  {tech}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                    Built with {tech}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
