import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Sponsor } from "../../events/eventData";

type EventSponsorsProps = {
  sponsors: Sponsor[];
  accentText: string;
};

const EventSponsors = ({ sponsors, accentText }: EventSponsorsProps) => {
  return (
    <ul className="flex w-full flex-wrap justify-center gap-6">
      {sponsors.map((sponsor) => (
        <li key={sponsor.name} className="w-full max-w-sm">
          <a
            href={sponsor.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex h-full flex-col items-center gap-5
              rounded-xl border border-white/10
              bg-bg-dark-blue/60 px-8 py-8 text-center
              shadow-[0_7px_8px_rgb(0_0_0/45%)]
              transition-[translate,border-color,box-shadow] duration-300 ease-out
              hover:-translate-y-1 hover:border-white/30
              hover:shadow-[0_0_24px_var(--header-light-blue)]
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal
              motion-reduce:transition-none motion-reduce:hover:translate-y-0
            "
          >
            <Image
              src={sponsor.logo.src}
              alt={sponsor.logo.alt}
              width={sponsor.logo.width}
              height={sponsor.logo.height}
              className="h-14 w-auto sm:h-16"
            />

            <p className="font-sans text-base text-white/75">{sponsor.description}</p>

            <span
              className={`mt-auto inline-flex items-center gap-1 font-mono text-sm font-bold tracking-wider uppercase ${accentText}`}
            >
              Visit {sponsor.name}
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={3}
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default EventSponsors;
