import { ChevronDown } from "lucide-react";

type ScrollDownButtonProps = {
  href: `#${string}`;
  label?: string;
  ariaLabel?: string;
};

export default function ScrollDownButton({
  href,
  label = "explore",
}: ScrollDownButtonProps) {
  return (
    <a
      href={href}
      className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 rounded-md px-2 py-1 text-white/80 transition-[color,transform] duration-200 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal active:translate-y-0.5 sm:bottom-7"
    >
      <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
        {label}
      </span>
      <span className="grid size-9 place-items-center">
        <ChevronDown
          aria-hidden="true"
          className="size-5 motion-safe:animate-bounce"
          strokeWidth={2.5}
        />
      </span>
    </a>
  );
}
