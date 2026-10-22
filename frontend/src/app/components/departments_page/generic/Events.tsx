import Image from "next/image";

interface EventsProps {
  imageSrc: string;
  location: string;
  events: string[];
}

export default function Events({ imageSrc, location, events }: EventsProps) {
  return (
    <section
      id="events"
      className="relative isolate flex min-h-svh w-full overflow-hidden bg-bg-dark-blue text-white"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center transform-[scaleX(-1)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(14,19,54,0.78)_0%,rgba(14,19,54,0.72)_100%)] xl:bg-[linear-gradient(to_right,rgba(14,19,54,0.94)_0%,rgba(14,19,54,0.76)_46%,rgba(14,19,54,0)_100%)]"
      />

      <div className="flex w-full flex-col justify-center gap-[10px] px-6 py-24 text-left sm:px-10 xl:pr-[51.56%] xl:pl-[7%]">
        <h2 className="font-header text-[clamp(1.75rem,3.125vw,3.5rem)] uppercase text-header-light-blue">
          Events
        </h2>
        <p className="font-sans text-[clamp(1rem,1.831vw,1.977rem)] font-bold text-white">
          {location}
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
