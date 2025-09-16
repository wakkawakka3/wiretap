import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { Settings, Users, Building2, CheckCircle, XCircle, Clock, TrendingUp, Award, AlertTriangle } from "lucide-react";

const Admin = () => {
  const pendingAllocations = [
    {
      id: 1,
      student: "Rajesh Kumar",
      company: "TCS",
      matchScore: 96,
      location: "Bangalore",
      category: "Rural",
      status: "pending"
    },
    {
      id: 2,
      student: "Priya Singh",
      company: "Infosys",
      matchScore: 94,
      location: "Hyderabad",
      category: "OBC",
      status: "pending"
    },
    {
      id: 3,
      student: "Amit Sharma",
      company: "Wipro",
      matchScore: 92,
      location: "Pune",
      category: "General",
      status: "pending"
    }
  ];

  const systemMetrics = [
    { label: "Total Applications", value: "12,847", trend: "+12%" },
    { label: "Processed", value: "10,456", trend: "+8%" },
    { label: "Pending Review", value: "2,391", trend: "-5%" },
    { label: "Success Rate", value: "94.2%", trend: "+2.1%" }
  ];

  const diversityStats = [
    { category: "Rural Districts", current: 65, target: 70, color: "bg-blue-500" },
    { category: "SC/ST", current: 22, target: 25, color: "bg-green-500" },
    { category: "OBC", current: 35, target: 40, color: "bg-yellow-500" },
    { category: "Female", current: 42, target: 50, color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Settings className="h-8 w-8 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage the AI allocation system
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="allocations">Allocations</TabsTrigger>
            <TabsTrigger value="diversity">Diversity</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* System Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs text-success">
                      {metric.trend} from last week
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>AI Engine Status</span>
                    <Badge variant="default" className="bg-success">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Database Connection</span>
                    <Badge variant="default" className="bg-success">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>API Response Time</span>
                    <Badge variant="outline">245ms</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Backup</span>
                    <Badge variant="outline">2 hours ago</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Alerts & Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg border border-warning/20 bg-warning/5">
                    <div className="flex items-center gap-2 text-warning text-sm font-medium">
                      <AlertTriangle className="h-4 w-4" />
                      High Volume Alert
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Processing queue above 2000 applications
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-info/20 bg-info/5">
                    <div className="flex items-center gap-2 text-info text-sm font-medium">
                      <Clock className="h-4 w-4" />
                      Scheduled Maintenance
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      System maintenance at 2:00 AM tomorrow
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="allocations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Allocations</CardTitle>
                <CardDescription>
                  AI-generated matches requiring admin approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingAllocations.map((allocation) => (
                    <div key={allocation.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <div>
                            <div className="font-medium">{allocation.student}</div>
                            <div className="text-sm text-muted-foreground">
                              {allocation.company} • {allocation.location}
                            </div>
                          </div>
                          <Badge variant="outline">
                            {allocation.category}
                          </Badge>
                          <Badge variant="secondary" className="bg-success/10 text-success">
                            {allocation.matchScore}% Match
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                        <Button size="sm">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="diversity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Affirmative Action Compliance
                </CardTitle>
                <CardDescription>
                  Track diversity and inclusion metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {diversityStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{stat.category}</span>
                      <span className="text-muted-foreground">
                        {stat.current}% of {stat.target}% target
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={stat.current} className="h-3" />
                      <div 
                        className="absolute top-0 h-3 w-1 bg-destructive rounded-full"
                        style={{ left: `${stat.target}%` }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Target: {stat.target}% • Current: {stat.current}%
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>North India</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>South India</span>
                      <span className="font-medium">32%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>West India</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>East India</span>
                      <span className="font-medium">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Aspirational Districts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">156</div>
                      <div className="text-sm text-muted-foreground">Districts Covered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success">73%</div>
                      <div className="text-sm text-muted-foreground">Target Achievement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>
                  Export data and analytics for stakeholders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Users className="h-6 w-6" />
                    Student Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Building2 className="h-6 w-6" />
                    Company Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Analytics Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Award className="h-6 w-6" />
                    Diversity Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Allocation Report
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Settings className="h-6 w-6" />
                    System Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;