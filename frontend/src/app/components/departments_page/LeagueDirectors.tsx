import Image from "next/image";
import { SiDiscord, SiInstagram, SiTwitch } from "react-icons/si";

const directors = [
  { name: "Derek Lin", role: "Co-President" },
  { name: "karan president", role: "Co-President" },
] as const;

const directorSocials = [
  { label: "Discord", href: "https://discord.gg/ubcesports", Icon: SiDiscord },
  { label: "Instagram", href: "https://instagram.com/ubcea", Icon: SiInstagram },
  { label: "Twitch", href: "https://twitch.tv/ubcesports", Icon: SiTwitch },
] as const;

export default function LeagueDirectors() {
  return (
    <section id="directors" className="w-full pb-10 sm:pb-14">
      <h2 className="flex min-h-24 w-full items-center justify-center bg-bg-dark-blue px-5 py-6 text-center font-game text-[clamp(1.75rem,2.778vw,3rem)] leading-none font-bold uppercase text-white lg:h-[134px] lg:px-[50px] lg:py-[37px]">
        Directors
      </h2>
      <div className="w-full overflow-hidden rounded-[8px] bg-linear-to-r from-space-teal to-space-purple px-4 py-8 shadow-[0_7px_7.6px_0_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-1 gap-4 bg-white/77 p-4 sm:grid-cols-2 lg:h-[490px]">
          {directors.map((director) => (
            <article
              key={director.name}
              className="flex min-w-0 min-h-[210px] w-full flex-col items-center justify-center gap-[10px] p-[10px] text-center text-bg-gray lg:h-full"
            >
              <div
                aria-hidden="true"
                 className="relative aspect-square w-[300px] max-w-full shrink-0 overflow-hidden"
              >
                  <Image
                    src="/department_pages/ubceaBANG.png"
                    alt=""
                    fill
                    sizes="300px"
                    className="-translate-x-[10.7%] object-contain"
                  />
              </div>
              <h3 className="mx-auto w-fit max-w-full font-game text-[clamp(1.25rem,1.852vw,2rem)] leading-[1] font-bold text-bg-gray">
                {director.name}
              </h3>
              <p className="font-sans text-[clamp(1rem,1.389vw,1.5rem)] leading-[1] text-accent-blue">
                {director.role}
              </p>
              <div className="flex items-center justify-center gap-[10px]">
                {directorSocials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`${director.name} on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-full bg-bg-dark-blue text-white transition-colors hover:bg-accent-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}