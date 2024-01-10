import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

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
              {isLoading ? (
                <div className="flex items-center flex-row space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <Skeleton className="h-12 w-12" />
                  <Skeleton className="h-12 w-24" />
                </div>
              ) : (
                <Image
                  src={img}
                  alt={title}
                  width={800}
                  height={800}
                  className="rounded-md"
                  onLoad={handleLoad}
                />
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default DemoCard;
