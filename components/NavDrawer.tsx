import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import MetaCert from "./MetaCert";
import GoogleCert from "./GoogleCert";
import SkillCarousel from "./SkillCarousel";
import Link from "next/link";

function NavDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <HamburgerMenuIcon />
        </DrawerTrigger>
        <DrawerContent className="flex justify-center items-center dark:bg-[rgb(15,15,15)]">
          <DrawerHeader className="flex flex-col justify-center items-center">
            <DrawerTitle>Navigation Menu</DrawerTitle>
            <DrawerDescription className="-mb-5">
              Select a link.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center space-x-2 p-2">
                <Link href="/">
                  <DrawerClose>
                    <Button
                      variant="outline"
                      className="bg-blue-700 dark:bg-slate-600 text-white"
                    >
                      Home
                    </Button>
                  </DrawerClose>
                </Link>
                <Link href="/about">
                  <DrawerClose>
                    <Button
                      variant="outline"
                      className="bg-blue-700 dark:bg-slate-600 text-white"
                    >
                      About
                    </Button>
                  </DrawerClose>
                </Link>
                <Link href="https://linkedin.com/in/jasonrosslevy">
                  <Button
                    variant="outline"
                    className="bg-blue-700 dark:bg-slate-600 text-white"
                  >
                    LinkedIn
                  </Button>
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center border-2 border-black rounded-xl p-2 mt-2">
                <h1 className="font-bold text-sm mb-1 text-muted-foreground">
                  Click a Certification to View
                </h1>
                <div className="flex flex-1 justify-center items-center space-x-2 mb-2">
                  <Card className="flex h-32 sm:h-full w-full m-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl">
                    <CardContent className="flex items-center justify-center p-2 lg:py-5">
                      <MetaCert />
                    </CardContent>
                  </Card>
                  <Card className="flex h-32 sm:h-full w-full m-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl">
                    <CardContent className="flex items-center justify-center p-2">
                      <GoogleCert />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center my-3">
                <h1 className="font-bold text-xs text-muted-foreground">
                  Navigate skills by scrolling left/right
                </h1>
                <SkillCarousel />
              </div>
              <DrawerClose>
                <Button variant="destructive">Close</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
