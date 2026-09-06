import { Metadata } from "next";
import GameOnCampus from "../components/lounge_page/GameOnCampus";
import LoungeFAQ from "../components/lounge_page/LoungeFAQ";
import LoungeHero from "../components/lounge_page/LoungeHero";
import RulesAndEtiquette from "../components/lounge_page/RulesAndEtiquette";
import WeOffer from "../components/lounge_page/WeOffer";

export const metadata: Metadata = {
  title: "Gaming Lounge",
  description:
    "The UBCEA Gaming Lounge in the AMS Student Nest: 20 high spec PCs, rhythm game arcade cabs, hours, rules and FAQ.",
};

export default function Lounge() {
  return (
    <main>
      <LoungeHero />

      {/* Dark blue to indigo gradient behind the rest of the page */}
      <div className="w-full bg-linear-to-b from-bg-dark-blue from-15% to-bg-indigo">
        <GameOnCampus />
        <WeOffer />
        <RulesAndEtiquette />
        <LoungeFAQ />
      </div>
    </main>
  );
}
