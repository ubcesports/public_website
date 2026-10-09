import Image from "next/image";
import { EventImage, EventInfo } from "../../events/eventData";
import GradientButton from "../GradientButton";
import Disclosure from "../lounge_page/Disclosure";
import EventAbout from "./EventAbout";
import EventCardGrid from "./EventCardGrid";
import EventGallery from "./EventGallery";
import EventHero from "./EventHero";
import EventSection from "./EventSection";
import EventSponsors from "./EventSponsors";
import ExploreEvents from "./ExploreEvents";

const bodyClasses = "font-sans text-base text-white sm:text-lg";

const MapImage = ({ image }: { image: EventImage }) => (
  <Image
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    sizes="(min-width: 1152px) 1152px, 100vw"
    className="h-auto w-full"
  />
);

type EventPageProps = {
  event: EventInfo;
};

const EventPage = ({ event }: EventPageProps) => {
  const { accentText } = event.theme;

  return (
    <main>
      <EventHero event={event} />

      {/* Dark blue to event colour gradient behind the rest of the page */}
      <div className={`w-full pb-12 ${event.theme.pageGradient}`}>
        <EventAbout event={event} />

        {event.venueMap && (
          <EventSection id="venue-map" heading="Venue map" accentText={accentText} centered wide>
            <MapImage image={event.venueMap} />
          </EventSection>
        )}

        <EventSection
          id={event.cards.heading.toLowerCase()}
          heading={event.cards.heading}
          accentText={accentText}
          centered
          wide
        >
          <EventCardGrid cards={event.cards.items} />
        </EventSection>

        {event.exhibitorHall && (
          <EventSection
            id="exhibitor-hall"
            heading="Exhibitor hall"
            accentText={accentText}
            centered
            wide
          >
            <MapImage image={event.exhibitorHall.map} />
            <GradientButton
              href={event.exhibitorHall.button.href}
              gradient={event.theme.buttonGradient}
              textSize="text-base md:text-lg"
            >
              {event.exhibitorHall.button.label}
            </GradientButton>
          </EventSection>
        )}

        {event.gallery.length > 0 && (
          <EventSection id="gallery" heading="Gallery" accentText={accentText} centered wide>
            <EventGallery images={event.gallery} />
          </EventSection>
        )}

        <EventSection id="sponsors" heading="Sponsors" accentText={accentText} centered>
          <p className={bodyClasses}>{event.sponsors.message}</p>
          {event.sponsors.items.length > 0 && (
            <EventSponsors
              sponsors={event.sponsors.items}
              accentText={accentText}
              cardHover={event.theme.cardHover}
            />
          )}
        </EventSection>

        <EventSection id="faq" heading="FAQ" accentText={accentText}>
          <div className="flex flex-col gap-5">
            {event.faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                summary={faq.question}
                iconClasses={accentText}
                defaultOpen={false}
              >
                <p className="font-sans text-base leading-relaxed text-white/75 sm:text-lg">
                  {faq.answer}
                </p>
              </Disclosure>
            ))}
          </div>
        </EventSection>
      </div>

      <ExploreEvents currentSlug={event.slug} />
    </main>
  );
};

export default EventPage;
