import Image from "next/image";
import Link from "next/link";
import { EventCard } from "../../events/eventData";

const cardClasses =
  "flex h-full flex-col overflow-hidden rounded-[5px] shadow-[0_7px_8px_rgb(0_0_0/60%)]";

const linkClasses = `
  ${cardClasses}
  transition-[scale,box-shadow] duration-400 ease-out
  hover:scale-[1.03] hover:shadow-[0_10px_20px_rgb(0_0_0/60%)]
  focus-visible:scale-[1.03]
  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal
  motion-reduce:transition-none motion-reduce:hover:scale-100
`;

const CardContent = ({ card }: { card: EventCard }) => (
  <>
    <div className="relative flex h-24 items-center justify-center px-6 lg:h-29">
      <Image
        src={card.imageSrc}
        alt=""
        fill
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-bg-dark-blue/50" />
      <h3 className="relative text-center font-game text-xl font-bold text-white uppercase [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)] lg:text-2xl">
        {card.title}
      </h3>
    </div>

    {card.subtitle && (
      <p className="flex h-16 items-center justify-center bg-attraction-gray px-6 text-center font-sans text-base text-white sm:text-lg lg:h-20">
        {card.subtitle}
      </p>
    )}
  </>
);

type EventCardGridProps = {
  cards: EventCard[];
};

const EventCardGrid = ({ cards }: EventCardGridProps) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
      {cards.map((card) => (
        <li key={card.title}>
          {card.href ? (
            <Link href={card.href} className={linkClasses}>
              <CardContent card={card} />
            </Link>
          ) : (
            <div className={cardClasses}>
              <CardContent card={card} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EventCardGrid;
