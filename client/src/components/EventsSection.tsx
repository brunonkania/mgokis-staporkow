import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import { events } from "@/lib/mockData";

export default function EventsSection() {
  return (
    <section className="py-20 px-4 bg-background" data-testid="events-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4" data-testid="events-title">
            Nadchodzące Wydarzenia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zapraszamy na najbliższe koncerty, spektakle i wystawy. Odkryj kulturę na żywo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" data-testid="events-view-all">
            Zobacz wszystkie wydarzenia
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
