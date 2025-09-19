import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Building2,
  Brain,
  TrendingUp,
  MapPin,
  Award,
  Clock,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    {
      title: "Total Applications",
      value: "12,847",
      icon: Users,
      trend: "+12%",
    },
    {
      title: "Active Companies",
      value: "2,156",
      icon: Building2,
      trend: "+8%",
    },
    { title: "Successful Matches", value: "8,923", icon: Brain, trend: "+15%" },
    { title: "Match Accuracy", value: "94.2%", icon: Target, trend: "+2.1%" },
  ];

  const recentMatches = [
    {
      student: "Rajesh Kumar",
      company: "TCS",
      location: "Bangalore",
      match: 96,
    },
    {
      student: "Priya Singh",
      company: "ONGC",
      location: "Dehradun",
      match: 94,
    },
    {
      student: "Amit Sharma",
      company: "Indian Railways",
      location: "Delhi",
      match: 92,
    },
    {
      student: "Sneha Patel",
      company: "Infosys",
      location: "Hyderabad",
      match: 90,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Smart Allocation Engine
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing the PM Internship Scheme with intelligent matching
              algorithms that consider skills, qualifications, location
              preferences, and affirmative action requirements.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/students">
              <Button size="lg" className="gap-2">
                <Users className="h-5 w-5" />
                Student Applications
              </Button>
            </Link>
            <Link to="/companies">
              <Button variant="outline" size="lg" className="gap-2">
                <Building2 className="h-5 w-5" />
                Company Portal
              </Button>
            </Link>
            <Link to="/matching">
              <Button variant="outline" size="lg" className="gap-2">
                <Brain className="h-5 w-5" />
                AI Matching Engine
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center gap-1 text-xs text-success">
                    <TrendingUp className="h-3 w-3" />
                    {stat.trend} from last month
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Matches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Recent AI Matches
              </CardTitle>
              <CardDescription>
                Latest successful internship allocations by the AI engine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{match.student}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        {match.company}
                        <MapPin className="h-3 w-3 ml-2" />
                        {match.location}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-success/10 text-success"
                    >
                      {match.match}% Match
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                System Performance
              </CardTitle>
              <CardDescription>
                Real-time metrics and allocation progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Processing Applications</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Affirmative Action Compliance</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Rural District Representation</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24.5h</div>
                  <div className="text-sm text-muted-foreground">
                    Avg. Processing Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">97.8%</div>
                  <div className="text-sm text-muted-foreground">
                    Student Satisfaction
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common administrative tasks and system controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/matching">
                <Button
                  variant="outline"
                  className="h-20 w-full flex flex-col gap-2"
                >
                  <Brain className="h-6 w-6" />
                  Run Matching Algorithm
                </Button>
              </Link>
              <Link to="/admin">
                <Button
                  variant="outline"
                  className="h-20 w-full flex flex-col gap-2"
                >
                  <Award className="h-6 w-6" />
                  Review Allocations
                </Button>
              </Link>
              <Button
                variant="outline"
                className="h-20 w-full flex flex-col gap-2"
              >
                <TrendingUp className="h-6 w-6" />
                Generate Reports
              </Button>
            </div>
          </CardContent>
        </Card>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
