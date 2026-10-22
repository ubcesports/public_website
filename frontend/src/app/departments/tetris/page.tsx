import type { Metadata } from 'next';
import Hero from '../../components/departments_page/generic/Hero';
import About from '../../components/departments_page/generic/About';
import Events from '../../components/departments_page/generic/Events';
import Teams from '../../components/departments_page/generic/Teams';
import Directors from '../../components/departments_page/generic/Directors';
// import StickerStrip from '../../components/departments_page/generic/StickerStrip';
import { gameData } from '../../../constants/gameData';

const game = gameData.tetris;

export const metadata: Metadata = {
  title: game.name,
  description: game.description,
};

export default function GamePage() {
  return (
    <main className='w-full bg-bg-dark-blue text-white'>
      <Hero title={game.name} imageSrc={game.heroImage} />
      <div className='w-full bg-linear-to-b from-bg-dark-blue from-15% to-bg-indigo'>
        <About imageSrc={game.aboutImage} description={game.aboutText} />
        <Events imageSrc={game.eventsImage} location={game.location} events={game.events} />
        {/* Photo gallery: re-enable once we have photos. */}
        {/* <StickerStrip images={game.stickerStripImages} /> */}
        <Teams playerCardImage={game.playerCardImage} />
        <Directors directors={game.directors} />
      </div>
    </main>
  );
}
