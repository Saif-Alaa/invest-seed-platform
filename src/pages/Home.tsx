import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Where Great Ideas Meet
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Investment Opportunities
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Discover innovative capstone projects from talented students. Connect groundbreaking ideas with investors who believe in the future.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/projects">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  Browse Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/upload">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Submit Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3 animate-fade-in">
          <Card className="border-none shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Discover Projects</h3>
              <p className="text-muted-foreground">
                Browse through innovative capstone projects across various fields and technologies. Find ideas that match your investment interests.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Investment Ready</h3>
              <p className="text-muted-foreground">
                Projects are tagged by investment status. Connect with teams ready to turn their capstone work into real businesses.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Connect & Grow</h3>
              <p className="text-muted-foreground">
                Students showcase their work. Investors find opportunities. Supervisors track innovation. Everyone wins.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Explore Innovation?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join students, supervisors, and investors building the future together.
          </p>
          <Link to="/projects">
            <Button size="lg" className="gap-2">
              Start Exploring
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
