import Image from "next/image";
import ScrollDownButton from "../ScrollDownButton";

export default function LeagueHero() {
  return (
    <section className="relative isolate flex min-h-svh w-full flex-col items-center justify-center gap-8 overflow-hidden px-5 py-24 text-center lg:aspect-[1728/1186] lg:min-h-0 lg:gap-[69px] lg:p-0">
      <Image
        src="/department_pages/lol_hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(14,19,54,0.86)_0%,rgba(14,19,54,0.58)_48%,rgba(14,19,54,0.74)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(113,149,255,0.28),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(115deg,transparent_0%,rgba(181,246,255,0.12)_48%,transparent_49%)]"
      />

      <div className="flex w-[min(478px,90vw)] items-center justify-between gap-[3.6%]">
        <Image
          src="/logo/logo_variant_1.png"
          alt=""
          width={322}
          height={313}
          priority
          sizes="(min-width: 532px) 161px, 30vw"
          className="h-auto w-[33.6%] object-contain"
        />
        <Image
          src="/logo/logo_variant_text.png"
          alt="UBC Esports"
          width={640}
          height={277}
          priority
          sizes="(min-width: 532px) 300px, 57vw"
          className="h-auto w-[62.8%] object-contain"
        />
      </div>

      <h1 className="w-full max-w-[1372px] bg-linear-to-r from-teal to-darker-light-blue bg-clip-text font-title text-[clamp(2rem,5.556vw,6rem)] uppercase leading-tight text-transparent drop-shadow-[4px_6px_0.5px_var(--bg-gray)] md:whitespace-nowrap lg:min-h-[108px] lg:leading-[1]">
        League of Legends
      </h1>

      <ScrollDownButton href="#about" label="explore" />
    </section>
  );
}