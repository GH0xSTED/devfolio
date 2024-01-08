import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex flex-1 justify-center items-center w-screen max-h-screen p-5 lg:max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-lg">Hi, I am Jason.</h1>
        <p>
          A highly adaptable, fun and creative multimedia wizard turned tech
          enthusiast!
        </p>
        <p>
          I have been learning how to become a Full-Stack Developer over the
          span of the past 2 years, and am looking to career-switch into the
          world of tech. Languages, frameworks, and databases I have been
          committed to learn include: ReactJS, Next.js, Vue, Python, SQL,
          Django, TailwindCSS, DaisyUI, ChakraUI, TailwindUI, shadcn-UI,
          Firebase, MongoDB, Sanity.io, Appwrite, AWS, and believe it or not,
          more!
        </p>
        <p>
          The site your are on uses Next.js with TailwindCSS, as well as
          shadcn-UI components such as the cards, carousels, buttons and
          light/dark mode toggle. There are a few Easter Eggs around as well! I
          hope you enjoy what you see here, and feel free to reach out to me if
          you would like to work together!
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
