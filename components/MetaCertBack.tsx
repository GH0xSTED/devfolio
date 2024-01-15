import Image from "next/image";
import React from "react";
import meta from "@/images/brands/meta.svg";
import Link from "next/link";

function MetaCertBack() {
  return (
    <Link
      href="https://coursera.org/share/13eaee8e4b0d6de869fae6e64a0c6c4f"
      className="py-1"
    >
      <Image
        src={meta}
        alt="meta logo"
        height="100"
        width="200"
        className="h-auto w-20"
      />
      <div className="my-1 text-sm font-medium">Back-End Development</div>
      <p className="text-xs leading-tight text-muted-foreground">
        Completed 1/2024
      </p>
      <p className="text-xs leading-tight text-muted-foreground">
        Certificate issued by{" "}
        <span className="text-blue-500 font-bold">Meta</span>
      </p>
    </Link>
  );
}

export default MetaCertBack;
