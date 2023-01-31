import React, { useEffect, useState } from "react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsCodeSlash, BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

const socialMedia = [
  { icon: <AiFillGithub />, url: "https://github.com/Maedkill12" },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/alejandro-elias-3a9502168/",
  },
];

const Sidebar = () => {
  const [navList, setNavList] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    const menu = [
      { text: lang.navHome, icon: <AiFillHome />, path: "/" },
      { text: lang.navAbout, icon: <AiFillInfoCircle />, path: "/about" },
      { text: lang.navSkills, icon: <BsCodeSlash />, path: "/skills" },
      {
        text: lang.navPortfolio,
        icon: <BsFillBriefcaseFill />,
        path: "/portfolio",
      },
      { text: lang.navContact, icon: <MdEmail />, path: "/contact" },
    ];
    setNavList(menu);
  }, [lang]);

  return (
    <div className="h-screen">
      <div className="flex h-full flex-col justify-center">
        <div className="flex-1">Languague: en</div>
        <div className="flex flex-1 flex-col justify-center">
          {navList.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-row gap-4 py-2 px-4 text-lg hover:bg-black/20 ${
                  isActive && "text-orange-500"
                } `
              }
            >
              {item.icon}
              {item.text}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-1 flex-col items-center gap-4">
          {socialMedia.map((item) => (
            <a
              className="text-3xl hover:text-orange-500"
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
