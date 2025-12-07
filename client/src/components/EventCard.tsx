import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@/lib/mockData";

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group overflow-visible cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        data-testid={`event-card-${event.id}`}
      >
        <div className="relative overflow-hidden rounded-t-md aspect-[4/3]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Badge
            className="absolute top-3 left-3 bg-primary text-primary-foreground"
            data-testid={`event-category-${event.id}`}
          >
            {event.category}
          </Badge>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {event.time}
            </span>
          </div>

          <h3
            className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
            data-testid={`event-title-${event.id}`}
          >
            {event.title}
          </h3>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {event.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
