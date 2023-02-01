import React from "react";
import { AiOutlineBgColors, AiFillHtml5 } from "react-icons/ai";
import { BsServer } from "react-icons/bs";
import {
  DiCss3,
  DiPhp,
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiMongodb,
} from "react-icons/di";
import {
  SiMaterialui,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import SkillCard from "../components/skills/SkillCard";

const frontEndSkills = [
  { name: "HTML", years: 5, Icon: AiFillHtml5 },
  { name: "CSS", years: 5, Icon: DiCss3 },
  { name: "JavaScript", years: 5, Icon: SiJavascript },
  { name: "ReactJS", years: 3, Icon: DiReact },
  { name: "Material UI", years: 2, Icon: SiMaterialui },
  { name: "TailwindCSS", years: 1, Icon: SiTailwindcss },
];

const backEndSkills = [
  { name: "PHP", years: 4, Icon: DiPhp },
  { name: "NodeJS", years: 1, Icon: DiNodejsSmall },
  { name: "ExpressJS", years: 1, Icon: SiExpress },
  { name: "MySQL", years: 5, Icon: DiMysql },
  { name: "MongoDB", years: 1, Icon: DiMongodb },
  { name: "Firebase", years: 2, Icon: SiFirebase },
];

const Skills = () => {
  return (
    <div className="relative h-full min-h-screen w-full">
      <div className="relative z-10 flex h-full min-h-screen w-full flex-row items-center justify-center gap-4">
        <SkillCard
          titile={"Frontend"}
          list={frontEndSkills}
          Icon={AiOutlineBgColors}
        />
        <SkillCard titile={"Backend"} list={backEndSkills} Icon={BsServer} />
      </div>
      <div
        className={`white__gradient absolute top-0 left-0 right-0 bottom-0 z-0 m-auto h-[600px] w-[600px] overflow-hidden rounded-full`}
      />
    </div>
  );
};

export default Skills;
