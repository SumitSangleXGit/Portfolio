import { Award, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

interface CertificationCardProps {
  title: string;
  status?: string;
}

export function CertificationCard({ title, status }: CertificationCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow duration-300 bg-white border-0">
      <div className="flex items-center gap-3">
        <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm">{title}</p>
          {status && <p className="text-xs text-gray-500 mt-0.5">{status}</p>}
        </div>
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
      </div>
    </Card>
  );
}
