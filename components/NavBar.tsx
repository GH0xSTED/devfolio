"use client";

import React, { ReactNode } from "react";
import NavMenu from "@/components/NavMenu";
import { ModeToggle } from "@/components/ModeToggle";
import NavDrawer from "@/components/NavDrawer";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex flex-1 flex-row items-center justify-between p-3 w-screen max-h-14">
      <div className="flex flex-1 justify-between items-center space-x-10">
        <Link
          href="/"
          className="active:scale-90 transition-all duration-150 ease-in"
        >
          <h1 className="font-bold">
            Jason Levy
            <span className="ml-1 italic font-medium text-blue dark:text-gray-500 text-xs">
              | Portfolio
            </span>
          </h1>
        </Link>
        <div className="hidden sm:flex sm:flex-1 sm:justify-start sm:items-center">
          <NavMenu />
        </div>
        <div className="flex items-center justify-end">
          <ModeToggle />
          <div className="flex sm:hidden items-center justify-center mx-4">
            <NavDrawer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
