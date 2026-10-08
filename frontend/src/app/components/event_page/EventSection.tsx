import { ReactNode } from "react";

type EventSectionProps = {
  id: string;
  heading: string;
  accentText: string;
  centered?: boolean;
  // Cards and maps get more room than text sections
  wide?: boolean;
  children: ReactNode;
};

const EventSection = ({
  id,
  heading,
  accentText,
  centered = false,
  wide = false,
  children,
}: EventSectionProps) => {
  return (
    <section id={id} className="w-full scroll-mt-24 px-5 py-8 sm:py-10">
      <div
        className={`mx-auto flex w-full flex-col gap-6 ${wide ? "max-w-6xl" : "max-w-4xl"} ${centered ? "items-center text-center" : ""}`}
      >
        <h2 className={`font-header text-3xl uppercase sm:text-4xl lg:text-5xl ${accentText}`}>
          {heading}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default EventSection;
