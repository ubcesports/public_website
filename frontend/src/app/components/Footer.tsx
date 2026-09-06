import Image from "next/image";
import {
  SiDiscord,
  SiInstagram,
  SiLinktree,
  SiTiktok,
  SiTwitch,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/ubcea",
    Icon: SiInstagram,
  },
  {
    label: "Discord",
    href: "https://discord.gg/ubcesports",
    Icon: SiDiscord,
  },
  {
    label: "X",
    href: "https://x.com/ubcesports",
    Icon: SiX,
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/ubcesports",
    Icon: SiTwitch,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/ubcesports",
    Icon: SiYoutube,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@ubcesports",
    Icon: SiTiktok,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/ubcesports",
    Icon: FaLinkedin,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/ubcesports",
    Icon: SiLinktree,
  },
] as const;

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gaming Lounge", href: "/lounge" },
  { label: "Our Events", href: "/events" },
  { label: "Executive Team", href: "/execs" },
  { label: "Competitive Teams", href: "/teams" },
] as const;

const Footer = () => {
  return (
    <footer className="bg-bg-gray flex lg:flex-row flex-col items-center justify-center w-full lg:h-60 h-180 max-lg:p-5">
      {/* Logo */}
      <Image
        src="/logo/logo_variant_3.png"
        alt="UBCEA logo"
        width={2001}
        height={2001}
        sizes="120px"
        className="size-60"
      />

      {/* Info section */}
      <div className="flex flex-col lg:mr-30 max-lg:items-center max-lg:justify-center">
        <h2
          className="
              mb-2
              bg-linear-to-r from-teal to-darker-light-blue
              bg-clip-text
              font-header lg:text-4xl text-3xl uppercase
              text-transparent text-center lg:text-left
            "
        >
          Connect with us
        </h2>

        <Link
          href="mailto:communications@ubcesports.ca"
          className="font-sans lg:text-2xl text-xl text-white underline mb-3"
        >
          communications@ubcesports.ca
        </Link>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="
                  text-teal
                  transition-[color,transform]
                  duration-200 ease-out
                  hover:scale-110 hover:text-white
                  focus-visible:scale-110 focus-visible:text-white
                  focus-visible:outline-2 focus-visible:outline-offset-4
                  focus-visible:outline-teal
                "
            >
              <Icon aria-hidden="true" className="lg:size-9 size-8" />
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col lg:mt-0 mt-10">
        <h3 className="font-sans text-teal mb-4 text-2xl font-bold">Navigation</h3>

        <ul className="flex flex-col gap-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-white text-xl hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
