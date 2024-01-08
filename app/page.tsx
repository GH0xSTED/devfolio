"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavBar from "@/components/NavBar";
import { toast } from "sonner";
import DemoCarousel from "@/components/DemoCarousel";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen w-screen flex-col items-center">
      <NavBar />
      <div className="flex flex-row">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={() =>
                toast.message("🍞 Don't you love toast? Thanks for visiting!")
              }
            >
              Hi
            </TooltipTrigger>
            <TooltipContent>
              <h3>Click for special message</h3>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="p-5 max-w-4xl lg:max-w-5xl flex flex-col justify-center items-center space-y-2">
        <p>My name is Jason, welcome to my developer portfolio!</p>
        <p>
          I am a Full-Stack Devloper {"(with an emphasis on Front-End) "} and
          would absolutely love to work with you. Please use the menu to
          navigate this site and check out some of my demos and certifications.
          I hope you enjoy what you see here, and feel free to reach out to me
          if you would like to work together!
        </p>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:justify-center sm:items-center sm:mt-5">
        <h2 className="text-muted-foreground">
          Use the left/right buttons or click and drag to navigate demos. Click
          on a card to view!
        </h2>
        <DemoCarousel />
      </div>
    </main>
  );
}
