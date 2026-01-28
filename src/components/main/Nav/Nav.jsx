import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Toggler from "./../../Toggler";

export default function Nav() {
  const sections = ["Home", "About", "Skills", "Projects", "Contact"];
  const [active, setActive] = useState("Home");

  // Scroll Spy effect
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120; // Adjust for navbar height
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      container
      className="fixed top-0 w-full z-50 bg-white/80 text-gray-800 dark:bg-gray-900/80 dark:text-gray-100 backdrop-blur-md shadow-sm transition-colors">
      <NavbarBrand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-sky-600 dark:text-sky-400">
          &lt;/&gt;
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Toggler />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {sections.map((item) => (
          <NavbarLink
            key={item}
            href={`#${item}`}
            className={`relative text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-500
              after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-sky-500 dark:after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300
              ${active === item ? "font-bold text-sky-600 dark:text-sky-400 after:w-full" : ""}`}
          >
            {item}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
