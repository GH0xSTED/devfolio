import Image from "next/image";
import React from "react";
import google from "@/images/brands/google.svg";

function GoogleCert() {
  return (
    <a
      className=""
      href="https://coursera.org/share/7b87ac62dcd878792ba44bb3615d7664"
    >
      <Image
        src={google}
        alt="google logo"
        height="100"
        width="200"
        className="h-auto w-20"
      />
      <div className="mb-1 mt-3 text-base font-medium">
        Google Cybersecurity
      </div>
      <p className="text-sm leading-tight text-muted-foreground">
        Course Completed 8/2023 | Certificate issued by{" "}
        <span className="font-bold">
          <span className="text-blue-500">G</span>
          <span className="text-red-600">o</span>
          <span className="text-orange-300">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-600">e</span>
        </span>
      </p>
    </a>
  );
}

export default GoogleCert;
