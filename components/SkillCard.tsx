import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function SkillCard({
  img,
  title,
  desc,
  color,
}: {
  img: string;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="p-1">
      <Card className="hover:bg-accent">
        <CardContent className="flex items-center justify-center p-1 rounded-md">
          <div
            className={`flex flex-row justify-evenly items-center w-full h-20 rounded-md`}
          >
            <div className="relative w-12 h-full flex flex-row items-center justify-start">
              <Image
                src={img}
                alt={title}
                width="300"
                height="300"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col justify-start items-start p-1">
              <h1 className="font-bold text-sm lg:text-xl">{title}</h1>
              <h2 className="font-normal text-xs lg:text-base italic">
                {desc}
              </h2>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SkillCard;
