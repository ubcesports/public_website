import { Metadata } from "next";
import AboutUs from "./components/home_page/AboutUs";
import GameDepartments from "./components/home_page/GameDepartments";
import GamingLounge from "./components/home_page/GamingLounge";
import SplashPage from "./components/home_page/SplashPage";

export const metadata: Metadata = {
  title: {
    absolute: "UBC Esports",
  },
};

export default function Home() {
  return (
    <main>
      <SplashPage />
      <AboutUs />
      <GamingLounge />
      <GameDepartments />
    </main>
  );
}
