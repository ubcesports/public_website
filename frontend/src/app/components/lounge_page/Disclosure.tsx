import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type DisclosureProps = {
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  summaryClasses?: string;
};

const Disclosure = ({
  summary,
  children,
  defaultOpen = true,
  className = "font-sans text-base font-bold text-white sm:text-lg",
}: DisclosureProps) => {
  return (
    <details open={defaultOpen} className="group">
      <summary
        className="
          flex cursor-pointer list-none items-center gap-2
          rounded-sm
          transition-colors duration-200
          hover:text-teal
          focus-visible:outline-2 focus-visible:outline-offset-4
          focus-visible:outline-teal
          [&::-webkit-details-marker]:hidden
        "
      >
        <ChevronRight
          aria-hidden="true"
          className="size-4 shrink-0 text-teal transition-transform duration-200 group-open:rotate-90 sm:size-5"
          strokeWidth={3}
        />
        <span className={summaryClasses}>{summary}</span>
      </summary>

      <div className="mt-2 pl-6 sm:pl-7">{children}</div>
    </details>
  );
};

export default Disclosure;
