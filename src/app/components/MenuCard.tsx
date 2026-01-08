import { motion } from "motion/react";
import { Card } from "./ui/card";

interface MenuCardProps {
  name: string;
  image: string;
  index: number;
}

export function MenuCard({ name, image, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white cursor-pointer">
        <motion.div 
          className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-50"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </motion.div>
        <div className="p-6 text-center">
          <h3 className="text-2xl text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {name}
          </h3>
        </div>
      </Card>
    </motion.div>
  );
}
