import React, { ReactNode } from "react";

interface ExpCardProps {
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  children?: ReactNode;
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
    <div className="flex flex-col justify-start mt-3 md:mt-5">
      <div className="flex flex-col md:flex-row lg:space-x-2 font-bold text-sm md:text-lg sm:justify-start sm:items-center">
        <h2 className="font-black">{title}</h2>
        <h2 className="hidden md:inline">/</h2>
        <h2 className="font-semibold">{company}</h2>
        <h2 className="hidden md:inline">/</h2>
        <h3 className="italic font-light text-xs sm:text-sm">{location}</h3>
      </div>
      <span className="flex items-center -translate-y-2 space-x-6">
        <span className="h-px flex-1 bg-black dark:bg-neutral-500"></span>
        <h1 className="text-xs font-bold -translate-y-3">
          {from} - {to}
        </h1>
      </span>
      <ul className="[list-style-type:square] list-inside text-xs md:text-sm flex flex-col indent-text space-y-1">
        {children}
      </ul>
    </div>
  );
}

export default ExpCard;
