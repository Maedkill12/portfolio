import React from "react";
import { acmerocket, hoobank, mymoney, thedojo } from "../assets/projects";
import ProjectCard from "../components/projects/ProjectCard";
import useLanguage from "../hooks/useLanguage";

const projects = [
  {
    title: "Hoobank",
    img: hoobank,
    demo: "https://cheerful-hotteok-41dc9e.netlify.app/",
  },
  {
    title: "The Dojo",
    img: thedojo,
    demo: "https://thedojosite-e16c1.web.app/",
  },
  {
    title: "Acme Rocket",
    img: acmerocket,
    demo: "https://acme-rockets-nfoa.onrender.com/",
  },
  {
    title: "My Money",
    img: mymoney,
    demo: "https://mymoney-d9a6b.web.app/",
  },
];

const Portfolio = () => {
  const { lang } = useLanguage();
  return (
    <div className="h-full min-h-screen w-full">
      <h2 className="mt-4 w-full pl-4 text-6xl font-bold text-orange-500">
        {lang.projects}
      </h2>
      <div className="flex w-full justify-center">
        <div className="mt-4 flex h-full w-[1200px] flex-row flex-wrap">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              img={project.img}
              title={project.title}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
