/* eslint-disable @next/next/no-img-element */
import CurrentLearning from "@/components/current-learning";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import SideNav from "@/components/side-nav";
import Skills from "@/components/skills";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 hidden md:flex items-center justify-center pointer-events-none z-0">
        <img
          src="/background.png"
          alt="Batman Background Image"
          className="w-[200vw] h-[120vh] object-contain opacity-[0.02] select-none"
        />
      </div>
      <SideNav />

      <div className="max-w-2xl mx-auto px-6 py-16 space-y-12">
        <Header />
        <CurrentLearning />

        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
