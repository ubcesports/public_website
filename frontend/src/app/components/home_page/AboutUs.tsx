import Image from "next/image";
import React from "react";
import GradientButton from "../GradientButton";

const AboutUs = () => {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
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
          pointer-events-none absolute inset-0 z-1
          bg-bg-dark-blue/80
          lg:bg-transparent lg:bg-linear-to-r
          lg:from-transparent lg:from-30%
          lg:via-bg-dark-blue/80 lg:via-60%
          lg:to-bg-dark-blue lg:to-82%
        "
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh items-center justify-center px-5 py-16">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center lg:ml-auto lg:mr-15">
          <div className="flex flex-col justify-center items-center text-center mb-7">
            <h2 className="mb-1.5 font-header text-4xl uppercase text-header-light-blue sm:text-5xl lg:text-6xl">
              About us
            </h2>
            <h3 className="font-mono text-base text-white sm:text-lg lg:text-xl">
              A community of gamers across vancouver
            </h3>
          </div>
          <p className="mb-7 text-center font-sans text-base leading-relaxed text-white sm:text-lg lg:text-2xl">
            The UBC Esports Association is a non-profit, student run
            organization based out of the University of British Columbia. Our
            vision is to foster an inclusive gaming community in Greater
            Vancouver. No matter what games you play, we hope you’ll find people
            who share the same passion!
          </p>
          <GradientButton
            href="https://discord.gg/ubcesports"
            textSize="md:text-xl text-md"
          >
            join our discord
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
