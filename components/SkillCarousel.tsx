import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkillCard from "./SkillCard";
import skills from "../lib/skillsData";

function SkillCarousel() {
  return (
    <div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-[18rem] md:max-w-5xl lg:max-w-7xl my-2"
      >
        <CarouselContent>
          {skills.map((skill) => (
            <CarouselItem
              key={skill.title + skill.subtitle}
              className="basis-4/5 md:basis-1/4 lg:basis-1/5"
            >
              <SkillCard
                title={skill.title}
                img={skill.img}
                desc={skill.subtitle}
                color={skill.color}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default SkillCarousel;
