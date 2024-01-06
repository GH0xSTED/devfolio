import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

function NavBar() {
  return (
    <div className="flex flex-1 flex-row items-center justify-between p-3  w-screen max-h-14">
      <h1>
        Jason Levy
        <span className="ml-5 italic text-blue dark:text-gray-500">
          | Portfolio
        </span>
      </h1>
      <ModeToggle />
    </div>
  );
}

export default NavBar;
