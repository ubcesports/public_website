import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href="/" className="flex flex-row items-center justify-center">
      <Image
        src="/logo/logo_variant_1.png"
        alt="ubcea logo"
        width={322}
        height={313}
        priority
        className="object-contain mr-3 lg:size-15 size-11"
      />
      <span className="flex flex-row font-wordmark font-extrabold lg:text-3xl text-xl tracking-widest">
        <span className="text-white">UBC</span>
        <span className="text-accent-blue">EA</span>
      </span>
    </Link>
  );
};

export default HeaderLogo;
