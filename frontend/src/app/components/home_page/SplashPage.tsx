import Image from "next/image";
import GradientButton from "../GradientButton";

export default function SplashPage() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/splash.jpg"
        alt="ubcea event picture"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-4 py-20">
        <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
          <Image
            src="/logo/logo_variant_1.png"
            alt=""
            width={322}
            height={313}
            priority
            className="h-auto w-20 md:w-30"
          />
          <Image
            src="/logo/logo_variant_text.png"
            alt="UBC Esports"
            width={640}
            height={277}
            priority
            className="h-auto w-48 md:w-70"
          />
        </div>

        <span className="text-white/77 [text-shadow:0_2.52px_2.84px_rgba(0,0,0,0.47)] uppercase font-bold tracking-widest mt-5 md:text-xl text-md font-header">
          presents
        </span>

        <Image
          src="/images/liftoff_logo.png"
          alt="UBC Esports"
          width={1847}
          height={703}
          priority
          className="mb-3 h-auto w-full max-w-200"
        />

        <span className="mb-6 max-w-full bg-[#2D344A] p-2 text-center font-mono md:text-2xl text-lg text-bold">
          September 25TH, 2026 - AMS Nest Great Hall
        </span>

        <GradientButton href="/events/liftoff" textSize="md:text-xl text-md">
          learn more
        </GradientButton>
      </div>
    </section>
  );
}
