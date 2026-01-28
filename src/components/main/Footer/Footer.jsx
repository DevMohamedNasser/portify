import { Footer } from "flowbite-react";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function FooterApp() {
  return (
    <Footer
      container
      className="rounded-none bg-gray-100/80 dark:bg-gray-950/80 text-gray-700 dark:text-gray-300 py-6"
    >
      <div className="w-full text-center">
        <div className="flex justify-center gap-6 mb-3">
          <a
            href="https://github.com/devmohamednasser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-nasser-3bb5772a5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:mnasser.dev@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>

        <div className="w-24 h-[1px] bg-gray-400 dark:bg-gray-600 mx-auto mb-3"></div>

        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-medium text-sky-600 dark:text-sky-400">Mohamed Nasser</span>. All rights reserved.
        </p>
      </div>
    </Footer>
  );
}