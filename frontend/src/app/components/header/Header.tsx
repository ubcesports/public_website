"use client";

import Link from "next/link";
import HeaderLogo from "./HeaderLogo";
import GradientButton from "../GradientButton";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "lounge", href: "/lounge" },
  { label: "events", href: "/events" },
  { label: "execs", href: "/execs" },
  { label: "comp teams", href: "/teams" },
] as const;

const navLinkClasses =
  "rounded-sm text-xl transition-[color,filter] duration-200 " +
  "hover:text-teal hover:drop-shadow-[0_0_4px_var(--accent-blue)] " +
  "focus-visible:text-teal " +
  "focus-visible:drop-shadow-[0_0_4px_var(--accent-blue)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "focus-visible:outline-teal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateOpacity = () => {
      const hero = document.querySelector<HTMLElement>(
        "main > section:first-child",
      );
      const fadeDistance = (hero?.offsetHeight ?? window.innerHeight) * 0.25;
      const opacity = Math.max(0, 1 - window.scrollY / fadeDistance);

      setHeaderOpacity(opacity);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateOpacity);
      }
    };

    updateOpacity();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <header
      style={{
        opacity: isMenuOpen ? 1 : headerOpacity,
        pointerEvents: !isMenuOpen && headerOpacity < 0.05 ? "none" : "auto",
      }}
      className={`
        fixed top-0 left-0 z-50 w-full transition-opacity duration-75
        ${
          isMenuOpen
            ? "bg-bg-dark-blue"
            : "bg-[linear-gradient(to_bottom,var(--bg-dark-blue)_0%,var(--bg-dark-blue)_35%,color-mix(in_srgb,var(--bg-dark-blue)_95%,transparent)_50%,color-mix(in_srgb,var(--bg-dark-blue)_85%,transparent)_62%,color-mix(in_srgb,var(--bg-dark-blue)_70%,transparent)_72%,color-mix(in_srgb,var(--bg-dark-blue)_50%,transparent)_82%,color-mix(in_srgb,var(--bg-dark-blue)_30%,transparent)_90%,color-mix(in_srgb,var(--bg-dark-blue)_12%,transparent)_96%,transparent_100%)]"
        }
      `}
    >
      <div className="relative z-10 flex w-full items-center px-5 py-4">
        {/* Logo */}
        <HeaderLogo />

        {/* Desktop navigation */}
        <nav className="hidden lg:flex flex-row h-full ml-auto">
          <ul className="flex flex-row items-center justify-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLinkClasses}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <GradientButton href="https://app.ubcesports.ca/login">
                join us
              </GradientButton>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="
            ml-auto rounded-sm text-white
            transition-colors hover:text-teal
            focus-visible:outline-2 focus-visible:outline-offset-4
            focus-visible:outline-teal
            lg:hidden
          "
        >
          {isMenuOpen ? (
            <X className="size-8" strokeWidth={3} />
          ) : (
            <Menu className="size-8" strokeWidth={3} />
          )}
        </button>

        {isMenuOpen && (
          <nav
            className="
              absolute left-0 top-full
              flex min-h-[calc(100dvh-76px)] w-full
              flex-col items-center
              bg-bg-dark-blue
              lg:hidden
            "
          >
            <div className="h-1 w-full shrink-0 bg-bg-gray" />

            <ul className="flex flex-col items-center gap-4 pt-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${navLinkClasses} text-2xl`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="mt-3">
                <GradientButton href="https://app.ubcesports.ca/login">
                  join us
                </GradientButton>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
