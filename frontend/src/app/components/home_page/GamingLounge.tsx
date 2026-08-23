import Image from "next/image";
import React from "react";
import GradientButton from "../GradientButton";

const GamingLounge = () => {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/gaming_lounge.jpg"
        alt="ubcea event picture"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{
          transform: "translate(-20%, -20%) scaleX(-1) scale(1.5)",
          transformOrigin: "center",
        }}
      />

      {/* Blue gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-1
          bg-linear-to-r
          from-bg-dark-blue from-15%
          via-bg-dark-blue/80 via-42%
          to-transparent to-75%
        "
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="max-w-2xl mr-auto ml-15 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center text-center mb-7">
            <h2 className="font-header text-header-light-blue text-6xl mb-1.5 uppercase whitespace-nowrap">
              Gaming Lounge
            </h2>
            <h3 className="font-mono text-white text-xl">
              AMS Student Nest Room 2132
            </h3>
          </div>
          <p className="text-center text-white font-sans text-2xl">
            Bored between classes? Come play in the UBCEA Gaming Lounge! We
            offer 20 high-spec Gaming PCs, and 50% off our 2 rhythm game arcade
            cabs (CHUNITHM & Wacca)!
          </p>
          <h4 className="my-6 font-sans text-2xl font-extrabold">
            HOURS: Weekdays, 12pm - 5pm
          </h4>
          <GradientButton href="/lounge" textSize="text-xl">
            more about the lounge
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default GamingLounge;
