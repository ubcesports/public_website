import Image from "next/image";
import GradientButton from "../GradientButton";

export default function LeagueAbout() {
  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden bg-bg-dark-blue lg:aspect-[1728/629] lg:min-h-[629px]"
    >
      <Image
        src="/department_pages/lol_about.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(14,19,54,0.3)_0%,rgba(14,19,54,0.88)_48%,#0e1336_100%)] lg:bg-[linear-gradient(to_left,#0e1336_22%,rgba(14,19,54,0)_82%)]"
      />

      <div className="relative z-10 flex min-h-[42rem] flex-col items-center justify-center gap-5 px-6 py-12 text-center sm:min-h-[40rem] sm:px-10 sm:py-16 lg:min-h-full lg:gap-[10px] lg:px-14 lg:py-[71px] lg:pl-[51.8%]">
        <h2 className="font-header text-[clamp(1.75rem,3.125vw,3.5rem)] uppercase text-header-light-blue">
          About
        </h2>
        <p className="w-full max-w-[777px] font-sans text-[clamp(1rem,1.831vw,1.977rem)] leading-[1.3] text-white/90">
          We are the League of Legends department at UBC Esports. We host weekly
          in-houses open to everyone, regardless of rank or experience, along
          with for-fun tournaments, in-person events, and watch parties. Come
          meet the community and find your place on the Rift.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-1">
          <GradientButton
            href="https://discord.gg/ubcesports"
            textSize="text-[clamp(0.875rem,1.5vw,1.625rem)]"
          >
            UBCEA Discord
          </GradientButton>
          <GradientButton
            href="https://discord.gg/ubcesports"
            textSize="text-[clamp(0.875rem,1.5vw,1.625rem)]"
          >
            Department Discord
          </GradientButton>
        </div>
      </div>
    </section>
  );
}