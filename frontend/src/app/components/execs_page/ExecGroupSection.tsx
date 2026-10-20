import classNames from "classnames";
import ExecCard from "./ExecCard";
import type { ExecProfile } from "./execProfiles";
import SectionTitle from "./SectionTitle";

type ExecGroupSectionProps = {
  label: string;
  // One panel per display group, in render order
  panels: ExecProfile[][];
};

const ExecGroupSection = ({ label, panels }: ExecGroupSectionProps) => {
  const nonEmptyPanels = panels.filter((execs) => execs.length > 0);
  if (nonEmptyPanels.length === 0) return null;

  return (
    <section className="w-full pt-5">
      <SectionTitle>{label}</SectionTitle>

      <div className="flex flex-col gap-2">
        {nonEmptyPanels.map((execs, panelIndex) => (
          <div key={panelIndex} className="px-4 py-10 sm:px-8">
            <div
              className={classNames(
                "mx-auto grid gap-x-6 gap-y-10",
                // Small groups (e.g. the presidents) sit centred instead of hugging the left
                execs.length < 4
                  ? "max-w-3xl grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]"
                  : "max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
              )}
            >
              {execs.map((exec, index) => (
                <ExecCard key={`${exec.fullName}-${index}`} exec={exec} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecGroupSection;
