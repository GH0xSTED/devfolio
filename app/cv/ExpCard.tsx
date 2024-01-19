import React, { ReactNode } from "react";

interface ExpCardProps {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  children: ReactNode;
}

function ExpCard({
  title,
  company,
  location,
  from,
  to,
  children,
}: ExpCardProps) {
  return (
    <div className="flex flex-col justify-start mb-5">
      <div className="flex flex-row space-x-2 font-bold text-lg">
        <h2>{title}</h2>
        <h2>/</h2>
        <h2>{company}</h2>
        <h2>/</h2>
        <h3 className="italic">{location}</h3>
      </div>
      <span className="flex items-center -translate-y-2 space-x-6">
        <span className="h-px flex-1 bg-black"></span>
        <h1 className="text-xs font-bold -translate-y-3">
          {from} - {to}
        </h1>
      </span>
      <ul className="list-disc list-inside text-sm flex flex-col">
        {children}
      </ul>
    </div>
  );
}

export default ExpCard;
