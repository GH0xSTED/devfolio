"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavBar from "@/components/NavBar";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen w-screen flex-col items-center bg-neutral-300 dark:bg-slate-900">
      <NavBar />
      <div className="flex flex-row">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger></TooltipTrigger>
            <TooltipContent>
              <h3>Click for special message</h3>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </main>
  );
}
