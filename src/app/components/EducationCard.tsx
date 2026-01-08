import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

interface EducationCardProps {
  degree: string;
  description: string;
}

export function EducationCard({ degree, description }: EducationCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
          <GraduationCap className="w-6 h-6 text-purple-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg mb-1">{degree}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Card>
  );
}
