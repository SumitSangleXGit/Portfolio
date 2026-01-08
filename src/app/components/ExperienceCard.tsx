import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

interface ExperienceCardProps {
  title: string;
  company?: string;
  description: string[];
}

export function ExperienceCard({ title, company, description }: ExperienceCardProps) {
  return (
    <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg mb-1">{title}</h3>
          {company && <p className="text-sm text-blue-600 mb-3">{company}</p>}
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-blue-500 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
