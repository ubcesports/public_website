import { UserRound } from "lucide-react";
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

type ExecCardProps = {
  exec: ExecProfile;
};

const ExecCard = ({ exec }: ExecCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-full bg-bg-gray sm:size-28">
        {exec.profileImage ? (
          // Profile images can come from any host the backend stores them on, so we use a
          // plain img instead of next/image to avoid pinning a fixed remotePatterns allowlist.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={exec.profileImage} alt="" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center text-white/60">
            <UserRound className="size-10" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <p className="mt-3 font-sans text-base font-bold text-white">{exec.fullName}</p>
      <p className="font-sans text-sm text-darker-light-blue">{exec.title}</p>

      {exec.socials.length > 0 && (
        <div className="mt-2 flex items-center gap-2.5">
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
                  text-white/70
                  transition-[color,transform] duration-200 ease-out
                  hover:scale-110 hover:text-teal
                  focus-visible:scale-110 focus-visible:text-teal
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal
                "
              >
                <Icon aria-hidden="true" className="size-4" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExecCard;
