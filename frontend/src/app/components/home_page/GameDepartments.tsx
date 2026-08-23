import Link from "next/link";
import GameDepartmentCard from "./GameDepartmentCard";

const depts = [
  {
    title: "Counter Strike 2",
    href: "/departments/cs2",
    imageSrc: "/departments/cs2.jpg",
  },
  {
    title: "Fighting Games",
    href: "/departments/fgc",
    imageSrc: "/departments/fgc.avif",
  },
  {
    title: "League of Legends",
    href: "/departments/lol",
    imageSrc: "/departments/lol.png",
  },
  {
    title: "Marvel Rivals",
    href: "/departments/rivals",
    imageSrc: "/departments/rivals.png",
  },
  {
    title: "Overwatch",
    href: "/departments/ow",
    imageSrc: "/departments/ow.webp",
  },
  {
    title: "Rainbow Six Siege",
    href: "/departments/r6",
    imageSrc: "/departments/r6.jpg",
  },
  {
    title: "Rhythm Games",
    href: "/departments/rhythm",
    imageSrc: "/departments/rhythm.jpg",
  },
  {
    title: "Rocket League",
    href: "/departments/rl",
    imageSrc: "/departments/rl.jpg",
  },
  {
    title: "Smash Ultimate",
    href: "/departments/smashultimate",
    imageSrc: "/departments/smashultimate.avif",
  },
  {
    title: "Smash Melee",
    href: "/departments/smashmelee",
    imageSrc: "/departments/smashmelee.jpg",
  },
  {
    title: "Splatoon",
    href: "/departments/splatoon",
    imageSrc: "/departments/splatoon.avif",
  },
  {
    title: "Teamfight Tactics",
    href: "/departments/tft",
    imageSrc: "/departments/tft.jpg",
  },
  {
    title: "Tetris",
    href: "/departments/tetris",
    imageSrc: "/departments/tetris.jpg",
  },
  {
    title: "Valorant",
    href: "/departments/val",
    imageSrc: "/departments/val.jpg",
  },
] as const;

const GameDepartments = () => {
  return (
    <section
      id="game-departments"
      className="relative min-h-svh w-full overflow-hidden"
    >
      {/* Background Base */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,var(--accent-blue)_0%,var(--header-light-blue)_50%,var(--accent-blue)_100%)]"
      />

      {/* Diagonal band */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-bg-dark-blue [clip-path:polygon(82%_0,100%_0,18%_100%,0_100%)]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 pb-10 sm:px-10 lg:px-10">
        {/* Title */}
        <div className="grid w-fit pb-4 mb-5">
          <span
            className="
              font-hollow
              col-start-1 row-start-1
              -translate-y-5
              whitespace-nowrap
              text-6xl uppercase leading-none
              text-white
            "
          >
            Game Departments
          </span>

          <h2
            id="game-departments-heading"
            className="
              font-header
              relative z-10
              col-start-1 row-start-1
              whitespace-nowrap
              text-6xl uppercase leading-none
              text-bg-dark-blue
            "
          >
            Game Departments
          </h2>

          <span
            className="
              font-hollow
              col-start-1 row-start-1
              translate-y-5
              whitespace-nowrap
              text-6xl uppercase leading-none
              text-bg-gray
            "
          >
            Game Departments
          </span>
        </div>

        {/* Dept cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {depts.map((item) => (
            <GameDepartmentCard
              key={item.href}
              title={item.title}
              href={item.href}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>

        <h3 className="mt-10 font-sans lg:text-2xl text-lg font-semibold text-gray-100 [text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]">
          Don’t see your game on the list? Apply to be a{" "}
          <Link href="/" className="font-bold underline text-white">
            community lead
          </Link>{" "}
          and host events for your game! Hiring rounds are in the fall, winter,
          and summer.
        </h3>
      </div>
    </section>
  );
};

export default GameDepartments;
