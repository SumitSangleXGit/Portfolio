import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import { Card } from "./ui/card";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 bg-white border-0 shadow-xl max-w-2xl mx-auto">
          <div className="flex gap-1 mb-4 justify-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 text-lg mb-4 text-center italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
            "{text}"
          </p>
          <p className="text-orange-600 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            — {name}
          </p>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
