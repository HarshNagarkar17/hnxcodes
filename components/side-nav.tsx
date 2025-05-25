"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Email", href: "mailto:harshvn871@gmail.com" },
  { label: "Twitter", href: "https://x.com/hnx246" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-nagarkar/" },
  { label: "GitHub", href: "https://github.com/HarshNagarkar17" },
  { label: "CV", href: "#" },
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
              className="text-gray-400 hover:text-[#37DE96] text-xs transition-all duration-200 hover-glow writing-mode-vertical font-light"
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
          className="fixed top-4 right-4 z-50 text-gray-400 hover:text-[#37DE96]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
            <div className="flex items-center justify-center min-h-screen">
              <nav className="text-center space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block text-gray-400 hover:text-[#37DE96] text-lg transition-all duration-200 hover-glow font-light"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideNav;
