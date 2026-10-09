import type { IconType } from "react-icons";
import { SiInstagram, SiTiktok, SiTwitch, SiX, SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import type { ExecProfile, ExecSocialPlatform } from "./execProfiles";

const SOCIAL_ICONS: Record<ExecSocialPlatform, IconType> = {
  instagram: SiInstagram,
  x: SiX,
  twitch: SiTwitch,
  youtube: SiYoutube,
  tiktok: SiTiktok,
  linkedin: FaLinkedin,
};

const SOCIAL_LABELS: Record<ExecSocialPlatform, string> = {
  instagram: "Instagram",
  x: "X",
  twitch: "Twitch",
  youtube: "YouTube",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
};

const getInitials = (fullName: string) =>
  fullName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

type ExecCardProps = {
  exec: ExecProfile;
};

const ExecCard = ({ exec }: ExecCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative size-28 shrink-0 overflow-hidden rounded-full sm:size-32">
        {exec.avatarUrl ? (
          // Avatars can come from any host the backend stores them on, so we use a
          // plain img instead of next/image to avoid pinning a fixed remotePatterns allowlist.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={exec.avatarUrl} alt="" className="size-full object-cover" />
        ) : (
          <div
            aria-hidden="true"
            className="
              flex size-full items-center justify-center
              bg-linear-to-br from-space-teal to-space-purple
              font-game text-3xl font-bold text-white sm:text-4xl
            "
          >
            {getInitials(exec.fullName)}
          </div>
        )}
      </div>

      <p className="mt-3 font-game text-sm font-bold tracking-wider text-white sm:text-base">
        {exec.fullName}
      </p>
      <p className="font-sans text-xs text-header-light-blue sm:text-sm">{exec.title}</p>

      {exec.socials.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
          {exec.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${exec.fullName} on ${SOCIAL_LABELS[social.platform]}`}
                className="
                  flex size-7 items-center justify-center rounded-full
                  bg-white/10 text-white
                  transition-[background-color,transform] duration-200 ease-out
                  hover:scale-110 hover:bg-accent-blue
                  focus-visible:scale-110 focus-visible:bg-accent-blue
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue
                "
              >
                <Icon aria-hidden="true" className="size-3.5" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExecCard;
