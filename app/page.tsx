"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { toast } from "sonner";
import DemoCarousel from "@/components/DemoCarousel";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen w-screen flex-col items-center">
      <div className="flex flex-row">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={() =>
                toast.message("🍞 Don't you love toast? Thanks for visiting!")
              }
            >
              <h1 className="font-bold">Hi!</h1>
            </TooltipTrigger>
            <TooltipContent>
              <h3>Click for special message</h3>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="p-5 max-w-4xl lg:max-w-5xl flex flex-col justify-center items-center space-y-2">
        <p>
          My name is{" "}
          <Link href="/about">
            <span className="text-blue-600 font-bold active:scale-90 transition-all duration-150 ease-in">
              Jason
            </span>
          </Link>
          , welcome to my developer portfolio!
        </p>
        <p className="text-sm">
          {
            "As a business graduate who embraced the tech world, I bring a unique blend of business insight and self-taught technical skills to web development. My journey in coding began out of curiosity and quickly grew into a passion for creating user-friendly, impactful web solutions."
          }
          <a href="mailto:jasonrosslevy@gmail.com">
            <span className="text-blue-500 font-bold active:scale-90 transition-all duration-150 ease-in">
              contact me
            </span>
          </a>{" "}
          if you would like to know more!
        </p>
      </div>
      <Separator className="max-w-sm lg:max-w-7xl" />
      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="font-bold">Demos</h1>
        <h2 className="text-muted-foreground py-5 px-10 text-xs sm:text-base">
          Use the left/right buttons or grab and scroll to navigate demos.
          Click/Tap on a card to view.
        </h2>
        <DemoCarousel />
      </div>
    </main>
  );
}
