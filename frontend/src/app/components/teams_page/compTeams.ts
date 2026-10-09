export type CompPlayer = {
  fullName: string;
  ign?: string;
  role?: string;
};

export type CompAchievement = {
  placement: string;
  term: string;
  event: string;
};

export type CompTeam = {
  game: string;
  imageSrc: string;
  teamName: string;
  division?: string;
  players: CompPlayer[];
  achievements?: CompAchievement[];
};

// 2026-2027 rosters, sourced from the "UBC Competitive Players 2026-2027" sheet.
export const COMP_TEAMS: CompTeam[] = [
  {
    game: "League of Legends",
    imageSrc: "/departments/lol.png",
    teamName: "UBC Premier",
    division: "Premier",
    players: [
      { fullName: "Connor White", role: "Top" },
      { fullName: "Ian Zhou", role: "Mid" },
      { fullName: "Dongwoo Oh", role: "Jungle (Sub)" },
      { fullName: "Leon Liang", role: "Jungle (Sub)" },
      { fullName: "Steven Huang", role: "Jungle (Sub)" },
      { fullName: "Ray Liu", role: "ADC (Sub)" },
      { fullName: "Brandon Kossey", role: "ADC/Support (Sub)" },
      { fullName: "Samuel Liao", role: "Support (Sub)" },
    ],
  },
  {
    game: "Valorant",
    imageSrc: "/departments/val.jpg",
    teamName: "UBC Black",
    division: "Premier",
    players: [
      { fullName: "Justin Zheng", role: "Duelist" },
      { fullName: "Nick Luu", role: "Smokes" },
      { fullName: "Noah Sanders", role: "Flex" },
      { fullName: "Aidan Chan", role: "Flex" },
      { fullName: "Kevin Mehrani", role: "Flex (Sub)" },
      { fullName: "Cole Salazar", role: "Sentinel (Sub)" },
    ],
  },
  {
    game: "Marvel Rivals",
    imageSrc: "/departments/rivals.png",
    teamName: "UBC Thunder",
    division: "Premier",
    players: [
      { fullName: "Jack Sun", role: "Tank" },
      { fullName: "Matthew Zhang", role: "Tank" },
      { fullName: "Mergen Tuguldur", role: "DPS" },
      { fullName: "Zain Hussain", role: "DPS" },
      { fullName: "Jenny Sun", role: "Support" },
      { fullName: "Henry Zeng", role: "Support" },
      { fullName: "Muhtadi Elmardi", role: "Tank (Sub)" },
      { fullName: "Sean Sun", role: "DPS (Sub)" },
      { fullName: "Jerry Wang", role: "Support (Sub)" },
      { fullName: "Jerry Zhang", role: "Support (Sub)" },
      { fullName: "AG Kusumanegara", role: "Coach (Sub)" },
    ],
  },
  {
    game: "Marvel Rivals",
    imageSrc: "/departments/rivals.png",
    teamName: "UBC Spark",
    division: "B Team",
    players: [
      { fullName: "Muhtadi Elmardi", role: "Tank" },
      { fullName: "William Ng", role: "Tank" },
      { fullName: "Veer Gadhavi", role: "DPS" },
      { fullName: "Sean Sun", role: "DPS" },
      { fullName: "Calla Linskill", role: "Support" },
      { fullName: "Jerry Zhang", role: "Support" },
      { fullName: "Mackenzie Penton", role: "Support (Sub)" },
      { fullName: "Ethan Yu", role: "Support (Sub)" },
      { fullName: "Manfred Yang", role: "Support (Sub)" },
    ],
  },
  {
    game: "Overwatch",
    imageSrc: "/departments/ow.webp",
    teamName: "UBC Azure",
    players: [
      { fullName: "Han (Lance) Wang", role: "Tank" },
      { fullName: "Hao (Aaron) Huang", role: "Hitscan DPS" },
      { fullName: "Jobe Simpson", role: "Flex DPS" },
      { fullName: "Jeff Yu", role: "Flex Support" },
      { fullName: "Thomas Chung", role: "Flex/Main Support" },
      { fullName: "Kin Long Darrell Shek", role: "Main Support" },
      { fullName: "Christian Lee", role: "Flex DPS (Sub)" },
      { fullName: "Yukimura Takahashi", role: "Flex DPS/Flex Support (Sub)" },
      { fullName: "Ewan Philp", role: "Coach" },
    ],
  },
  {
    game: "Overwatch",
    imageSrc: "/departments/ow.webp",
    teamName: "UBC Midnight",
    players: [
      { fullName: "Jason Yang", role: "Tank" },
      { fullName: "Kyle Groulx", role: "Hitscan DPS" },
      { fullName: "Christian Lee", role: "Flex DPS" },
      { fullName: "Sarah Feng", role: "Flex/Main Support" },
      { fullName: "Yukimura Takahashi", role: "Flex Support" },
      { fullName: "Ardan Bramall", role: "Flex DPS (Sub)" },
      { fullName: "Ash Chen", role: "Flex Support (Sub)" },
      { fullName: "Rayan Cooper", role: "Flex Support (Sub)" },
    ],
  },
  {
    game: "Counter-Strike 2",
    imageSrc: "/departments/cs2.jpg",
    teamName: "UBC Elite",
    division: "Division 1",
    players: [
      { fullName: "Alfonso Nicolas", ign: "ajn", role: "IGL/AWPer" },
      { fullName: "Sizhe Yang", ign: "Yonys1337-", role: "AWPer" },
      { fullName: "Yinze Zhao", ign: "k0nGbu", role: "Rifler" },
      { fullName: "Haowen Cheng", ign: "Azusan", role: "Rifler" },
      { fullName: "Pierson Wong", ign: "pierson", role: "Rifler" },
      { fullName: "Jonathan Wu", ign: "Majungasaur", role: "Rifler" },
    ],
  },
  {
    game: "Counter-Strike 2",
    imageSrc: "/departments/cs2.jpg",
    teamName: "UBC Nuke",
    division: "Division 2",
    players: [
      { fullName: "Tian Tan", ign: "thereisboat", role: "IGL" },
      { fullName: "Owen Liang", ign: "Oh_When", role: "AWPer" },
      { fullName: "Thomas Chen", ign: "tomiquaaa", role: "AWPer" },
      { fullName: "Claudia Perez", ign: "_Clawds", role: "Rifler" },
      { fullName: "Nicholas Shen", ign: "nicsh", role: "Rifler" },
      { fullName: "Ibrahim Saker", ign: "__-HITMAN-__", role: "Sub" },
      { fullName: "Ming Gao", ign: "Mango0520", role: "Sub" },
      { fullName: "Frank Guo", ign: "furankie", role: "Sub" },
      { fullName: "Houze Guo", ign: "lefischer", role: "Sub" },
    ],
  },
  {
    game: "Rocket League",
    imageSrc: "/departments/rl.jpg",
    teamName: "UBC Gold",
    players: [
      { fullName: "Ivan Zheng", ign: "Fervent" },
      { fullName: "Jai Khatri", ign: "J" },
      { fullName: "Mohammad Arshiyan", ign: "Vizioñ" },
      { fullName: "Tyler Nie", ign: "rome", role: "Sub" },
    ],
  },
  {
    game: "Rocket League",
    imageSrc: "/departments/rl.jpg",
    teamName: "UBC Blue",
    players: [
      { fullName: "Tyler Nie", ign: "rome" },
      { fullName: "Tyler Kinnear", ign: "ExpiredKetchup" },
      { fullName: "Justin Tamasanu", ign: "dragoius" },
      { fullName: "Glen Zhu", ign: "xeno" },
      { fullName: "Ishaan Atwal", ign: "prozone", role: "Sub" },
    ],
  },
  {
    game: "Rainbow Six Siege",
    imageSrc: "/departments/r6.jpg",
    teamName: "Team Name TBA",
    players: [
      { fullName: "Simon Cai", role: "IGL" },
      { fullName: "Caden Zhang" },
      { fullName: "Akshay Chauhan" },
      { fullName: "Kai Sugihara" },
      { fullName: "Sam Yu" },
      { fullName: "Robson Fredette" },
      { fullName: "Alexandr Kim" },
      { fullName: "Rodrigo Campos" },
      { fullName: "Vlad Pirvoaica" },
    ],
  },
];
