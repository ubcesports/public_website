import Image from "next/image";
import Link from "next/link";
import GradientButton from "../GradientButton";

export default function SplashPage() {
  return (
    <section className="relative h-svh w-full overflow-hidden">
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center gap-3">
          <Image
            src="/logo/logo_variant_1.png"
            alt=""
            width={322}
            height={313}
            priority
            className="size-30"
          />
          <Image
            src="/logo/logo_variant_text.png"
            alt="UBC Esports"
            width={640}
            height={277}
            priority
            className="h-auto w-70"
          />
        </div>

        <span className="text-white/77 [text-shadow:0_2.52px_2.84px_rgba(0,0,0,0.47)] uppercase font-bold tracking-widest mt-5 text-xl font-header">
          presents
        </span>

        <Image
          src="/images/liftoff_logo.png"
          alt="UBC Esports"
          width={1847}
          height={703}
          priority
          className="h-auto w-200 mb-3"
        />

        <span className="bg-[#2D344A] text-bold text-2xl mb-6 p-2 font-mono">
          September 25TH, 2026 - AMS Nest Great Hall
        </span>

        <GradientButton href="/events/liftoff" textSize="text-xl">
          learn more
        </GradientButton>
      </div>
    </section>
  );
}
