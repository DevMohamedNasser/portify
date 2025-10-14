import React from "react";
import me from "../../assets/Images/me.jpg";

export default function Hero() {
  return (
    <section id="Home" className="bg-white dark:bg-gray-950 pt-16 md:pt-0">
      
      <div className="container  text-start">
        <div className="grid md:grid-cols-2 min-h-screen items-center justify-center md:gap-24">
          <div className="col-span-1 flex justify-center">
            <img
              loading="lazy"
              className="w-96 h-96 rounded-full object-cover object-top border-2 shadow border-sky-600 dark:border-sky-400"
              src={me}
              alt="React Developer"
            />
          </div>
          <div className="col-span-1 md:order-first">
            <p className="font-light text-lg dark:text-gray-400">Hi, I am</p>
            <h1 className="">Mohamed Nasser</h1>
            <p className="font-light text-lg dark:text-gray-400">
              Front-end developer React, Next.js
            </p>
            <p className="font-light text-lg dark:text-gray-400">
              skilled in Next.js, React, TypeScript Tailwind CSS & Bootstrap. I
              create modern, responsive web applications with clean code and
              great user experience. Now expanding my skills toward Full Stack
              Development 🚀
            </p>
            <div className="my-3 flex gap-6">
              
              <button
              onClick={()=> window.open('https://github.com/DevMohamedNasser')}
                className="cursor-pointer border border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300
             px-5 py-2 rounded-lg font-medium transition-colors duration-300
             hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900
             active:scale-95"
              >
                View GitHub
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1097RgvkjMPfifoTnUhpzVC4ixvhbA-Lg/view?usp=drive_link",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="cursor-pointer bg-sky-600 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300
             hover:bg-sky-700 active:bg-sky-800
             dark:bg-sky-700 dark:hover:bg-sky-400 dark:active:bg-sky-300 dark:active:text-gray-900
             active:scale-95"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
