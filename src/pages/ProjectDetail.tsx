import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Users, Calendar, User, TrendingUp, Mail } from "lucide-react";

// Mock data - same as in Projects.tsx
const mockProjects = [
  {
    id: "1",
    title: "AI-Powered Healthcare Assistant",
    shortDescription: "A machine learning system that helps diagnose common illnesses and suggests treatment plans based on symptoms and medical history.",
    detailedDescription: "This project uses natural language processing and machine learning to create an intelligent healthcare assistant. The system analyzes patient symptoms, medical history, and current research to provide accurate preliminary diagnoses and treatment suggestions. It includes a user-friendly interface for both patients and healthcare providers, with features for symptom tracking, medication reminders, and health trend analysis. The AI model was trained on anonymized medical data and achieves 87% accuracy in preliminary diagnoses compared to general practitioners.",
    year: "2024",
    team: [
      { name: "Sarah Johnson", email: "sarah.johnson@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
      { name: "Mike Chen", email: "mike.chen@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
      { name: "Emily Rodriguez", email: "emily.rodriguez@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" }
    ],
    supervisor: "Dr. Robert Williams",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "Natural Language Processing"],
    category: "Healthcare",
    investmentStatus: "open" as const,
  },
  {
    id: "2",
    title: "Smart Energy Grid Optimizer",
    shortDescription: "An IoT-based system that optimizes energy distribution in smart cities, reducing waste and improving efficiency.",
    detailedDescription: "Using real-time data from IoT sensors, this system analyzes energy consumption patterns across urban infrastructure and automatically adjusts power distribution to minimize waste. The platform includes predictive algorithms that forecast energy demands based on historical data, weather patterns, and city events. Early testing showed a 23% reduction in energy waste and improved grid stability during peak hours.",
    year: "2024",
    team: [
      { name: "David Park", email: "david.park@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
      { name: "Lisa Wang", email: "lisa.wang@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" }
    ],
    supervisor: "Prof. Amanda Green",
    technologies: ["IoT", "Python", "AWS", "MongoDB", "Machine Learning"],
    category: "Energy",
    investmentStatus: "open" as const,
  },
  {
    id: "3",
    title: "Blockchain Supply Chain Tracker",
    shortDescription: "A transparent supply chain management system using blockchain technology to track products from origin to consumer.",
    detailedDescription: "This blockchain-based solution provides end-to-end visibility in supply chains, allowing consumers and businesses to verify product authenticity, ethical sourcing, and environmental impact. Each transaction in the supply chain is recorded as an immutable block, creating a transparent and tamper-proof record. The system has been successfully piloted with three medium-sized manufacturers, reducing counterfeit products by 95%.",
    year: "2023",
    team: [
      { name: "James Liu", email: "james.liu@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
      { name: "Maria Garcia", email: "maria.garcia@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" },
      { name: "Tom Anderson", email: "tom.anderson@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom" },
      { name: "Nina Patel", email: "nina.patel@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina" }
    ],
    supervisor: "Dr. Michael Brown",
    technologies: ["Blockchain", "Solidity", "React", "Web3", "Smart Contracts"],
    category: "Technology",
    investmentStatus: "funded" as const,
  },
  {
    id: "4",
    title: "Educational VR Platform",
    shortDescription: "An immersive virtual reality platform for interactive learning experiences in STEM subjects.",
    detailedDescription: "This VR platform creates engaging educational content for students in STEM fields. Students can conduct virtual chemistry experiments, explore 3D molecular structures, practice physics simulations, and collaborate in virtual labs. The platform includes assessment tools for teachers and adaptive learning paths based on student performance. Initial tests with 200 high school students showed 40% improvement in concept retention compared to traditional methods.",
    year: "2024",
    team: [
      { name: "Alex Thompson", email: "alex.thompson@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
      { name: "Rachel Kim", email: "rachel.kim@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel" }
    ],
    supervisor: "Prof. Jennifer Lee",
    technologies: ["Unity", "C#", "VR", "3D Modeling", "WebXR"],
    category: "Education",
    investmentStatus: "open" as const,
  },
  {
    id: "5",
    title: "Sustainable Agriculture Monitor",
    shortDescription: "A monitoring system that helps farmers optimize crop yields while minimizing environmental impact.",
    detailedDescription: "Using sensors and data analytics, this system provides insights for sustainable farming practices. It monitors soil conditions, weather patterns, water usage, and crop health in real-time. The AI-powered recommendation engine suggests optimal planting times, irrigation schedules, and fertilizer usage to maximize yields while reducing environmental impact. Field tests with local farmers showed 18% increase in yields and 30% reduction in water usage.",
    year: "2023",
    team: [
      { name: "Carlos Martinez", email: "carlos.martinez@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos" },
      { name: "Sophie Turner", email: "sophie.turner@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie" },
      { name: "Ben Jackson", email: "ben.jackson@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ben" }
    ],
    supervisor: "Dr. Helen Carter",
    technologies: ["IoT", "Python", "React Native", "PostgreSQL", "Data Analytics"],
    category: "Agriculture",
    investmentStatus: "closed" as const,
  },
  {
    id: "6",
    title: "Autonomous Delivery Robot",
    shortDescription: "An autonomous navigation system for last-mile delivery robots in urban environments.",
    detailedDescription: "This project develops autonomous navigation algorithms for safe urban delivery. The robot uses computer vision, LIDAR, and machine learning to navigate sidewalks, avoid obstacles, and interact safely with pedestrians. It includes a secure delivery mechanism and real-time tracking for customers. The system has completed over 500 test deliveries with a 99.2% success rate and zero safety incidents.",
    year: "2024",
    team: [
      { name: "Kevin Zhang", email: "kevin.zhang@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" },
      { name: "Emma Davis", email: "emma.davis@university.edu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" }
    ],
    supervisor: "Prof. Richard Moore",
    technologies: ["ROS", "Python", "Computer Vision", "AI", "LIDAR"],
    category: "Robotics",
    investmentStatus: "open" as const,
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Project not found</p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <Link to="/projects">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="grid gap-8 lg:grid-cols-3 animate-fade-in">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="mb-4 flex flex-wrap items-start gap-2">
                <Badge variant="outline">{project.category}</Badge>
                <Badge className={statusColors[project.investmentStatus]}>
                  {statusLabels[project.investmentStatus]}
                </Badge>
              </div>
              
              <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
              
              <p className="text-lg text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {project.detailedDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Year
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{project.year}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.team.map((member) => (
                    <div key={member.email} className="flex items-start gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{member.name}</p>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mt-1 break-all"
                        >
                          <Mail className="h-3 w-3 flex-shrink-0" />
                          {member.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Supervisor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{project.supervisor}</p>
              </CardContent>
            </Card>

            {project.investmentStatus === "open" && (
              <Card className="border-primary bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-5 w-5" />
                    Investment Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    This project is open for investment. Contact the team to discuss opportunities.
                  </p>
                  <Button className="w-full">Express Interest</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
