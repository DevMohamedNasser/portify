import { Card } from "flowbite-react";

export function ProjectCard({ src, heading, descrip, demo, repo }) {


  return (
    <Card
      className="hover:scale-[1.02] duration-700 hover:shadow-xl"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={src}
      loading='lazy'
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{descrip}</p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={()=> window.open(repo)}
          className="cursor-pointer border border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300
             px-5 py-2 rounded-lg font-medium transition-colors duration-300
             hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900
             active:scale-95"
        >
          <i className="fab fa-github"></i> Repo
        </button>
        <button
          onClick={()=> window.open(demo)}
          className="cursor-pointer bg-sky-600 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300
             hover:bg-sky-700 active:bg-sky-800
             dark:bg-sky-700 dark:hover:bg-sky-400 dark:active:bg-sky-300 dark:active:text-gray-900
             active:scale-95"
        >
          <i className="fas fa-arrow-up-right-from-square"></i> Demo
        </button>
      </div>
    </Card>
  );
}
