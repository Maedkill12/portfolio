import React, { useEffect, useState } from "react";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { BsCodeSlash, BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import useSocialMedia from "../hooks/useSocialMedia";
import * as langs from "../lang";

const Sidebar = () => {
  const [navList, setNavList] = useState([]);
  const [langSelect, setLangSelect] = useState("en");
  const { lang, dispatch } = useLanguage();
  const socialMedia = useSocialMedia();

  const languageHandle = (e) => {
    const newLang = e.target.value;
    setLangSelect(newLang);
    dispatch({ type: "CHANGE", payload: langs[newLang] });
  };

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
    <div className="md:h-screen">
      <div className="flex h-full flex-row justify-between md:flex-col md:justify-center">
        <div className="my-4 hidden py-2 px-4 md:my-0 md:block md:flex-1">
          <div className="flex flex-row gap-1">
            {lang.language}:{" "}
            <select
              value={langSelect}
              className="bg-transparent"
              onChange={languageHandle}
            >
              {Object.keys(langs).map((abb) => (
                <option value={abb} key={abb} className="text-black">
                  {langs[abb].name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-4 flex flex-row justify-center md:my-0 md:flex-1 md:flex-col">
          {navList.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-row gap-2 py-2 px-4 hover:bg-black/20 md:gap-4 md:text-lg ${
                  isActive && "text-orange-500"
                } `
              }
            >
              <div className="hidden sm:block">{item.icon}</div>
              {item.text}
            </NavLink>
          ))}
        </div>
        <div className="my-4 hidden flex-col gap-4 px-4 md:my-0 md:flex md:flex-1 md:items-center md:px-0">
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
