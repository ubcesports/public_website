import Link from "next/link";
import { EVENTS } from "../../events/eventData";

const heading = "Explore our events";

type ExploreEventsProps = {
  currentSlug: string;
};

const ExploreEvents = ({ currentSlug }: ExploreEventsProps) => {
  return (
    <section id="explore-events" className="w-full scroll-mt-24">
      {/* Title band with layered hollow/solid heading */}
      <div className="w-full overflow-hidden bg-linear-to-r from-teal to-darker-light-blue px-5 py-10 sm:px-14 sm:py-16">
        <div className="grid text-3xl uppercase sm:text-4xl lg:text-5xl">
          <span aria-hidden="true" className="col-start-1 row-start-1 font-hollow text-accent-blue">
            {heading}
          </span>
          <span
            aria-hidden="true"
            className="col-start-1 row-start-1 mt-[1.05em] font-hollow text-bg-gray/60"
          >
            {heading}
          </span>
          <h2 className="col-start-1 row-start-1 mt-[0.58em] font-header text-bg-dark-blue">
            {heading}
          </h2>
        </div>
      </div>

      {/* Links to each event */}
      <nav
        aria-label="Events"
        className="flex w-full items-center justify-center bg-linear-to-b from-bg-dark-blue to-space-purple px-5 py-16 sm:py-24 lg:min-h-86"
      >
        <ul className="flex flex-wrap items-center justify-center gap-5 lg:gap-10">
          {EVENTS.map((event) => (
            <li key={event.slug}>
              <Link
                href={`/events/${event.slug}`}
                aria-current={event.slug === currentSlug ? "page" : undefined}
                className={`
                  block rounded-[5px] px-6 py-4 lg:px-10 lg:py-5
                  font-title text-lg leading-none text-bg-dark-blue uppercase
                  sm:text-2xl lg:text-3xl
                  ${event.theme.buttonGradient}
                  shadow-[0_0_21px_var(--header-light-blue)]
                  transition-transform duration-300 ease-out
                  hover:scale-[1.05]
                  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal
                  motion-reduce:transition-none motion-reduce:hover:scale-100
                `}
              >
                {event.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default ExploreEvents;
