import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  shortDescription: string;
  year: string;
  team: string[];
  technologies: string[];
  category: string;
  investmentStatus: "open" | "closed" | "funded";
}

const ProjectCard = ({
  id,
  title,
  shortDescription,
  year,
  team,
  technologies,
  category,
  investmentStatus,
}: ProjectCardProps) => {
  const statusColors = {
    open: "bg-success text-success-foreground",
    closed: "bg-muted text-muted-foreground",
    funded: "bg-primary text-primary-foreground",
  };

  const statusLabels = {
    open: "Open for Investment",
    closed: "Not Seeking Investment",
    funded: "Funded",
  };

  return (
    <Card className="group flex h-full flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in">
      <CardHeader>
        <div className="mb-2 flex items-start justify-between gap-2">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <Badge className={statusColors[investmentStatus]}>
            {statusLabels[investmentStatus]}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
          {shortDescription}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{team.length} team member{team.length > 1 ? "s" : ""}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/projects/${id}`} className="w-full">
          <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
