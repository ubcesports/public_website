import Image from "next/image";
import { EventCard } from "../../events/eventData";

type EventCardGridProps = {
  cards: EventCard[];
};

const EventCardGrid = ({ cards }: EventCardGridProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
      {cards.map((card, index) => (
        <li
          key={`${card.title}-${index}`}
          className="flex flex-col overflow-hidden rounded-[5px] shadow-[0_7px_8px_rgb(0_0_0/60%)]"
        >
          <div className="relative flex h-24 items-center justify-center px-6 lg:h-29">
            <Image
              src={card.imageSrc}
              alt=""
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-[50%_29%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-bg-dark-blue/50" />
            <h3 className="relative text-center font-game text-xl font-bold text-white uppercase lg:text-2xl">
              {card.title}
            </h3>
          </div>

          <p className="flex h-16 items-center justify-center bg-attraction-gray px-6 text-center font-sans text-base text-white sm:text-lg lg:h-20">
            {card.subtitle}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default EventCardGrid;
