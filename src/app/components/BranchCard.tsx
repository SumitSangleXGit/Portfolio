import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { Card } from "./ui/card";

interface BranchCardProps {
  name: string;
  location: string;
  phone: string;
  index: number;
}

export function BranchCard({ name, location, phone, index }: BranchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-l-4 border-l-orange-500">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-xl mb-4 text-orange-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {name}
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{location}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                {phone}
              </a>
            </div>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
