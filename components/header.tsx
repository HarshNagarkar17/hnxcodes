const Header = () => {
  return (
    <header className="space-y-6 animate-fade-in relative">
      <div className="flex items-center gap-3 relative z-10">
        <div className="neon-dot"></div>
        <h1 className="text-xl font-medium text-white tracking-tight gotham-text">
          Harsh Nagarkar
        </h1>
        <div className="text-batman-red/20 text-xs ml-1">[ ONLINE ]</div>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-gray-300 font-light leading-relaxed">
          Full-stack developer, designer, and{" "}
          <span className="batman-highlight neon-text">explorer</span> of ideas.
        </p>

        <div className="dark-card p-5 rounded-lg shadow-realm">
          <p className="text-gray-400 leading-relaxed max-w-xl font-light">
            Building robust applications with attention to detail, while
            continuously learning and refining both frontend and backend skills
          </p>
        </div>

        <p className="text-gray-400 font-light">
          I&apos;m a builder{" "}
          <span className="batman-highlight">chasing the impossible</span>
        </p>
      </div>

      <div className="flex gap-3 pt-2 relative z-10">
        <a
          href="mailto:harshvn871@gmail.com"
          className="inline-flex items-center justify-center rounded-md border border-batman-medium-gray bg-transparent px-3 py-2 text-xs font-light gotham-text hover:border-batman-red hover:bg-batman-red hover:text-white hover:shadow-lg hover:shadow-batman-red/30 transition-all duration-300"
        >
          Signal me
        </a>
      </div>
    </header>
  );
};
export default Header;
