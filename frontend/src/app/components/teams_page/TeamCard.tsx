import Image from "next/image";
import { UserRound } from "lucide-react";
import type { CompPlayer, CompTeam } from "./compTeams";

type TeamCardProps = {
  team: CompTeam;
};

const PlayerRow = ({ player }: { player: CompPlayer }) => {
  return (
    <li className="flex items-center gap-3 rounded-sm bg-[#d4d9ea] p-2 shadow-[0_2px_4px_rgb(14_19_54/25%)]">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xs bg-space-purple/80 text-white/70">
        <UserRound aria-hidden="true" className="size-7" strokeWidth={1.5} />
      </div>

      <div className="min-w-0">
        <p className="truncate font-game text-base font-bold text-bg-dark-blue">
          {player.ign ?? player.fullName}
        </p>
        {player.ign && <p className="truncate font-sans text-sm text-bg-gray">{player.fullName}</p>}
        {player.role && <p className="font-sans text-sm text-accent-blue">{player.role}</p>}
      </div>
    </li>
  );
};

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <article className="@container overflow-hidden rounded bg-linear-to-b from-bg-dark-blue to-accent-blue/90 shadow-[0_6px_10px_rgb(14_19_54/45%)]">
      {/* Game banner */}
      <div className="relative h-20 w-full sm:h-24">
        <Image
          src={team.imageSrc}
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, calc(100vw - 3rem)"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-bg-dark-blue/55" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h3 className="font-game text-2xl font-bold uppercase text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)] sm:text-3xl">
            {team.game}
          </h3>
          <p className="font-sans text-sm font-bold text-teal [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)] sm:text-base">
            {team.teamName}
            {team.division && ` · ${team.division}`}
          </p>
        </div>
      </div>

      <div className="px-4 pt-3 pb-6 sm:px-5">
        <h4 className="mb-3 text-center font-header text-2xl uppercase text-header-light-blue sm:text-3xl">
          Players
        </h4>

        <ul className="grid grid-cols-1 gap-2.5 @lg:auto-rows-fr @lg:grid-cols-2">
          {team.players.map((player) => (
            <PlayerRow key={`${player.fullName}-${player.role ?? ""}`} player={player} />
          ))}
        </ul>

        {team.achievements && team.achievements.length > 0 && (
          <div className="mt-5 text-center">
            <h4 className="mb-2 font-header text-2xl uppercase text-header-light-blue sm:text-3xl">
              Achievements
            </h4>
            <ul className="font-sans text-sm text-white sm:text-base">
              {team.achievements.map((achievement) => (
                <li key={`${achievement.term}-${achievement.event}`}>
                  <span className="font-bold">[{achievement.placement}]</span> {achievement.term}{" "}
                  <span className="font-bold">{achievement.event}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamCard;
