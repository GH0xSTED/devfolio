import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import languaChat from "@/images/demogifs/languachat.gif";
import netflixClone from "@/images/demogifs/JFlixDemo.gif";
import gptClone from "@/images/demogifs/GPTDemo.gif";
import trelloClone from "@/images/demogifs/TrelloDemoGIF.gif";
import nftDemo from "@/images/demogifs/NFTMarketDemo.gif";
import littleLemon from "@/images/demogifs/LittleLemonDemo.gif";
import DemoCard from "./DemoCard";

function DemoCarousel() {
  return (
    <div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-[18rem] md:max-w-5xl lg:max-w-7xl my-2"
      >
        <CarouselContent>
          <CarouselItem key={1} className="basis-2/3 md:basis-1/3 lg:basis-3/5">
            <DemoCard
              title="LanguaChat"
              url="https://langua.chat"
              desc="AI Translator, Firebase, shadcn UI, Google Auth"
              img={languaChat}
            />
          </CarouselItem>
          <CarouselItem key={2} className="basis-2/3 md:basis-1/3 lg:basis-3/5">
            <DemoCard
              title="Trello Clone"
              url="https://jrello.vercel.app/"
              desc="Appwrite, Zustand Store, Headless UI, Beautiful DND"
              img={trelloClone}
            />
          </CarouselItem>
          <CarouselItem key={3} className="basis-2/3 md:basis-1/3 lg:basis-3/5">
            <DemoCard
              title="Netflix Clone"
              url="https://jason.vision/"
              desc="MongoDB, Prisma, ReactJS, TMDB API, Google Auth"
              img={netflixClone}
            />
          </CarouselItem>
          <CarouselItem key={4} className="basis-2/3 md:basis-1/3 lg:basis-3/5">
            <DemoCard
              title="ChatGPT Clone"
              url="https://ghostgpt.vercel.app/"
              desc="OpenAI API, Firebase, Next.js & Tailwind"
              img={gptClone}
            />
          </CarouselItem>
          <CarouselItem key={5} className="basis-2/3 md:basis-1/3 lg:basis-3/5">
            <DemoCard
              title="Little Lemon"
              url="https://littlelemoncafe.vercel.app/"
              desc="Meta Front-End Developer Capstone Project"
              img={littleLemon}
            />
          </CarouselItem>
          <CarouselItem key={6} className="basis-2/3 md:basis-1/3 lg:basis-3/5">
            <DemoCard
              title="NFT Marketplace"
              url="https://ghostdrop.vercel.app/"
              desc="Next.js, TypeScript, Sanity.io, ThirdWeb, TailwindCSS"
              img={nftDemo}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default DemoCarousel;
