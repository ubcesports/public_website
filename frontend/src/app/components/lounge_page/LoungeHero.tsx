import Image from "next/image";
import ScrollDownButton from "../ScrollDownButton";

const LoungeHero = () => {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/gaming_lounge.jpg"
        alt="students playing in the UBCEA gaming lounge"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center transform-[scaleX(-1)]"
      />

      {/* Blue overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-1
          bg-linear-to-b from-bg-dark-blue/75 via-bg-dark-blue/40 to-bg-dark-blue/85
        "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5 pt-28 pb-16 text-center sm:pt-32">
        <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
          <Image
            src="/logo/logo_variant_1.png"
            alt=""
            width={322}
            height={313}
            priority
            className="h-auto w-16 object-contain sm:w-20 lg:w-24"
          />
          <Image
            src="/logo/logo_variant_text.png"
            alt="UBC Esports"
            width={640}
            height={277}
            priority
            className="h-auto w-40 sm:w-52 lg:w-64"
          />
        </div>

        <h1
          className="
            bg-linear-to-r from-teal to-darker-light-blue
            bg-clip-text
            font-header text-4xl uppercase text-transparent
            drop-shadow-[0_0_18px_rgba(14,19,54,0.9)]
            sm:text-6xl lg:text-7xl
          "
        >
          Gaming Lounge
        </h1>

        <p className="mt-3 font-sans text-base font-bold text-white [text-shadow:0_2px_3px_rgba(0,0,0,0.6)] sm:text-lg lg:text-xl">
          Open throughout the school year in the AMS Nest
        </p>
      </div>

      <ScrollDownButton href="#game-on-campus" label="explore" />
    </section>
  );
};

export default LoungeHero;
