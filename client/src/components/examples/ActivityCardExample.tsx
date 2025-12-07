import ActivityCard from "../ActivityCard";
import { activities } from "@/lib/mockData";

export default function ActivityCardExample() {
  return (
    <div className="max-w-sm">
      <ActivityCard activity={activities[0]} index={0} />
    </div>
  );
}
