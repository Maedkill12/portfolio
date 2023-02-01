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
          className={`white__gradient absolute z-0 h-[550px] w-[550px] overflow-hidden rounded-full`}
        />
        <p className="z-10">Alejandro Elias</p>
        <p className="z-10 mt-4 flex flex-row items-center gap-2 text-lg">
          <MdEmail /> maed012014@gmail.com
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center px-16">
        <h2 className="text-6xl font-bold text-orange-500">{lang.about}</h2>
        <div className="">
          {lang.aboutParagraph.map((p) => (
            <p className="my-4 text-justify text-lg">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
