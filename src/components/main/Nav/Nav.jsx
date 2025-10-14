import React from "react";
import { Link, NavLink } from "react-router-dom";
import Toggler from "./../../Toggler";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Nav() {
  return (
    <>
      <Navbar
        container
        className="fixed top-0 w-full z-50 bg-white/80 text-gray-800 dark:bg-gray-900/80 dark:text-gray-100 backdrop-blur-md shadow-sm transition-colors"
      >
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
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <NavbarLink
              key={item}
              href={`#${item}`}
              className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-500 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-sky-500 dark:after:bg-sky-400 
                hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
