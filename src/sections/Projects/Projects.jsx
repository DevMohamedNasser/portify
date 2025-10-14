import React from "react";
import { ProjectCard } from "../../components/Projects/ProjectCard";
import ddaAlgo from '../../assets/Images/ddaAlgo.png';
import opticalSystem from '../../assets/Images/opticalSystem.png';
import ecommerce from '../../assets/Images/ecommerce.png';
import socialApp from '../../assets/Images/socialApp.png';
import weather from '../../assets/Images/weather.png'
import quizApp from '../../assets/Images/quizApp.png';



export default function Projects() {
  const projects = [
    {
      img: ddaAlgo,
      heading: "DDA Algorithm visualizer",
      descrip:
        "Visual tool to demonstrate how the DDA line drawing algorithm works step by step.",
      demo: "https://dda-algorithm-visualizer.vercel.app/",
      repo: "https://github.com/DevMohamedNasser/DDA_Algorithm_visualizer.git",
    },
    {
      img: ecommerce,
      heading: "Shoply-next",
      descrip:
        "E-commerce by Next.js,React, & Tailwind CSS featuring product catalog, cart, auth, checkout, ...",
      demo: "https://shoply-next.vercel.app/",
      repo: "https://github.com/DevMohamedNasser/Shoply-next.git",
    },
    {
      img: socialApp,
      heading: "Social App",
      descrip: "A modern social app that lets users share posts, interact, and connect — designed with a clean, responsive UI.",
      demo: "https://devmohamednasser.github.io/react_social_app/",
      repo: "https://github.com/DevMohamedNasser/react_social_app.git",
    },
    {
      img: weather,
      heading: "Smart Weather App",
      descrip:
        "Auto-detects ur location & displays live weather updates instantly.",
      demo: "https://devmohamednasser.github.io/smart_weather_app/",
      repo: "https://github.com/DevMohamedNasser/smart_weather_app.git",
    },
    {
      img: opticalSystem,
      heading: "Optical Shop System",
      descrip:
        "A smart system to manage eyewear shop sales, inventory, and customer records efficiently.",
      demo: "https://devmohamednasser.github.io/optical-shop-system/",
      repo: "https://github.com/DevMohamedNasser/optical-shop-system.git",
    },
    // {
    //     img: 'US News Explorer',
    //     heading: '',
    //     descrip: 'A news website with category and date filters to explore the latest updates easily.',
    //     demo: 'https://devmohamednasser.github.io/US_news_explorer/',
    //     repo: 'https://github.com/DevMohamedNasser/US_news_explorer.git'
    // },
    {
      img: quizApp,
      heading: "Quiz App",
      descrip:
        "An interactive app that lets users choose category, difficulty & number of questions to test their knowledge.",
      demo: "https://devmohamednasser.github.io/vanilla_quiz_app/",
      repo: "https://github.com/DevMohamedNasser/vanilla_quiz_app.git",
    },
  ];

  return (
    <section id="Projects" className="bg-gray-100 dark:bg-gray-950 py-20">
      <div className="container">
        <h2 className="text-gray-800 dark:text-gray-100">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <ProjectCard key={project.heading} src={project.img} heading={project.heading} descrip={project.descrip} demo={project.demo} repo={project.repo} />)}
        </div>
      </div>
    </section>
  );
}
