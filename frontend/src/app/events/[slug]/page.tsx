import { Metadata } from "next";
import { notFound } from "next/navigation";
import EventPage from "../../components/event_page/EventPage";
import { EVENTS, getEvent } from "../eventData";

// Only the events listed in eventData are valid, anything else 404s
export const dynamicParams = false;

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const event = getEvent((await params).slug);

  return event ? { title: event.name, description: event.description } : {};
}

export default async function Event({ params }: PageProps<"/events/[slug]">) {
  const event = getEvent((await params).slug);

  if (!event) {
    notFound();
  }

  return <EventPage event={event} />;
}
