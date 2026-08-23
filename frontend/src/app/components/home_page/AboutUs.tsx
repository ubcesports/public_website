import Image from "next/image";
import React from "react";
import GradientButton from "../GradientButton";

const AboutUs = () => {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/about_us.jpg"
        alt="ubcea event picture"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Blue gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-1
          bg-linear-to-r
          from-transparent from-30%
          via-bg-dark-blue/80 via-60%
          to-bg-dark-blue to-82%
        "
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="max-w-2xl ml-auto mr-15 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center text-center mb-7">
            <h2 className="font-header text-header-light-blue text-6xl mb-1.5 uppercase">
              About us
            </h2>
            <h3 className="font-mono text-white text-xl">
              A community of gamers across vancouver
            </h3>
          </div>
          <p className="text-center text-white font-sans text-2xl mb-7">
            The UBC Esports Association is a non-profit, student run
            organization based out of the University of British Columbia. Our
            vision is to foster an inclusive gaming community in Greater
            Vancouver. No matter what games you play, we hope you’ll find people
            who share the same passion!
          </p>
          <GradientButton
            href="https://discord.gg/ubcesports"
            textSize="text-xl"
          >
            join our discord
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
