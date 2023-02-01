import React from "react";
import useLanguage from "../../hooks/useLanguage";
import ToolCard from "./ToolCard";

const SkillCard = ({ titile, list, Icon }) => {
  const { lang } = useLanguage();
  return (
    <div className="flex h-[600px] w-[550px] flex-col rounded-xl bg-gray-800 py-2 px-3 shadow-lg shadow-black">
      <div className="mt-16 flex flex-col items-center gap-2 text-5xl text-orange-500">
        <Icon />
        <h2 className="text-center">{titile}</h2>
      </div>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-4 after:w-[45%] after:content-['']">
        {list.map((skill) => (
          <ToolCard
            key={skill.name}
            Icon={skill.Icon}
            description={`${skill.years}+ ${lang.toolYears}`}
            name={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
