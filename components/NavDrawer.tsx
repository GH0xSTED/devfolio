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
import { Button } from "./ui/button";
import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

function NavDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <HamburgerMenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>What are you looking for?</DrawerTitle>
            <DrawerDescription>Select below.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="outline">Skills</Button>
            <Button variant="outline">Demos</Button>
            <Button variant="outline">About</Button>
            <section />
            <DrawerClose>
              <Button variant="destructive">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
