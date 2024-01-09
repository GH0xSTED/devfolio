import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex flex-1 justify-center items-center w-screen max-h-screen p-5 lg:max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-lg">
          {
            "Hello, I'm Jason--a multimedia wizard with a newfound passion for technology."
          }
        </h1>
        <p>
          {
            "Over the last two years, I've dedicated myself to mastering Full-Stack Development, aiming for a career shift into the tech industry. My skill set includes a wide array of languages, frameworks, and databases, including ReactJS, Next.js, Vue, Python, SQL, Django, various UI frameworks, Firebase, MongoDB, and much more."
          }
        </p>
        <p>
          {
            "You're currently experiencing my skills in action on this site, which is built with Next.js and TailwindCSS, and features shadcn-UI components for a dynamic interface. Don't miss the Easter Eggs I've hidden around! If my work interests you, I'd love to discuss potential collaborations."
          }
        </p>
        <Link href="/">
          <h1 className="text-blue-500 font-bold active:scale-90 transition-all duration-150 ease-in">
            Home
          </h1>
        </Link>
        <div className="flex flex-row space-x-2 items-center">
          <Link href="tel:424-237-7127">
            <Badge className="bg-black active:scale-90 transition-all duration-150 ease-in">
              Phone
            </Badge>
          </Link>
          <Link href="mailto:jasonrosslevy@gmail.com">
            <Badge className="bg-gray-600 active:scale-90 transition-all duration-150 ease-in">
              Email
            </Badge>
          </Link>
          <Link href="https://linkedin.com/in/jasonrosslevy">
            <Badge className="bg-blue-600 active:scale-90 transition-all duration-150 ease-in">
              LinkedIn
            </Badge>
          </Link>
          <Link href="https://instagram.com/cleancapture">
            <Badge className="bg-fuchsia-700 active:scale-90 transition-all duration-150 ease-in">
              Instagram
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
