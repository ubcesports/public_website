import Image from "next/image";
import { EventInfo } from "../../events/eventData";
import ScrollDownButton from "../ScrollDownButton";

type EventHeroProps = {
  event: EventInfo;
};

const EventHero = ({ event }: EventHeroProps) => {
  const { logo, tagline, banner } = event.hero;

  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/splash.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Event colour wash */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-1 mix-blend-overlay ${event.theme.heroOverlay}`}
      />

      {/* Dark fade from the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-black/95 to-bg-dark-blue/0 to-70%"
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-5 pt-28 pb-24 text-center sm:gap-8">
        <h1 className="flex w-full flex-col items-center gap-3 drop-shadow-[0_9px_10px_black]">
          {logo.kind === "image" ? (
            <span className={`relative block ${logo.frameClassName}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="eager"
                className={logo.imageClassName}
              />
            </span>
          ) : (
            <span className="font-header text-4xl tracking-[0.18em] text-white uppercase sm:text-6xl lg:text-7xl">
              {logo.text}
            </span>
          )}

          {tagline && (
            <span className="font-mono text-sm tracking-[0.45em] text-white sm:text-lg lg:text-2xl">
              {tagline}
            </span>
          )}
        </h1>

        <p className="max-w-full rounded-sm bg-bg-gray px-3 py-1 font-mono text-lg font-bold tracking-[0.11em] text-white sm:px-6 md:text-2xl">
          {banner}
        </p>
      </div>

      <ScrollDownButton href="#about" label="learn more" />
    </section>
  );
};

export default EventHero;
