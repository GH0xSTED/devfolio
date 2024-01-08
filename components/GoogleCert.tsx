import Image from "next/image";
import React from "react";
import google from "@/images/brands/google.svg";
import Link from "next/link";

function GoogleCert() {
  return (
    <Link
      className="py-1"
      href="https://coursera.org/share/7b87ac62dcd878792ba44bb3615d7664"
    >
      <Image
        src={google}
        alt="google logo"
        height="100"
        width="200"
        className="h-auto w-16"
      />
      <div className="my-1 text-sm font-medium">Google Cybersecurity</div>
      <p className="text-xs leading-tight text-muted-foreground">
        Completed 8/2023
      </p>
      <p className="text-xs leading-tight text-muted-foreground">
        {" "}
        Certificate issued by{" "}
        <span className="font-bold">
          <span className="text-blue-500">G</span>
          <span className="text-red-600">o</span>
          <span className="text-orange-300">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-600">l</span>
          <span className="text-red-600">e</span>
        </span>
      </p>
    </Link>
  );
}

export default GoogleCert;
