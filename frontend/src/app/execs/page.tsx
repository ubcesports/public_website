import { Metadata } from "next";
import ExecGroupSection from "../components/execs_page/ExecGroupSection";
import ExecsHero from "../components/execs_page/ExecsHero";
import OurTeamBanner from "../components/execs_page/OurTeamBanner";
import {
  EXEC_GROUP_LABELS,
  EXEC_GROUP_ORDER,
  getExecProfiles,
  groupExecsByDisplayGroup,
} from "../components/execs_page/execProfiles";

export const metadata: Metadata = {
  title: "Executive Team",
  description: "Meet the executive team behind the UBC Esports Association.",
};

export default async function Execs() {
  let groupedExecs: ReturnType<typeof groupExecsByDisplayGroup> = {};
  let loadFailed = false;

  try {
    const execs = await getExecProfiles();
    groupedExecs = groupExecsByDisplayGroup(execs);
  } catch (error) {
    console.error("Failed to load exec profiles", error);
    loadFailed = true;
  }

  return (
    <main>
      <ExecsHero />

      {/* Dark blue to indigo gradient behind the rest of the page */}
      <div className="w-full bg-linear-to-b from-bg-dark-blue from-15% to-bg-indigo pb-16">
        <OurTeamBanner />

        {loadFailed ? (
          <p className="mx-auto max-w-2xl px-5 py-16 text-center font-sans text-lg text-white/80">
            We couldn&apos;t load the executive team right now. Please check back soon.
          </p>
        ) : (
          EXEC_GROUP_ORDER.map((group) => (
            <ExecGroupSection
              key={group}
              label={EXEC_GROUP_LABELS[group]}
              execs={groupedExecs[group] ?? []}
            />
          ))
        )}
      </div>
    </main>
  );
}
