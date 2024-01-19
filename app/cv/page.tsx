import React from "react";
import ExpCard from "./ExpCard";

function page() {
  return (
    <div className="flex flex-1 flex-col justify-center mx-auto rounded-md w-screen max-w-7xl p-20 bg-neutral-300 text-black">
      <div className="flex flex-col justify-start">
        <h1 className="font-black text-5xl">JASON ROSS LEVY</h1>
        <p className="italic text-lg">Los Angeles, CA</p>
        <a href="mailto:jasonrosslevy@gmail.com">
          <h2 className="font-semibold text-base hover:text-blue-400 transition-colors duration-150">
            jasonrosslevy@gmail.com
          </h2>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col justify-start mt-10 space-y-10">
            <div>
              <h1 className="font-extrabold text-2xl uppercase">Summary</h1>
              <p>
                {`Experienced professional with a solid foundation in cybersecurity, complemented by extensive roles in media production and management. Drawing from this unique blend of technical and non-technical backgrounds, I am passionately transitioning to software development and/or project management. Equipped with a deep understanding of tech intricacies from my cybersecurity days and a wealth of insights from diverse industries, I'm eager to contribute to a collaborative tech and commerce-driven environment. Committed to innovation and excellence, I am ready to bring a multifaceted perspective to tackle complex challenges.`}
              </p>
            </div>
            <div>
              <h1 className="font-extrabold text-2xl uppercase">Experience</h1>
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
                    such as Trello, ChatGPT and my own proprietary link
                    shortening service called Linkbla.de
                  </li>
                  <li>
                    Built programs using .NET, XCODE, and Python to speed up
                    repetitive processes at Chemical Guys
                  </li>
                </ExpCard>
                <ExpCard
                  title="Director of Digital Media"
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
                    2023 year-end Numbers: reached 6m households for 20m total
                    impressions. 5.99% conversion rate leading to $1 million in
                    sales revenue.
                  </li>
                  <li>
                    Grew the YouTube channel viewership by 62% in 2023 compared
                    to year prior to my hire date (2019)
                  </li>
                  <li>
                    Attracted 880k subscribers, marking a 63.87% growth since
                    hire date (2019)
                  </li>
                  <li>
                    Spearheaded multiple product launches, ensuring quality
                    multimedia outputs
                  </li>
                  <li>
                    Managed and mentored a dynamic video team of 5
                    videographers, editors and producers, ensuring brand
                    alignment for product launches & meeting all deadlines
                  </li>
                  <li>
                    Worked a parallel role as Principal Photographer for all of
                    2023
                  </li>
                  <li>
                    Recorded voiceovers for promotional videos and
                    advertisements
                  </li>
                  <li>
                    Composed music tracks for use in various multimedia projects
                  </li>
                </ExpCard>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl p-3 border-2 border-gray-500 mt-10">
          <h1 className="font-bold text-xl">Skills</h1>
        </div>
      </div>
    </div>
  );
}

export default page;
