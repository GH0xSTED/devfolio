import Image from "next/image";
import React from "react";
import meta from "@/images/brands/meta.svg";
import Link from "next/link";

function MetaCert() {
  return (
    <Link
      href="https://coursera.org/share/7b87ac62dcd878792ba44bb3615d7664"
      className="py-1"
    >
      <Image
        src={meta}
        alt="meta logo"
        height="100"
        width="200"
        className="h-auto w-20"
      />
      <div className="my-1 text-sm font-medium">Front-End Development</div>
      <p className="text-xs leading-tight text-muted-foreground">
        Completed 10/2023
      </p>
      <p className="text-xs leading-tight text-muted-foreground">
        Certificate issued by{" "}
        <span className="text-blue-500 font-bold">Meta</span>
      </p>
    </Link>
  );
}

export default MetaCert;
