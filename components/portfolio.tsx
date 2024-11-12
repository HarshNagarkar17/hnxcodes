"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Home,
  BookMarked,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Sun,
  Moon,
  Sparkles,
} from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import WorkExperienceCard from "./cards/WorkExperienceCard";
import ProjectCard from "./cards/ProjectCard";
import SkillCard from "./cards/SkillCard";
import AboutCard from "./cards/AboutCard";
import data from "@/data.json";

function Particles({ count = 100 }) {
  const points = useRef<THREE.Points | null | undefined>(null);
  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.001;
    }
  });

  const particlesPosition = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    particlesPosition[i * 3] = 10 * Math.sin(theta) * Math.cos(phi);
    particlesPosition[i * 3 + 1] = 10 * Math.sin(theta) * Math.sin(phi);
    particlesPosition[i * 3 + 2] = 10 * Math.cos(theta);
  }

  return (
    <points ref={points as React.RefObject<THREE.Points>}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#4F46E5" transparent opacity={0.2} />
    </points>
  );
}

interface Project {
  title: string;
  image: string;
  period: string;
  links: { website: string | null; source: string | null };
  description: string;
  technologies: string[];
}
export default function PortfolioComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "center"],
  });

  const scaleProgress = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.8])
  );

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const projects: Project[] = data.projects;
  return (
    <div
      className="min-h-screen bg-white dark:bg-black selection:bg-blue-100 dark:selection:bg-blue-900"
      ref={containerRef}
    >
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* 3D Background */}
      <div className="fixed inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.5} />
          <Particles />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </div>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <main className="relative max-w-4xl mx-auto px-4 py-12">
        <motion.div
          style={{
            scale: scaleProgress,
          }}
          className="relative"
        >
          {/* Hero Section */}
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Available for work
              </motion.div>
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hi, I&apos;m {data.short_name}{" "}
                <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
                {data.bio}
              </p>
            </div>
            {/* <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900 ring-4 ring-white dark:ring-black">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full ring-4 ring-white dark:ring-black">
                <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75" />
              </div>
            </div> */}
          </div>

          {/* About Section */}
          <section className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AboutCard data={data.about} />
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold  mb-8 text-gray-900 dark:text-white flex items-center">
                Skills
                <div className="ml-4 h-px bg-gray-200 dark:bg-gray-800 flex-1" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.skills.map((skill, index) => (
                  <SkillCard skill={skill} index={index} key={index} />
                ))}
              </div>
            </motion.div>
          </section>

          {/* Work Experience Section */}
          <section className="mt-24">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                Work Experience
                <div className="ml-4 h-px bg-gray-200 dark:bg-gray-800 flex-1" />
              </h2>
              <div className="space-y-8">
                {data.experience.map((work) => (
                  <WorkExperienceCard key={work.company} work={work} />
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center relative"
            >
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50 blur-3xl" />
              </div>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5,
                }}
                className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full text-sm font-medium mb-6"
              >
                My Projects
              </motion.div>
              <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Check out my latest work
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={index} />
              ))}
            </div>
          </section>
        </motion.div>

        {/* Navigation */}
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full px-6 py-3 shadow-lg flex items-center space-x-8">
          <button
            onClick={() => setActiveSection("home")}
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ${
              activeSection === "home"
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="sr-only">Home</span>
          </button>
          <button
            onClick={() => setActiveSection("blog")}
            className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ${
              activeSection === "blog"
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            <BookMarked className="w-5 h-5" />
            <span className="sr-only">Blog</span>
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Youtube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </button>
        </nav>
      </main>

      <style jsx global>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-8deg);
          }
          60% {
            transform: rotate(14deg);
          }
          80% {
            transform: rotate(-4deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
}
