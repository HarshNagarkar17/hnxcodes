import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import SideNav from "@/components/side-nav";
import Skills from "@/components/skills";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#080909]">
      <SideNav />

      <div className="max-w-2xl mx-auto px-6 py-16 space-y-12">
        <Header />
        <section className="space-y-3 animate-fade-in">
          <h2 className="text-sm font-medium text-gray-300 tracking-tight">
            Currently
          </h2>

          <div className="text-gray-400 font-light text-sm leading-relaxed">
            <p>
              Exploring{" "}
              <a
                href="#"
                className="yellow-highlight hover-glow transition-all duration-200"
              >
                Generative AI
              </a>{" "}
              and revisiting{" "}
              <a
                href="#"
                className="yellow-highlight hover-glow transition-all duration-200"
              >
                CS fundamentals
              </a>
              .
            </p>
          </div>
        </section>

        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
