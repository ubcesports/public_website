import Image from "next/image";
import React from "react";
import GradientButton from "../GradientButton";
import ScrollDownButton from "../ScrollDownButton";

const GamingLounge = () => {
  return (
    <section id="gaming-lounge" className="relative min-h-svh w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/gaming_lounge.jpg"
        alt="ubcea event picture"
        fill
        priority
        sizes="100vw"
        className="object-cover transform-[scaleX(-1)] origin-center lg:transform-[translate(-20%,-20%)_scaleX(-1)_scale(1.5)]"
      />

      {/* Blue gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-1
          bg-bg-dark-blue/80
          lg:bg-transparent lg:bg-linear-to-r
          lg:from-bg-dark-blue lg:from-15%
          lg:via-bg-dark-blue/80 lg:via-42%
          lg:to-transparent lg:to-75%
        "
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh items-center justify-center px-5 py-16">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center lg:mr-auto lg:ml-15">
          <div className="flex flex-col justify-center items-center text-center mb-7">
            <h2 className="mb-1.5 font-header text-4xl uppercase text-header-light-blue sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
              Gaming Lounge
            </h2>
            <h3 className="font-mono text-base text-white sm:text-lg lg:text-xl">
              AMS Student Nest Room 2132
            </h3>
          </div>
          <p className="text-center font-sans text-base leading-relaxed text-white sm:text-lg lg:text-2xl">
            Bored between classes? Come play in the UBCEA Gaming Lounge! We offer 20 high-spec
            Gaming PCs, and 50% off our 2 rhythm game arcade cabs (CHUNITHM & Wacca)!
          </p>
          <h4 className="my-6 text-center font-sans text-base font-extrabold sm:text-lg lg:text-2xl">
            HOURS: Weekdays, 12pm - 5pm
          </h4>
          <GradientButton href="/lounge" textSize="md:text-xl text-md">
            more about the lounge
          </GradientButton>
        </div>
      </div>

      <ScrollDownButton href="#game-departments" label="game depts" />
    </section>
  );
};

export default GamingLounge;
