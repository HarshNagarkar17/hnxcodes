const Header = () => {
  return (
    <header className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <div className="neon-dot"></div>
        <h1 className="text-xl font-medium text-white tracking-tight">
          Harsh Nagarkar
        </h1>
      </div>

      <p className="text-gray-300 font-light leading-relaxed">
        Full-stack developer, learner, and explorer of ideas.
      </p>

      <p className="text-gray-400 leading-relaxed max-w-xl font-light">
        Building robust applications with attention to detail, while
        continuously learning and refining both frontend and backend skills.
      </p>

      <p className="text-gray-400 font-light">
        I&apos;m a builder{" "}
        <span className="yellow-highlight">chasing the impossible</span>.
      </p>

      <div className="flex gap-3 pt-2">
        {/* <Button
          variant="outline"
          size="sm"
          className="hover-glow border-gray-700 hover:border-neon-green transition-all duration-200 text-xs font-light"
        >
          Why into Software?
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button> */}

        {/* <Button
          variant="outline"
          size="sm"
          className="hover-glow border-gray-700 hover:border-neon-green transition-all duration-200 text-xs font-light"
        >
          Sign visitor&apos;s log
        </Button> */}

        <a
          href="mailto:harshvn871@gmail.com"
          className="inline-flex items-center hover:text-black hover:bg-[#FFFE00] justify-center hover-glow border border-gray-700 hover:border-neon-green transition-all duration-200 text-xs font-light px-3 py-1 rounded-sm"
        >
          Email me
        </a>
      </div>
    </header>
  );
};

export default Header;
