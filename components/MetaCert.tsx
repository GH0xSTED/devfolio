import Image from "next/image";
import React from "react";
import meta from "@/images/brands/meta.svg";

function MetaCert() {
  return (
    <a
      className=""
      href="https://coursera.org/share/7b87ac62dcd878792ba44bb3615d7664"
    >
      <Image
        src={meta}
        alt="meta logo"
        height="100"
        width="200"
        className="h-auto w-20"
      />
      <div className="mb-2 mt-4 text-base font-medium">
        Front-End Development
      </div>
      <p className="text-sm leading-tight text-muted-foreground">
        Course Completed 10/2023 | Certificate issued by{" "}
        <span className="text-blue-500 font-bold">Meta</span>
      </p>
    </a>
  );
}

export default MetaCert;
