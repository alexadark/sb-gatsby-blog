import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} | Build with Storyblok & Gatsby
      </div>
    </footer>
  );
};

export default Footer;
