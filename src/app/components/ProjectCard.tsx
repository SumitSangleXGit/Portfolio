import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string;
  liveLink?: string;
  githubLink?: string;
}

export function ProjectCard({ title, subtitle, description, image, tech, liveLink, githubLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-sm text-blue-600">{subtitle}</p>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="mb-4">
          <Badge variant="secondary" className="text-xs">
            {tech}
          </Badge>
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live</span>
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}