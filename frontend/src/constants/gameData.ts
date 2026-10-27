export interface Director {
  name: string;
  role: string;
  image: string;
}

export interface Team {
  name: string;
  tier: string;
}

export interface GamePageData {
  name: string;
  description: string;
  heroImage: string;
  aboutImage: string;
  eventsImage: string;
  location: string;
  aboutText: string;
  events: string[];
  directors: Director[];
  playerCardImage: string;
  stickerStripImages: string[];
}

export const gameData: Record<string, GamePageData> = {
  lol: {
    name: "League of Legends",
    description: "Meet the UBC Esports League of Legends community and teams.",
    heroImage: "/department_pages/lol_hero.jpg",
    aboutImage: "/department_pages/lol_about.jpg",
    eventsImage: "/department_pages/lol_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "We are the League of Legends department at UBC Esports. We host weekly in-houses open to everyone, regardless of rank or experience, along with for-fun tournaments, in-person events, and watch parties. Come meet the community and find your place on the Rift.",
    events: [
      "Static Fire Tournament - September 19-20",
      "Liftoff - October 9",
      "League of Legends Worlds Finals Watch Party - November 14",
      "Winter Series - TBD (around winter break)",
      "Cascadia Tournament - TBD",
      "Expo - TBD",
    ],
    directors: [
      { name: "Adrian Z.", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Tim", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  cs2: {
    name: "Counter Strike 2",
    description: "Meet the UBC Esports Counter Strike 2 community and teams.",
    heroImage: "/department_pages/cs2_hero.jpg",
    aboutImage: "/department_pages/cs2_about.jpg",
    eventsImage: "/department_pages/cs2_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "UBC Esports' Counter-Strike 2 department brings together casual and competitive CS2 players through regular inhouses, tournaments, LANs, and community events.",
    events: [
      "Icebreaker usually 1v1 setup",
      "Cascadia Cup",
      "Gaming Expo",
      "Major CS2 Tournament/LAN: TBD Term 2",
    ],
    directors: [{ name: "Andy", role: "Director", image: "/department_pages/ubceaBANG.png" }],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  fgc: {
    name: "Fighting Games",
    description: "Meet the UBC Esports Fighting Games community and teams.",
    heroImage: "/department_pages/fgc_hero.jpg",
    aboutImage: "/department_pages/fgc_about.jpg",
    eventsImage: "/department_pages/fgc_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "Our department is made of a group of people who love fighting games and want to hold frequent, engaging events for as many people as possible in the community to come and share their love for fighting games as well.",
    events: [
      "End of Heights (around end of Jan/beginning of Feb, collab tournament with SFU)",
      "Thunderbird Summit (around end of April, wrap-up big tournament for the year)",
    ],
    directors: [
      { name: "Jordan", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Jerry", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  rivals: {
    name: "Marvel Rivals",
    description: "Meet the UBC Esports Marvel Rivals community and teams.",
    heroImage: "/department_pages/rivals_hero.jpg",
    aboutImage: "/department_pages/rivals_about.jpg",
    eventsImage: "/department_pages/rivals_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "Marvel Rivals - hosting inhouses and other community events centered around Marvel Rivals.",
    events: [
      "Static Fire - Marvel Rivals Ignite Championship Watchparty (Sept 18th)",
      "Liftoff - Practice Range Challenge/Trivia (October 9th)",
      "Gaming Expo booth",
    ],
    directors: [
      { name: "Jenny", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "AG", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  r6: {
    name: "Rainbow Six Siege",
    description: "Meet the UBC Esports Rainbow Six Siege community and teams.",
    heroImage: "/department_pages/r6_hero.jpg",
    aboutImage: "/department_pages/r6_about.jpg",
    eventsImage: "/department_pages/r6_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "Welcome to UBC's R6 Community! We welcome both casual and competitive players to our community with intentions of introducing new players to the game, creating tournaments for everyone to play and representing competitive R6 with the R6 UBC Team.",
    events: ["Weekly Ranked nights on Tuesdays at 7 PM", "5v5 Tournament (coming soon)"],
    directors: [
      { name: "Rodrigo", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Simon", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  rg: {
    name: "Rhythm Games",
    description: "Meet the UBC Esports Rhythm Games community and teams.",
    heroImage: "/department_pages/rg_hero.jpg",
    aboutImage: "/department_pages/rg_about.jpg",
    eventsImage: "/department_pages/rg_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "A community that plays a variety of PC, mobile, and arcade rhythm games. We primarily host events for osu! and Chunithm, but all rhythm games are welcome such as Arcaea, Project Sekai, and maimai!",
    events: [
      "OperationZYA (bi-monthly)",
      "Chuniversity (end-of-year)",
      "3x osu! tournaments (winter, spring, summer)",
    ],
    directors: [
      { name: "Dylan L.", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Jacob", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  smashultimate: {
    name: "Smash Ultimate",
    description: "Meet the UBC Esports Smash Ultimate community and teams.",
    heroImage: "/department_pages/smashultimate_hero.jpg",
    aboutImage: "/department_pages/smashultimate_about.jpg",
    eventsImage: "/department_pages/smashultimate_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "UBCEA's Smash Ultimate department with events and open clubroom for players of all skill levels.",
    events: [
      "Weekly Double Elimination Brackets - Every Friday at 6:00 PM",
      "Location: The Lev Bukhman Theatre (top of the egg) on third floor of the AMS Nest",
      "Additional free to enter amateur/redemption bracket at ~7:45 PM",
    ],
    directors: [{ name: "Jack", role: "Director", image: "/department_pages/ubceaBANG.png" }],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  ssbm: {
    name: "Smash Melee",
    description: "Meet the UBC Esports Smash Melee community and teams.",
    heroImage: "/department_pages/ssbm_hero.jpg",
    aboutImage: "/department_pages/ssbm_about.jpg",
    eventsImage: "/department_pages/ssbm_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "Smash Melee is a community-driven game department focused on the 2001 game Super Smash Bros Melee for the Gamecube.",
    events: [
      "Weekly meetups every Thursday at 6 PM in AMS Room 3206",
      "2 regional tournaments each semester (September + November; January + March)",
    ],
    directors: [
      { name: "Aiden C.", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Arran", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  splatoon: {
    name: "Splatoon",
    description: "Meet the UBC Esports Splatoon community and teams.",
    heroImage: "/department_pages/splatoon_hero.jpg",
    aboutImage: "/department_pages/splatoon_about.jpg",
    eventsImage: "/department_pages/splatoon_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "We are a group that focuses on fostering the Vancouver Splatoon community through our various in-person LAN events!",
    events: ["VanCoral hosted once per semester", "Pop-ups at UBCEA events"],
    directors: [
      { name: "Ben T.", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Ely", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  tft: {
    name: "Teamfight Tactics",
    description: "Meet the UBC Esports Teamfight Tactics community and teams.",
    heroImage: "/department_pages/tft_hero.jpg",
    aboutImage: "/department_pages/tft_about.jpg",
    eventsImage: "/department_pages/tft_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "Our department looks to bring the TFT community together through exciting tournaments, LAN events, and community activities. From competitive online brackets to chill inhouses in the Lenovo Legion Gaming Lounge, we create memorable experiences for players of all skill levels.",
    events: [
      "Static Fire LAN - September 12-13",
      "Liftoff - October",
      "Cascadia - February-March",
      "Expo - TBD",
      "Weekly inhouses in the Lenovo Legion Gaming Lounge on Tuesdays 6-8 PM",
    ],
    directors: [
      { name: "Lucas", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Luke", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  tetris: {
    name: "Tetris",
    description: "Meet the UBC Esports Tetris community and teams.",
    heroImage: "/department_pages/tetris_hero.jpg",
    aboutImage: "/department_pages/tetris_about.jpg",
    eventsImage: "/department_pages/tetris_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "The UBCEA Tetris department hosts a variety of events from monthly in-person in-houses to online and offline tournaments. We also have two competitive teams that participate in the Collegiate Tetris League. Get the @tetris role in the UBCEA discord and message an @tetris exec to stay notified about upcoming events and recruitment!",
    events: [
      "Monthly in-person inhouses at the UBCEA gaming lounge",
      "Vote for in-house dates in @tetris-announcements at the start of each month",
      "UBCEA Tetris LAN - ~November",
      "Gaming EXPO showmatch qualifiers + finals - January to March",
      "Collegiate Tetris League - Late January to late March",
    ],
    directors: [
      { name: "Brandan", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Jeffrey X.", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  val: {
    name: "Valorant",
    description: "Meet the UBC Esports Valorant community and teams.",
    heroImage: "/department_pages/val_hero.jpg",
    aboutImage: "/department_pages/val_about.jpg",
    eventsImage: "/department_pages/val_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText:
      "As one of the most prominent gaming departments at UBCEA, the VALORANT department hosts numerous competitive and casual events throughout the academic year.",
    events: [
      "Weekly inhouses - Fridays 8:30-10:30 PM",
      "STATIC FIRE - September-October",
      "Winter WonderLAN - December-January",
      "Cascadia - February-March",
    ],
    directors: [
      { name: "Elon", role: "Director", image: "/department_pages/ubceaBANG.png" },
      { name: "Moses", role: "Director", image: "/department_pages/ubceaBANG.png" },
    ],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  geoguessr: {
    name: "Geoguessr",
    description: "Meet the UBC Esports Geoguessr community and teams.",
    heroImage: "/department_pages/geoguessr_hero.jpg",
    aboutImage: "/department_pages/geoguessr_about.jpg",
    eventsImage: "/department_pages/geoguessr_events.jpg",
    location: "AMS Student Nest Room 2132",
    aboutText: "Geoguessr is a web-based browser game that is easy for everyone to join and learn.",
    events: ["Largest events coincide with in-person UBCEA events immediately following them"],
    directors: [{ name: "Kai L.", role: "Director", image: "/department_pages/ubceaBANG.png" }],
    playerCardImage: "/department_pages/ubceaBANG.png",
    stickerStripImages: [
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
      "/department_pages/ubceaBANG.png",
    ],
  },
  // Rocket league has their own website
  //   rl: {
  //     name: "Rocket League",
  //     description: "Meet the UBC Esports Rocket League community and teams.",
  //     heroImage: "/department_pages/rl_hero.jpg",
  //     aboutImage: "/department_pages/rl_about.jpg",
  //     eventsImage: "/department_pages/rl_events.jpg",
  //     location: "AMS Student Nest Room 2132",
  //     aboutText: "Rocket League community with ~5 executives. Started in 2021 with 2 competitive teams per semester.",
  //     events: ["Weekly inhouses - Tuesdays 6 PM biweekly (alternating with SFU RL)", "Cascadia Cup (flagship event - competitive teams from post-secondary schools across NA)", "Crew Battles - January (more inclusive for lower level players)"],
  //     directors: [{ name: "TBD", role: "Director", image: "/department_pages/ubceaBANG.png" }],
  //     playerCardImage: "/department_pages/ubceaBANG.png",
  //     stickerStripImages: ["/department_pages/ubceaBANG.png", "/department_pages/ubceaBANG.png", "/department_pages/ubceaBANG.png"],
  //   },
};
