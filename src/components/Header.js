import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="  py-8 bg-gradient-to-br from-pink-700 to-orange-400">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <h1 className="text-white font-bold uppercase tracking-wider">
            Storyblok - Gatsby
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
