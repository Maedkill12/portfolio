import React from "react";
import useLanguage from "../hooks/useLanguage";
import { MdEmail } from "react-icons/md";
import me from "../assets/me.jpg";

const About = () => {
  const { lang } = useLanguage();
  return (
    <div className="flex min-h-screen flex-row">
      <div className="flex flex-1 flex-col items-center justify-center px-16">
        <div className="relative h-[500px] w-[500px] overflow-hidden rounded-full ">
          <img src={me} alt="Alejandro Elias" className="relative z-10" />
        </div>
        <div
          className={`blue__gradient absolute z-0 h-[600px] w-[600px] overflow-hidden rounded-full`}
        />
        <p className="z-10">Alejandro Elias</p>
        <p className="z-10 mt-4 flex flex-row items-center gap-2 text-lg">
          <MdEmail /> maed012014@gmail.com
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center px-16">
        <h2 className="text-6xl font-bold text-orange-500">{lang.about}</h2>
        <div className="h-[200px]">
          {lang.aboutParagraph.map((p) => (
            <p className="text-justify text-lg">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
