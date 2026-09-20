import ExecCard from "./ExecCard";
import type { ExecProfile } from "./execProfiles";

type ExecGroupSectionProps = {
  label: string;
  execs: ExecProfile[];
};

const ExecGroupSection = ({ label, execs }: ExecGroupSectionProps) => {
  if (execs.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <div className="mb-6 bg-bg-dark-blue py-3 text-center">
        <h2 className="font-header text-xl uppercase tracking-wide text-white sm:text-2xl">
          {label}
        </h2>
      </div>

      <div className="rounded-lg border border-accent-blue/60 bg-white/5 p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {execs.map((exec, index) => (
            <ExecCard key={`${exec.fullName}-${index}`} exec={exec} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecGroupSection;
