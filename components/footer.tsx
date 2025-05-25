const Footer = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="text-center py-6 animate-fade-in">
      <p className="text-gray-500 text-xs font-light">
        <span className="text-neon-green font-light underline cursor-pointer hover-glow">
          {currentDate}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
