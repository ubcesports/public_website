import type { Metadata } from "next";
import LeagueAbout from "../../components/departments_page/LeagueAbout";
import LeagueDirectors from "../../components/departments_page/LeagueDirectors";
import LeagueEvents from "../../components/departments_page/LeagueEvents";
import LeagueHero from "../../components/departments_page/LeagueHero";
import LeagueStickerStrip from "../../components/departments_page/LeagueStickerStrip";
import LeagueTeams from "../../components/departments_page/LeagueTeams";

export const metadata: Metadata = {
  title: "League of Legends",
  description: "Meet the UBC Esports League of Legends community and teams.",
};

export default function LeagueOfLegendsPage() {
  return (
    <main className="w-full bg-bg-dark-blue text-white">
      <LeagueHero />
      <div className="w-full bg-linear-to-b from-bg-dark-blue from-15% to-bg-indigo">
        <LeagueAbout />
        <LeagueEvents />
        <LeagueStickerStrip />
        <LeagueTeams />
        <LeagueDirectors />
      </div>
    </main>
  );
}