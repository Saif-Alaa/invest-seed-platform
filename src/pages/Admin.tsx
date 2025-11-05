import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, TrendingUp, Users, FolderOpen, Target } from "lucide-react";

const Admin = () => {
  // Mock statistics
  const stats = {
    totalProjects: 47,
    openForInvestment: 18,
    totalViews: 1243,
    avgViewsPerProject: 26,
  };

  // Mock recent projects
  const recentProjects = [
    { id: 1, title: "AI-Powered Healthcare Assistant", views: 87, status: "open", date: "2024-03-15" },
    { id: 2, title: "Smart Energy Grid Optimizer", views: 64, status: "open", date: "2024-03-14" },
    { id: 3, title: "Educational VR Platform", views: 52, status: "open", date: "2024-03-13" },
    { id: 4, title: "Autonomous Delivery Robot", views: 41, status: "open", date: "2024-03-12" },
    { id: 5, title: "Blockchain Supply Chain", views: 38, status: "funded", date: "2024-03-10" },
  ];

  // Mock SDGs data
  const sdgsData = [
    { goal: "SDG 4: Quality Education", projects: 12 },
    { goal: "SDG 8: Decent Work", projects: 8 },
    { goal: "SDG 9: Industry & Innovation", projects: 15 },
    { goal: "SDG 12: Responsible Consumption", projects: 7 },
    { goal: "SDG 17: Partnerships", projects: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Monitor platform performance and project metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProjects}</div>
              <p className="text-xs text-muted-foreground">Across all years</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open for Investment</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.openForInvestment}</div>
              <p className="text-xs text-muted-foreground">
                {((stats.openForInvestment / stats.totalProjects) * 100).toFixed(0)}% of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">All time views</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Views/Project</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgViewsPerProject}</div>
              <p className="text-xs text-muted-foreground">Per project average</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="projects" className="space-y-4">
          <TabsList>
            <TabsTrigger value="projects">Recent Projects</TabsTrigger>
            <TabsTrigger value="sdgs">SDG Alignment</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Recently Uploaded Projects</CardTitle>
                <CardDescription>Latest projects added to the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentProjects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{new Date(project.date).toLocaleDateString()}</TableCell>
                        <TableCell>{project.views}</TableCell>
                        <TableCell>
                          <Badge
                            variant={project.status === "open" ? "default" : "secondary"}
                          >
                            {project.status === "open" ? "Open" : "Funded"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdgs">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Sustainable Development Goals Alignment
                </CardTitle>
                <CardDescription>
                  Projects categorized by their contribution to UN SDGs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sdgsData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="mb-1 font-medium">{item.goal}</div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${(item.projects / stats.totalProjects) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="font-semibold">{item.projects}</div>
                        <div className="text-xs text-muted-foreground">projects</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
