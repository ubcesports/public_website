import GradientButton from "../GradientButton";

const GameOnCampus = () => {
  return (
    <section
      id="game-on-campus"
      className="w-full scroll-mt-24 px-5 py-12 sm:py-14"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <h2 className="mb-3 font-header text-2xl uppercase text-header-light-blue sm:text-3xl lg:text-4xl">
          Game on campus
        </h2>

        <p className="font-sans text-base text-white sm:text-lg">
          <span className="font-bold">LOCATION:</span> AMS Student Nest (6133
          University Blvd), Room 2132
        </p>
        <p className="font-sans text-base text-white sm:text-lg">
          <span className="font-bold">HOURS:</span> 12 - 5pm on school days
        </p>
        <p className="mt-1 font-sans text-sm text-white/80 sm:text-base">
          (see our Discord for updates regarding the Gaming Lounge&rsquo;s
          hours)
        </p>

        <p className="mt-7 font-sans text-base text-white sm:text-lg">
          Come play games in the lounge, open to{" "}
          <span className="font-bold">all members with lounge access</span>!
        </p>
        <p className="font-sans text-base text-white sm:text-lg">
          <span className="font-bold">
            Not sure if you want to go all in?
          </span>{" "}
          Purchase a <span className="font-bold">$5 day pass</span> to try
          playing in the lounge for a day!
        </p>

        <div className="mt-6">
          <GradientButton
            href="https://app.ubcesports.ca/login"
            textSize="md:text-lg text-md"
          >
            get lounge access
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default GameOnCampus;
