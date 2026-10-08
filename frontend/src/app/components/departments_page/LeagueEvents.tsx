import Image from "next/image";

const events = [
  "Static Fire Tournament - September 19-20",
  "Liftoff - October 9",
  "League of Legends Worlds Finals Watch Party - November 14",
  "Winter Series - TBD (around winter break)",
  "Cascadia Tournament - TBD",
  "Expo - TBD",
] as const;

export default function LeagueEvents() {
  return (
    <section
      id="events"
      className="relative isolate flex min-h-[40rem] w-full overflow-hidden bg-bg-dark-blue text-white xl:aspect-[1728/629] xl:min-h-[32rem]"
    >
      <Image
        src="/department_pages/lol_events.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center transform-[scaleX(-1)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(14,19,54,0.78)_0%,rgba(14,19,54,0.72)_100%)] xl:bg-[linear-gradient(to_right,rgba(14,19,54,0.94)_0%,rgba(14,19,54,0.76)_46%,rgba(14,19,54,0)_100%)]"
      />

      <div className="flex w-full flex-col gap-[10px] px-6 py-10 text-left sm:px-10 sm:py-14 xl:pt-[70px] xl:pr-[51.56%] xl:pb-[71px] xl:pl-[7%]">
        <h2 className="font-header text-[clamp(1.75rem,3.125vw,3.5rem)] uppercase text-header-light-blue">
          Events
        </h2>
        <p className="font-sans text-[clamp(1rem,1.831vw,1.977rem)] font-bold text-white">
          AMS Student Nest Room 2132
        </p>
        <ul className="flex flex-col gap-[10px] font-sans text-[clamp(1rem,1.831vw,1.977rem)] leading-[1.3] text-white/90">
          {events.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}