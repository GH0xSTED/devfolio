import React from "react";
import ExpCard from "./ExpCard";
import meta from "../../images/brands/meta.svg";
import google from "../../images/brands/google.svg";
import Image from "next/image";
import SkillCard from "./SkillCard";
import SocialBar from "./SocialBar";

function page() {
  return (
    <div className="flex flex-1 flex-col justify-center mx-auto rounded-md w-screen max-w-7xl p-8 md:p-20 bg-none">
      <div className="grid grid-cols-1 gap-0 sm:gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <h1 className="font-black text-xl md:text-5xl">JASON ROSS LEVY</h1>
          <h2 className="font-bold text-sm md:text-base">
            Sr Media Production Specialist / Jr Developer
          </h2>
        </div>
        <div className="flex justify-start flex-col items-start">
          <p className="md:mt-3 italic text-xs sm:text-base">Los Angeles, CA</p>
          <div className="flex flex-row justify-start items-center">
            <a href="mailto:jasonrosslevy@gmail.com">
              <h2 className="font-semibold text-xs sm:text-base hover:text-blue-400 transition-colors duration-150">
                jasonrosslevy@gmail.com
              </h2>
            </a>
            <a href="tel:+14242377127">
              <div className="bg-none rounded-md mr-1 hover:bg-neutral-400/80 hover:scale-110 transition-all duration-150 ease-in-out">
                📱
              </div>
            </a>
          </div>
          <SocialBar />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1 sm:gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col justify-start mt-4 md:mt-10 space-y-4 md:space-y-10">
            <div>
              <h1 className="font-extrabold text-lg md:text-2xl uppercase">
                Summary
              </h1>
              <p className="md:text-sm text-xs">
                {`Experienced professional with a solid foundation in cybersecurity, complemented by extensive roles in media production and management. Drawing from this unique blend of technical and non-technical backgrounds, I am passionately transitioning to software development and/or project management. Committed to innovation and excellence, I am ready to bring a multifaceted perspective to tackle complex challenges.`}
              </p>
            </div>

            <div>
              <h1 className="font-extrabold text-lg md:text-2xl uppercase -mb-3">
                Experience
              </h1>
              <div>
                <ExpCard
                  title="Freelance Front-End Developer"
                  company="HYPERGHOST"
                  location="Remote"
                  from="07/2021"
                  to="Present"
                >
                  <li>
                    Built websites for several clients using the latest in
                    ReactJS, NextJS, TailwindCSS and more
                  </li>
                  <li>
                    Completed specialization courses to further my self-taught
                    knowledge and development
                  </li>
                  <li>
                    Built several demos including clones of popular web services
                    such as{" "}
                    <a
                      href="https://jrello.vercel.app"
                      className="text-blue-500 font-bold"
                    >
                      Trello
                    </a>
                    , ChatGPT and my own proprietary link-shortening service
                    called{" "}
                    <a
                      href="https://linkbla.de"
                      className="text-blue-500 font-bold"
                    >
                      Linkbla.de
                    </a>
                  </li>
                  <li>
                    Built programs using .NET, XCODE, and Python to speed up
                    repetitive processes at Chemical Guys
                  </li>
                </ExpCard>
                <ExpCard
                  title="Media Production Supervisor"
                  company="Chemical Guys"
                  location="Torrance, CA"
                  from="01/2020"
                  to="Present"
                >
                  <li>
                    Wrote, Produced, Filmed, Edited and sometimes Starred in OTT
                    campaigns on Amazon Prime and Hulu
                  </li>
                  <li>
                    2023 year-end Numbers: My ads alone reached 6m households
                    for 20m total impressions. 5.99% conversion rate leading to
                    $1 million in sales revenue
                  </li>
                  <li>
                    Grew the YouTube channel viewership by 63.87% since hire
                    date, attracting a total 880k subscribers
                  </li>
                  <li>
                    Spearheaded multiple product launches, ensuring quality
                    multimedia outputs
                  </li>
                  <li>
                    Managed and mentored a dynamic video team of 5
                    videographers, photographers, editors and producers,
                    ensuring brand alignment for product launches & meeting all
                    deadlines
                  </li>
                  <li>
                    Held a parallel role as Senior Staff Photographer for all of
                    2023
                  </li>
                  <li>
                    Recorded voiceovers for promotional videos and
                    advertisements, utilizing my communication, acting, and
                    performing skills
                  </li>
                  <li>
                    Composed music tracks for use in various multimedia projects
                    and performed songs for product music videos
                  </li>
                </ExpCard>
                <ExpCard
                  title="Visual Artist"
                  company="JRL Photography"
                  location="Redondo Beach, CA"
                  from="04/2013"
                  to="01/2020"
                >
                  <li>
                    Worked with several high-profile businesses, celebrities,
                    and social media influencers, exceeding their
                    ultra-high-quality standards
                  </li>
                  <li>
                    Work published on the web, in magazines and on television.
                    Features include: ABC, Today, BuzzFeed, Walmart, Amazon,
                    Angelino Magazine, Essence Magazine, Business Wire, LA
                    Times, and many more
                  </li>
                  <li>
                    Photographed lifestyle, headshot, corporate portrait, real
                    estate, drone, event, fashion, and product images
                  </li>
                  <li>
                    Produced, directed, shot and edited demo reels, real estate
                    sales videos, testimonials and movie trailers
                  </li>
                  <li>
                    Worked with various lighting setups including a combination
                    of natural, continuous, and strobe to achieve desired image
                    effects in-camera
                  </li>
                  <li>
                    Edited photos and videos using Adobe Suite, Capture One and
                    DaVinci Resolve
                  </li>
                </ExpCard>
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-lg md:text-2xl uppercase">
                Education
              </h1>
              <div>
                <h1 className="font-bold sm:text-base text-sm">
                  Bachelor of Science in Busines Administration
                </h1>
                <h2 className="italic sm:text-base text-xs">
                  Dual Concentration: Mgmt Information Systems & Marketing
                </h2>
                <div className="w-full rounded-xl bg-neutral-500 h-[1px] mt-0.5 shadow" />
                <h1 className="font-semibold sm:text-base text-sm">
                  University at Albany - State University of New York
                </h1>
                <ul className="[list-style-type:square] list-inside text-xs md:text-sm flex flex-col space-y-1 font-semibold">
                  <li>Graduated cum laude</li>
                  <li>{"Dean's List of Distinguished Students"}</li>
                  <li>
                    Delta Sigma Pi - International Co-ed Business Fraternity
                    <ul className="ml-5 mt-1 list-disc list-inside text-xs md:text-sm flex flex-col space-y-1 italic font-normal">
                      <li>Vice President of Pledge Education</li>
                      <li>Chancellor</li>
                      <li>Webmaster</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 dark:bg-neutral-900 rounded-xl p-3 border-2 border-neutral-950 mt-10 space-y-5">
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-semibold md:text-lg text-base">
              CERTIFICATIONS
            </h1>
            <div className="w-full rounded-xl bg-neutral-500 h-[1px] -mt-0.5 mb-2 shadow" />
            <div className="flex flex-col justify-start items-start mb-3">
              <Image src={meta} alt="Meta" width={75} height={30} />
              <h2 className="font-bold">Front-End Developer Specialization</h2>
              <h3 className="text-sm italic">October 2023</h3>
            </div>
            <div className="flex flex-col justify-start items-start mb-3">
              <Image src={meta} alt="Meta" width={75} height={30} />
              <h2 className="font-bold">Back-End Developer Specialization</h2>
              <h3 className="text-sm italic">January 2024</h3>
            </div>
            <div className="flex flex-col justify-start items-start mb-2">
              <Image src={google} alt="Meta" width={75} height={30} />
              <h2 className="font-bold">Cybersecurity Specialization</h2>
              <h3 className="text-sm italic">August 2023</h3>
            </div>
          </div>
          <SkillCard title="SKILLS">
            <ul className="flex flex-col justify-start">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Vue</li>
              <li>React Native</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
              <li>AWS</li>
              <li>PostgreSQL</li>
              <li>SQL</li>
              <li>TypeScript</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>Django</li>
            </ul>
            <ul className="flex flex-col justify-start">
              <li>Photography</li>
              <li>Videography</li>
              <li>Studio Lighting</li>
              <li>Video Editing</li>
              <li>Camera Workflow: Sony, Nikon</li>
              <li>Post-Production</li>
              <li>Copywriting</li>
              <li>Script Writing</li>
              <li>Audio Production</li>
              <li>Sound Design</li>
              <li>MacOS, Windows</li>
              <li>Color Correction</li>
            </ul>
          </SkillCard>
          <SkillCard title="TOOLS">
            <ul className="flex flex-col justify-start">
              <li>Visual Studio Code</li>
              <li>Github</li>
              <li>ChatGPT</li>
              <li>Figma</li>
              <li>OBS Studio</li>
              <li>Microsoft Office</li>
              <li>Wix Studio</li>
            </ul>
            <ul className="flex flex-col justify-start">
              <li>Adobe Photoshop</li>
              <li>Adobe Premiere Pro</li>
              <li>Adobe Lightroom</li>
              <li>Adobe After Effects</li>
              <li>DaVinci Resolve</li>
              <li>Capture One</li>
              <li>Adobe Audition</li>
            </ul>
          </SkillCard>
          <SkillCard title="LANGUAGES">
            <h1>{"English: Native"}</h1>
            <h1>{"Spanish: Limited (Intermediate)"}</h1>
          </SkillCard>
          <SkillCard title="WEBSITES, PORTFOLIOS, PROFILES">
            <a
              href="https://www.j13.dev"
              className="hover:text-blue-500 transition-all duration-150 ease-in font-semibold"
            >
              Software Developer Portfolio
            </a>
            <a
              href="https://www.jason.vision"
              className="hover:text-blue-500 transition-all duration-150 ease-in font-semibold"
            >
              Digital Media Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/jasonrosslevy"
              className="hover:text-blue-500 transition-all duration-150 ease-in font-semibold"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://www.jason.vision/movies/JRL-2024-Cinemareel_sm.mp4"
              className="hover:text-blue-500 transition-all duration-150 ease-in font-semibold"
            >
              Editing Demo Reel
            </a>
          </SkillCard>
          <h1 className="text-xs pt-10">
            Please reach out using the contact methods above if you would like
            more information
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;
