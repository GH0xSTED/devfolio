import React, { ReactNode } from "react";

interface SkillCardProps {
  title: string;
  children?: ReactNode;
}

function SkillCard({ title, children }: SkillCardProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="font-semibold md:text-lg text-base">{title}</h1>
      <div className="w-full rounded-xl bg-neutral-500 h-[1px] -mt-0.5 mb-2 shadow" />
      <div className="grid grid-cols-2 gap-10 justify-items-start text-sm w-full">
        {children}
      </div>
    </div>
  );
}

export default SkillCard;
