import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

// Mock data - will be replaced with real data later
const mockProjects = [
  {
    id: "1",
    title: "AI-Powered Healthcare Assistant",
    shortDescription: "A machine learning system that helps diagnose common illnesses and suggests treatment plans based on symptoms and medical history.",
    detailedDescription: "This project uses natural language processing and machine learning to create an intelligent healthcare assistant...",
    year: "2024",
    team: ["Sarah Johnson", "Mike Chen", "Emily Rodriguez"],
    supervisor: "Dr. Robert Williams",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    category: "Healthcare",
    investmentStatus: "open" as const,
  },
  {
    id: "2",
    title: "Smart Energy Grid Optimizer",
    shortDescription: "An IoT-based system that optimizes energy distribution in smart cities, reducing waste and improving efficiency.",
    detailedDescription: "Using real-time data from IoT sensors, this system analyzes energy consumption patterns...",
    year: "2024",
    team: ["David Park", "Lisa Wang"],
    supervisor: "Prof. Amanda Green",
    technologies: ["IoT", "Python", "AWS", "MongoDB"],
    category: "Energy",
    investmentStatus: "open" as const,
  },
  {
    id: "3",
    title: "Blockchain Supply Chain Tracker",
    shortDescription: "A transparent supply chain management system using blockchain technology to track products from origin to consumer.",
    detailedDescription: "This blockchain-based solution provides end-to-end visibility in supply chains...",
    year: "2023",
    team: ["James Liu", "Maria Garcia", "Tom Anderson", "Nina Patel"],
    supervisor: "Dr. Michael Brown",
    technologies: ["Blockchain", "Solidity", "React", "Web3"],
    category: "Technology",
    investmentStatus: "funded" as const,
  },
  {
    id: "4",
    title: "Educational VR Platform",
    shortDescription: "An immersive virtual reality platform for interactive learning experiences in STEM subjects.",
    detailedDescription: "This VR platform creates engaging educational content for students...",
    year: "2024",
    team: ["Alex Thompson", "Rachel Kim"],
    supervisor: "Prof. Jennifer Lee",
    technologies: ["Unity", "C#", "VR", "3D Modeling"],
    category: "Education",
    investmentStatus: "open" as const,
  },
  {
    id: "5",
    title: "Sustainable Agriculture Monitor",
    shortDescription: "A monitoring system that helps farmers optimize crop yields while minimizing environmental impact.",
    detailedDescription: "Using sensors and data analytics, this system provides insights for sustainable farming...",
    year: "2023",
    team: ["Carlos Martinez", "Sophie Turner", "Ben Jackson"],
    supervisor: "Dr. Helen Carter",
    technologies: ["IoT", "Python", "React Native", "PostgreSQL"],
    category: "Agriculture",
    investmentStatus: "closed" as const,
  },
  {
    id: "6",
    title: "Autonomous Delivery Robot",
    shortDescription: "An autonomous navigation system for last-mile delivery robots in urban environments.",
    detailedDescription: "This project develops autonomous navigation algorithms for safe urban delivery...",
    year: "2024",
    team: ["Kevin Zhang", "Emma Davis"],
    supervisor: "Prof. Richard Moore",
    technologies: ["ROS", "Python", "Computer Vision", "AI"],
    category: "Robotics",
    investmentStatus: "open" as const,
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesYear = yearFilter === "all" || project.year === yearFilter;
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || project.investmentStatus === statusFilter;

    return matchesSearch && matchesYear && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Discover Projects</h1>
          <p className="text-lg text-muted-foreground">
            Explore innovative capstone projects from talented students
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects, technologies, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Energy">Energy</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Agriculture">Agriculture</SelectItem>
                <SelectItem value="Robotics">Robotics</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Investment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open for Investment</SelectItem>
                <SelectItem value="funded">Funded</SelectItem>
                <SelectItem value="closed">Not Seeking Investment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {mockProjects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No projects found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
