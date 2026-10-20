import { Metadata } from "next";
import ExecGroupSection from "../components/execs_page/ExecGroupSection";
import ExecsHero from "../components/execs_page/ExecsHero";
import OurTeamBanner from "../components/execs_page/OurTeamBanner";
import WebsiteCredits from "../components/execs_page/WebsiteCredits";
import {
  EXEC_SECTIONS,
  getExecProfiles,
  type GroupedExecs,
} from "../components/execs_page/execProfiles";

export const metadata: Metadata = {
  title: "Executive Team",
  description: "Meet the executive team behind the UBC Esports Association.",
};

export default async function Execs() {
  let groupedExecs: GroupedExecs = {};
  let loadFailed = false;

  try {
    groupedExecs = await getExecProfiles();
  } catch (error) {
    console.error("Failed to load exec profiles", error);
    loadFailed = true;
  }

  const hasExecs = Object.values(groupedExecs).some((execs) => execs && execs.length > 0);

  return (
    <main>
      <ExecsHero />

      <div className="w-full bg-bg-dark-blue">
        <OurTeamBanner />

        {loadFailed || !hasExecs ? (
          <p className="mx-auto max-w-2xl px-5 py-16 text-center font-sans text-lg text-white/80">
            {loadFailed
              ? "We couldn't load the executive team right now. Please check back soon."
              : "Our executive team for this year will be announced soon."}
          </p>
        ) : (
          EXEC_SECTIONS.map(({ label, groups }) => (
            <ExecGroupSection
              key={label}
              label={label}
              panels={groups.map((group) => groupedExecs[group] ?? [])}
            />
          ))
        )}

        <WebsiteCredits />
      </div>
    </main>
  );
}
