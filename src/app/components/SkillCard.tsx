import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  gradient: string;
}

export function SkillCard({ title, skills, icon: Icon, gradient }: SkillCardProps) {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white">
      <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
