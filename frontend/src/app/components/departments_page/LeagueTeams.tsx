import Image from "next/image";

const roles = ["Top", "Jungle", "Mid", "Bot", "Support"] as const;

const teams = [
  { name: "Tournament Team Name", tier: "Tier 1: A Team" },
  { name: "Tournament Team Name", tier: "Tier 2: B Team" },
] as const;

function PlayerCard({ role }: { role: (typeof roles)[number] }) {
  return (
    <article className="flex min-w-0 flex-col items-center gap-[10px] rounded-[13px] bg-bg-dark-blue px-3 py-4 text-center sm:px-4 sm:py-5 lg:h-[563px] lg:px-4 lg:py-7">
      <div
        aria-hidden="true"
        className="relative flex aspect-[169/250] w-full shrink-0 items-center justify-center overflow-hidden bg-bg-dark-blue"
      >
        <Image
          src="/department_pages/ubceaBANG.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 267px, 42vw"
          className="object-cover object-[83%_50%]"
        />
      </div>
      <div className="flex w-full min-w-0 flex-col items-center">
        <p className="w-fit max-w-full truncate bg-linear-to-r from-teal to-darker-light-blue bg-clip-text font-game text-[clamp(1.25rem,1.852vw,2rem)] leading-[1.25] font-bold text-transparent">
          Handle
        </p>
        <p className="w-full truncate font-sans text-[clamp(0.875rem,1.157vw,1.25rem)] leading-[1.3] text-white">
          Player name
        </p>
        <p className="font-sans text-[clamp(1rem,1.389vw,1.5rem)] leading-[1.29] text-accent-blue">
          {role}
        </p>
      </div>
    </article>
  );
}

export default function LeagueTeams() {
  return (
    <section id="competitive-teams" className="w-full">
      <div className="overflow-hidden bg-linear-to-r from-teal to-darker-light-blue px-5 py-10 sm:px-8 sm:py-12 lg:h-[283px] lg:px-14 lg:py-[71px]">
        <h2
          className="relative grid h-[74px] w-[918px] max-w-full font-hollow text-[clamp(1.75rem,3.704vw,4rem)] uppercase leading-[1]"
          style={{ letterSpacing: "0px" }}
        >
          <span
            aria-hidden="true"
            className="col-start-1 row-start-1 translate-y-6 font-hollow text-bg-gray opacity-[0.59] sm:translate-y-12 lg:translate-y-[67px]"
          >
            Competitive Play
          </span>
          <span
            aria-hidden="true"
            className="col-start-1 row-start-1 translate-y-[7px] text-transparent [-webkit-text-stroke:1px_var(--accent-blue)]"
          >
            Competitive Play
          </span>
          <span className="col-start-1 row-start-1 translate-y-3 font-header text-bg-dark-blue sm:translate-y-6 lg:translate-y-[37px]">
            Competitive Play
          </span>
        </h2>
      </div>

      <div className="flex flex-col gap-8 px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:px-6">
        {teams.map((team) => (
          <section
            key={team.tier}
            aria-label={`${team.tier} roster`}
            className="w-full max-w-[1664px] self-center"
          >
            <div className="mb-5 min-h-[109px] w-full max-w-[1664px] bg-linear-to-r from-teal to-darker-light-blue bg-clip-text text-transparent">
              <h3 className="font-russo text-[clamp(2rem,3.704vw,4rem)] font-normal uppercase leading-[1]">
                {team.name}
                <span className="block font-sans text-[clamp(1rem,1.831vw,1.977rem)] font-bold leading-[1] text-[#95b3ff]">
                  {team.tier}{" "}
                  <span className="normal-case font-normal">(any additional info)</span>
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-[38px]">
              {roles.map((role) => (
                <PlayerCard key={`${team.tier}-${role}`} role={role} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}