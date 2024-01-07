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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import languaChat from "@/images/demogifs/languachat.gif";
import { Button } from "./ui/button";
import { DropdownMenuIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import MetaCert from "./MetaCert";
import GoogleCert from "./GoogleCert";
import Image from "next/image";

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
            <DrawerDescription>
              Select a link or scroll through demos below.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center space-x-2 p-2">
                <Button variant="outline">Home</Button>
                <Button variant="outline">About</Button>
                <Button variant="outline">LinkedIn</Button>
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
              <Carousel
                opts={{ align: "start", loop: "true" }}
                className="w-full max-w-sm my-2"
              >
                <CarouselContent>
                  <CarouselItem key={1} className="basis-1/2 md:basis-1/3">
                    <div className="p-1">
                      <a href="https://langua.chat">
                        <Card>
                          <div className="flex flex-col justify-center items-center py-1">
                            <h1 className="font-bold text-sm">LanguaChat</h1>
                            <h2 className="font-thin text-xs">
                              AI Language Translator
                            </h2>
                          </div>
                          <CardContent className="flex aspect-square items-center justify-center p-1 rounded-md">
                            <Image
                              src={languaChat}
                              alt="Langua Chat"
                              width="300"
                              height="300"
                              className="rounded-md"
                            />
                          </CardContent>
                        </Card>
                      </a>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={2} className="basis-1/2 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">Demos</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={3} className="basis-1/2 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">About</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={4} className="basis-1/2 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">More</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem key={5} className="basis-1/2 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            Still More
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <section />
              <DrawerClose>
                <Button variant="destructive">Cancel</Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
