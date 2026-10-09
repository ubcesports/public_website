import { EventInfo } from "../../events/eventData";
import GradientButton from "../GradientButton";

type EventAboutProps = {
  event: EventInfo;
};

const EventAbout = ({ event }: EventAboutProps) => {
  const { heading, location, date, body, button } = event.about;

  return (
    <section id="about" className="w-full scroll-mt-0 px-5 py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-1">
          <h2
            className={`mb-2 font-header text-2xl uppercase sm:text-3xl lg:text-4xl ${event.theme.accentText}`}
          >
            {heading}
          </h2>
          <p className="font-sans text-base font-bold text-white sm:text-lg">
            LOCATION: {location}
          </p>
          <p className="font-sans text-base font-bold text-white sm:text-lg">DATE: {date}</p>
        </div>

        <p className="font-sans text-base text-white sm:text-lg">{body}</p>

        {button && (
          <GradientButton
            href={button.href}
            gradient={event.theme.buttonGradient}
            textSize="text-base md:text-lg"
          >
            {button.label}
          </GradientButton>
        )}
      </div>
    </section>
  );
};

export default EventAbout;
