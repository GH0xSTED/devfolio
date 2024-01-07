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
import DemoCarousel from "./DemoCarousel";
import Link from "next/link";

function NavDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <HamburgerMenuIcon />
        </DrawerTrigger>
        <DrawerContent className="flex justify-center items-center">
          <DrawerHeader>
            <DrawerTitle>Navigation Menu</DrawerTitle>
            <DrawerDescription className="-mb-5">
              Select a link or scroll through demos below.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center space-x-2 p-2">
                <Link href="/">
                  <Button variant="outline">Home</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">About</Button>
                </Link>
                <Link href="https://linkedin.com/in/jasonrosslevy">
                  <Button variant="outline">LinkedIn</Button>
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-center items-center border-2 border-black rounded-xl p-2">
                <h1 className="font-bold text-sm my-2">Certificates</h1>
                <div className="flex flex-1 justify-center items-center space-x-2 mb-2">
                  <Card className="flex h-full w-full m-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl basis-1/2">
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <MetaCert />
                    </CardContent>
                  </Card>
                  <Card className="flex h-full w-full m-1 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl basis-1/2">
                    <CardContent className="flex aspect-square items-center justify-center p-2">
                      <GoogleCert />
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center my-3">
                <h1 className="font-bold text-xs">
                  Navigate demos by scrolling left/right. Tap to view.
                </h1>
                <DemoCarousel />
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
