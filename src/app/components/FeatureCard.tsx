import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white border-0">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <p className="text-lg text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {title}
        </p>
      </Card>
    </motion.div>
  );
}
