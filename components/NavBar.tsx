import React from "react";
import NavMenu from "./NavMenu";
import { ModeToggle } from "./ModeToggle";
import NavDrawer from "./NavDrawer";

function NavBar() {
  return (
    <div className="flex flex-1 flex-row items-center justify-between p-3  w-screen max-h-14">
      <div className="flex items-center justify-start space-x-10">
        <h1 className="font-bold">
          Jason Levy
          <span className="ml-1 italic font-medium text-blue dark:text-gray-500 text-xs">
            | Portfolio
          </span>
        </h1>
        <div className="hidden sm:flex">
          <NavMenu />
        </div>
        <div className="flex sm:hidden items-center justify-center mx-auto w-20">
          <NavDrawer />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}

export default NavBar;
