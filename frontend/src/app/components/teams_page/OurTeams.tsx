import TeamCard from "./TeamCard";
import { COMP_TEAMS } from "./compTeams";

const titleClasses = `
  col-start-1 row-start-1
  text-center text-[clamp(1.375rem,7.5vw,2.25rem)] uppercase
  leading-[1.65] md:whitespace-nowrap md:text-[clamp(2.25rem,5vw,3.75rem)] md:leading-none
`;

const OurTeams = () => {
  return (
    <section id="our-teams" className="w-full bg-linear-to-b from-darker-light-blue to-bg-indigo">
      <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-16 sm:px-8">
        {/* Title */}
        <div className="mb-8 grid w-full place-items-center pb-6 md:pb-4">
          <span
            aria-hidden="true"
            className={`font-hollow translate-y-[-0.3em] text-white md:-translate-y-5 ${titleClasses}`}
          >
            Our Teams
          </span>

          <h2 className={`relative z-10 font-header text-bg-dark-blue ${titleClasses}`}>
            Our Teams
          </h2>

          <span
            aria-hidden="true"
            className={`font-hollow translate-y-[0.3em] text-bg-gray md:translate-y-5 ${titleClasses}`}
          >
            Our Teams
          </span>
        </div>

        {/* Team cards. From 1120px each card is ≥32rem wide, which is when TeamCard
            splits players into 2 columns (@lg); only then do cards stretch to match their row. */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 min-[1120px]:items-stretch">
          {COMP_TEAMS.map((team) => (
            <TeamCard key={`${team.game}-${team.teamName}`} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
