// Content and theming for each event page, rendered by app/events/[slug]/page.tsx.
// Tailwind classes are written out in full so they get picked up at build time.

export type EventLogo =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      // Some logo exports have padding baked in, so they are cropped inside a frame
      frameClassName: string;
      imageClassName: string;
    }
  | { kind: "text"; text: string };

export type EventCard = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export type EventImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type EventFAQ = {
  question: string;
  answer: string;
};

export type EventTheme = {
  accentText: string;
  heroOverlay: string;
  pageGradient: string;
  buttonGradient: string;
};

export type EventInfo = {
  slug: string;
  name: string;
  // Label on the "explore our events" buttons
  shortName: string;
  description: string;
  theme: EventTheme;
  hero: {
    logo: EventLogo;
    tagline?: string;
    banner: string;
  };
  about: {
    heading: string;
    location: string;
    date: string;
    body: string;
    button?: { label: string; href: string };
  };
  venueMap?: EventImage;
  cards: { heading: string; items: EventCard[] };
  exhibitorHall?: { map: EventImage; button: { label: string; href: string } };
  gallery: EventImage[];
  sponsors: { message: string };
  faqs: EventFAQ[];
};

const DISCORD_URL = "https://discord.gg/ubcesports";

const SHARED_FAQS: EventFAQ[] = [
  {
    question: "Do I have to be a member or UBC student to participate in events?",
    answer:
      "Anyone is welcome to attend our events, whether or not you are a UBCEA member or a UBC student! However, members and/or UBC students may get discounts for some events.",
  },
  {
    question: "Will I be photographed at the event?",
    answer:
      "We often take photos and videos of attendees at in-person events that may be shared on social media. Please let us know when you sign up or at the event if you would like to opt-out of your photo being taken and we will accommodate.",
  },
];

// TODO: replace with the real attractions/events once they're announced
const PLACEHOLDER_CARDS: EventCard[] = Array.from({ length: 9 }, () => ({
  title: "Rainbow Six: Siege",
  subtitle: "Shooting Range Challenge",
  imageSrc: "/events/attraction_r6.jpg",
}));

const SPONSOR_MESSAGE = "Thank you to our sponsors for helping make this event possible!";

