import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ActivityCard from "./ActivityCard";
import { activities } from "@/lib/mockData";

export default function ActivitiesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30" data-testid="activities-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4" data-testid="activities-title">
            Zajęcia i Koła Zainteresowań
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rozwijaj swoje pasje w naszym Ośrodku Kultury. Oferujemy szeroką gamę zajęć dla dzieci, młodzieży i dorosłych.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" data-testid="activities-view-all">
            Zapisz się na zajęcia
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
