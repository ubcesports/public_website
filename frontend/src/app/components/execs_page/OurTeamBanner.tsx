const TITLE = "Our Team 26/27";

const OurTeamBanner = () => {
  return (
    <div
      id="our-team"
      className="w-full scroll-mt-0 bg-linear-to-r from-teal to-darker-light-blue py-8 text-center"
    >
      <h2 className="relative inline-block font-header text-3xl uppercase text-bg-dark-blue sm:text-5xl lg:text-6xl">
        {/* Hollow echo peeking out above the solid title */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-y-[0.35em] font-hollow text-bg-dark-blue/70"
        >
          {TITLE}
        </span>
        <span className="relative">{TITLE}</span>
      </h2>
    </div>
  );
};

export default OurTeamBanner;
