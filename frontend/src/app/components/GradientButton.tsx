import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type GradientButtonProps = {
  href: LinkProps["href"];
  children: ReactNode;
  textSize?: string;
};

const GradientButton = ({
  href,
  children,
  textSize = "text-base",
}: GradientButtonProps) => {
  return (
    <Link
      href={href}
      className={`
        inline-block
        rounded-xl
        px-4 py-1.5
        ${textSize} font-bold text-bg-dark-blue
        bg-linear-to-r from-teal to-darker-light-blue
        shadow-[0_0_18px_var(--header-light-blue)]
        transition-[color,transform,filter] duration-300 ease-out
        hover:scale-[1.05] hover:text-white hover:from-space-teal hover:to-space-purple
      `}
    >
      {children}
    </Link>
  );
};

export default GradientButton;
