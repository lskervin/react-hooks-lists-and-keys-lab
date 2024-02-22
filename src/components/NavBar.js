import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key={links[0]} href="#home">{links[0]}</a>
    <a key={links[1]} href="#about">{links[1]}</a>
    <a key={links[2]} href="#projects">{links[2]}</a>
  </nav>;
}

export default NavBar;
