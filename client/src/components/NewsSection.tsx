import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { news } from "@/lib/mockData";

export default function NewsSection() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="py-20 px-4 bg-muted/30" data-testid="news-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4" data-testid="news-title">
            Aktualności
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bądź na bieżąco z wydarzeniami i ogłoszeniami naszego Ośrodka Kultury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="group overflow-visible cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
                data-testid={`news-card-${item.id}`}
              >
                <div className="relative overflow-hidden rounded-t-md aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge
                    className="absolute top-3 left-3 bg-primary text-primary-foreground"
                  >
                    {item.category}
                  </Badge>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.date)}
                  </div>

                  <h3
                    className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2"
                    data-testid={`news-title-${item.id}`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                    {item.excerpt}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" data-testid="news-view-all">
            Zobacz wszystkie aktualności
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
