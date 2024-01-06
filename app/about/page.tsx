import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="flex flex-1 justify-center items-center w-screen max-h-screen p-5">
      <div className="flex flex-col justify-center items-center">
        <h1>About Coming Soon.</h1>
        <h2>
          <Link href="/">
            Click <span className="font-bold text-blue-600">HERE</span>
          </Link>{" "}
          to go back home
        </h2>
      </div>
    </div>
  );
}

export default About;
