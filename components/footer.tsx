const Footer = () => {
  return (
    <footer className="text-center py-8 animate-fade-in relative">
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-center gap-3 text-batman-red/40 text-xs mb-3">
          <span className="neon-dot w-1 h-1"></span>
          <span>◆</span>
          <span className="neon-dot w-1 h-1"></span>
          <span>◆</span>
          <span className="neon-dot w-1 h-1"></span>
        </div>

        <p className="text-gray-500 text-xs font-light leading-relaxed max-w-md mx-auto">
          This digital fortress has recently been enhanced and operates from the{" "}
          <span className="batman-highlight font-medium neon-text">
            shadows
          </span>{" "}
          Last patrol completed on{" "}
          <span className="batman-highlight font-light hover-glow cursor-pointer">
            June 1, 2025
          </span>
          .
        </p>

        <div className="text-batman-red/40 text-xs mt-3 gotham-text">
          [ CLASSIFIED ARCHIVES ]
        </div>

        <div className="text-batman-red/20 text-xs font-mono tracking-wider">
          ◆ SYSTEM STATUS: OPERATIONAL ◆
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="neon-dot w-0.5 h-0.5"></div>
          <span className="text-batman-red/30 text-xs font-mono">
            BATMAN PROTOCOL ACTIVE
          </span>
          <div className="neon-dot w-0.5 h-0.5"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
