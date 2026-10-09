import { Metadata } from "next";
import CompetitiveGaming from "../components/teams_page/CompetitiveGaming";
import OurTeams from "../components/teams_page/OurTeams";
import TeamsHero from "../components/teams_page/TeamsHero";

export const metadata: Metadata = {
  title: "Competitive Teams",
  description:
    "Meet the UBCEA competitive teams representing UBC in collegiate leagues across League of Legends, Valorant, Marvel Rivals, Overwatch, CS2, Rocket League and Rainbow Six Siege.",
};

export default function Teams() {
  return (
    <main>
      <TeamsHero />
      <CompetitiveGaming />
      <OurTeams />
    </main>
  );
}
