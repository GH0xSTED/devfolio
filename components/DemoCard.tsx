import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function DemoCard({
  img,
  title,
  desc,
  url,
}: {
  img: StaticImageData;
  title: string;
  desc: string;
  url: string;
}) {
  return (
    <div className="p-1">
      <Link href={url} prefetch={false}>
        <Card className="hover:bg-accent">
          <div className="flex flex-col justify-center items-center p-1">
            <h1 className="font-bold text-sm lg:text-xl">{title}</h1>
            <h2 className="font-normal text-xs lg:text-base italic">{desc}</h2>
          </div>
          <CardContent className="flex aspect-square items-center justify-center p-1 rounded-md">
            <div className="relative w-full h-full lg:m-3 flex justify-center items-center">
              <Image
                src={img}
                alt={title}
                layout="fit"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default DemoCard;
