import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Activity } from "@/lib/mockData";

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

export default function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="group overflow-visible cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        data-testid={`activity-card-${activity.id}`}
      >
        <div className="relative overflow-hidden rounded-t-md aspect-[4/3]">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif text-xl font-semibold text-white" data-testid={`activity-title-${activity.id}`}>
              {activity.title}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {activity.schedule}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              {activity.ageGroup}
            </span>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {activity.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
