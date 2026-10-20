import classNames from "classnames";

type SectionTitleProps = {
  children: React.ReactNode;
  // Smaller, fainter variant for closing sections like the credits
  subtle?: boolean;
};

// Title with a divider line that breaks around it
const SectionTitle = ({ children, subtle = false }: SectionTitleProps) => {
  const lineColor = subtle ? "to-header-light-blue/40" : "to-header-light-blue/70";

  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 text-center sm:gap-6 sm:px-8">
      <span
        aria-hidden="true"
        className={classNames("h-px flex-1 bg-linear-to-r from-transparent", lineColor)}
      />
      <h2
        className={classNames(
          "font-game font-bold tracking-widest uppercase",
          subtle ? "text-sm text-white/80 sm:text-lg" : "text-lg text-white sm:text-2xl",
        )}
      >
        {children}
      </h2>
      <span
        aria-hidden="true"
        className={classNames("h-px flex-1 bg-linear-to-l from-transparent", lineColor)}
      />
    </div>
  );
};

export default SectionTitle;