// Order here is the order of the "explore our events" buttons
export const EVENTS: EventInfo[] = [
  {
    slug: "static-fire",
    name: "Static Fire",
    shortName: "Static Fire",
    description:
      "Static Fire: a series of casual UBCEA tournaments, LANs and minigames with a prize raffle.",
    theme: {
      accentText: "text-static-fire-orange",
      heroOverlay: "bg-linear-to-b from-[rgb(28_72_185/0)] to-[rgb(255_168_92/0.73)]",
      pageGradient: "bg-linear-to-b from-bg-dark-blue from-[17.8%] to-[#71462b]",
      buttonGradient: "bg-linear-to-r from-static-fire-yellow to-static-fire-orange",
    },
    hero: {
      logo: {
        kind: "image",
        src: "/events/static_fire_logo.png",
        alt: "Static Fire",
        width: 1800,
        height: 138,
        frameClassName: "aspect-[1080/92] w-full max-w-270 overflow-hidden",
        imageClassName: "absolute top-0 left-[-5.85%] h-full w-[111.35%] max-w-none",
      },
      tagline: "prepare for liftoff",
      banner: "Play. Meet friends. Have fun. Sept 18th - Oct 2nd",
    },
    about: {
      heading: "About Static Fire",
      location: "Online or in-person (check our Discord for more information)",
      date: "Events will take place over September 18th to October 9th, 2026",
      body: "Come play in a series of casual tournaments, LANs, and minigames to meet friends and have fun! Join the raffle and participate in as many games as possible to increase your chances of winning prizes.",
      button: { label: "Join Our Discord", href: DISCORD_URL },
    },
    cards: { heading: "Events", items: PLACEHOLDER_CARDS },
    gallery: [],
    sponsors: { message: SPONSOR_MESSAGE },
    faqs: SHARED_FAQS,
  },
  {
    slug: "liftoff",
    name: "Liftoff",
    shortName: "Liftoff",
    description: "LIFTOFF, UBCEA's annual icebreaker event in the AMS Nest Great Hall.",
    theme: {
      accentText: "text-liftoff-green",
      heroOverlay: "bg-linear-to-b from-[rgb(28_72_185/0)] to-[rgb(92_255_141/0.73)]",
      pageGradient: "bg-linear-to-b from-bg-dark-blue from-[17.8%] to-[#264d37]",
      buttonGradient: "bg-linear-to-r from-space-teal to-liftoff-green",
    },
    hero: {
      logo: {
        kind: "image",
        src: "/events/liftoff_logo.svg",
        alt: "Liftoff: an icebreaker event",
        width: 923,
        height: 337,
        frameClassName: "w-full max-w-225",
        imageClassName: "h-auto w-full",
      },
      banner: "October 9th, 2026 - AMS Nest Great Hall",
    },
    about: {
      heading: "About Liftoff",
      location: "Great Hall, AMS Student Nest (6133 University Blvd)",
      date: "5pm - 9pm October 9th, 2026",
      body: "Come join us and meet other gamers in the community at our annual icebreaker event! Test your video game knowledge in trivia, face-off others in 1v1s, or pick up some Red Bull and just hangout for the vibes. Finally, enter the raffle for a chance to win cool prizes at the end!",
    },
    cards: { heading: "Attractions", items: PLACEHOLDER_CARDS },
    gallery: [],
    sponsors: { message: SPONSOR_MESSAGE },
    faqs: SHARED_FAQS,
  },
  {
    slug: "cascadia-cup",
    name: "Cascadia Cup",
    shortName: "Cascadia",
    description: "Cascadia Cup, coming November 2026.",
    theme: {
      accentText: "text-cascadia-sky-blue",
      heroOverlay: "bg-linear-to-b from-[rgb(28_72_185/0)] to-[rgb(92_241_255/0.73)]",
      pageGradient: "bg-linear-to-b from-bg-dark-blue from-[17.8%] to-[#576776]",
      buttonGradient: "bg-linear-to-r from-teal to-cascadia-sky-blue",
    },
    hero: {
      logo: { kind: "text", text: "cascadia cup" },
      banner: "November 2026: Coming soon!",
    },
    about: {
      heading: "About Cascadia Cup",
      location: "TBD",
      date: "TBD",
      body: "Coming soon! Details TBA",
      // TODO: add the ticket link once sales open
      button: { label: "Buy Tickets", href: "#" },
    },
    cards: { heading: "Events", items: PLACEHOLDER_CARDS },
    gallery: [],
    sponsors: { message: SPONSOR_MESSAGE },
    faqs: SHARED_FAQS,
  },
  {
    slug: "gaming-expo",
    name: "UBC Gaming Expo",
    shortName: "Expo",
    description: "UBC Gaming Expo, February 2027 at the AMS Nest.",
    theme: {
      accentText: "text-expo-purple",
      heroOverlay: "bg-linear-to-b from-bg-gray/73 to-expo-purple/73",
      pageGradient: "bg-linear-to-b from-bg-dark-blue from-[41.8%] to-[#2618a8]",
      buttonGradient: "bg-linear-to-r from-darker-light-blue to-expo-purple",
    },
    hero: {
      logo: {
        kind: "image",
        src: "/events/expo_logo.png",
        alt: "UBC Gaming Expo",
        width: 1920,
        height: 1080,
        frameClassName: "aspect-[631/364] w-full max-w-158 overflow-hidden",
        imageClassName: "absolute top-[-18.01%] left-[-19.73%] h-[135.99%] w-[139.46%] max-w-none",
      },
      banner: "February 2027 - AMS Nest",
    },
    about: {
      heading: "About Gaming Expo",
      location: "AMS Student Nest (6133 University Blvd)",
      date: "TBD",
      body: "Coming soon! Details TBA",
      // TODO: add the ticket link once sales open
      button: { label: "Buy Tickets", href: "#" },
    },
    venueMap: {
      src: "/events/expo_venue_map.png",
      alt: "Venue map of the second floor of the AMS Nest",
      width: 1406,
      height: 1118,
    },
    cards: { heading: "Attractions", items: PLACEHOLDER_CARDS },
    exhibitorHall: {
      map: {
        src: "/events/expo_exhibitor_hall.png",
        alt: "Exhibitor hall map of the Great Hall, including the main stage and artist alley",
        width: 1118,
        height: 1407,
      },
      // TODO: add the vendor application link
      button: { label: "Apply to Be a Vendor!", href: "#" },
    },
    gallery: [],
    sponsors: { message: SPONSOR_MESSAGE },
    faqs: SHARED_FAQS,
  },
];

// The event shown on /events. Change this when the next event is announced.
export const FEATURED_EVENT_SLUG = "liftoff";

// The featured event lives at /events, every other event at /events/<slug>
export const getEventHref = (slug: string) =>
  slug === FEATURED_EVENT_SLUG ? "/events" : `/events/${slug}`;

export const getEvent = (slug: string) => EVENTS.find((event) => event.slug === slug);

export const getFeaturedEvent = () => {
  const event = getEvent(FEATURED_EVENT_SLUG);

  if (!event) {
    throw new Error(`FEATURED_EVENT_SLUG "${FEATURED_EVENT_SLUG}" doesn't match any event`);
  }

  return event;
};
