import EventCard from "../EventCard";
import { events } from "@/lib/mockData";

export default function EventCardExample() {
  return (
    <div className="max-w-sm">
      <EventCard event={events[0]} index={0} />
    </div>
  );
}
