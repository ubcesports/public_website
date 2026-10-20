import { Metadata } from "next";
import EventPage from "../components/event_page/EventPage";
import { getFeaturedEvent } from "./eventData";

export const metadata: Metadata = {
  title: "Events",
  description: getFeaturedEvent().description,
};

export default function Events() {
  return <EventPage event={getFeaturedEvent()} />;
}
