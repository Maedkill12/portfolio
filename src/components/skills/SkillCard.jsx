import React from "react";
import useLanguage from "../../hooks/useLanguage";
import ToolCard from "./ToolCard";

const SkillCard = ({ titile, list, Icon }) => {
  const { lang } = useLanguage();
  return (
    <div className="flex w-[400px] flex-col rounded-xl bg-gray-800 py-2 px-3 shadow-lg shadow-black sm:h-[600px] sm:w-[550px]">
      <div className="mt-16 flex flex-col items-center gap-2 text-5xl text-orange-500">
        <Icon />
        <h2 className="text-center">{titile}</h2>
      </div>
      <div className="mt-4 flex flex-col flex-wrap justify-center gap-4 after:w-[45%] after:content-[''] sm:flex-row">
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
