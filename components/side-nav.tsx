"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Email", href: "mailto:harshvn871@gmail.com" },
  { label: "Twitter", href: "https://x.com/hnx246" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-nagarkar/" },
  { label: "GitHub", href: "https://github.com/HarshNagarkar17" },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1-mr0kedAisl9nbzcNFg5nhJAjZy3aCOH/view?usp=drive_link",
  },
];

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Vertical on the right */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-batman-red text-xs transition-all duration-200 hover-glow writing-mode-vertical font-light"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 text-gray-400 hover:text-batman-red focus:bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu - Slide-in from right */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-batman-dark-gray/95 backdrop-blur-md border-l border-batman-medium-gray z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-6">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="block text-gray-400 hover:text-batman-red text-base transition-all duration-200 hover-glow font-light border-b border-batman-medium-gray/50 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Backdrop overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default SideNav;
