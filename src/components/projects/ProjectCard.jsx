import React, { useState } from "react";
import useLanguage from "../../hooks/useLanguage";

const ProjectCard = ({ title, img, demo }) => {
  const { lang } = useLanguage();
  const [showViewProjectButton, setShowViewProjectButton] = useState(false);
  return (
    <a
      href={demo}
      target="_blank"
      rel="noreferrer"
      className="relative h-[300px] w-[300px] hover:opacity-80"
      onMouseEnter={() => setShowViewProjectButton(true)}
      onMouseLeave={() => setShowViewProjectButton(false)}
    >
      <img src={img} alt={title} className="h-full w-full object-cover" />
      <div
        className={`absolute bottom-0 w-full scale-0 bg-orange-500 text-center text-lg transition-all duration-500 ${
          showViewProjectButton && "scale-100"
        }`}
      >
        {lang.viewProject}
      </div>
    </a>
  );
};

export default ProjectCard;
