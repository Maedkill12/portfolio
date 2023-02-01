import React from "react";

const ToolCard = ({ name, Icon, description }) => {
  return (
    <div className="flex w-[45%] flex-row gap-2 rounded-xl border border-white bg-slate-700 py-4 px-2">
      <div className="flex items-center">
        <Icon size={48} />
      </div>
      <div className="gap2 flex flex-col">
        <h3 className="font-bold">{name}</h3>
        <p className="italic text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;
