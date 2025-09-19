import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import { Brain, Play, Pause, Settings, TrendingUp, Users, Building2, Target, Zap, BarChart3 } from "lucide-react";
import { useState } from "react";

const Matching = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchingProgress, setMatchingProgress] = useState(0);

  const matchingParameters = [
    { name: "Skills Weight", value: [75], min: 0, max: 100 },
    { name: "Location Preference", value: [60], min: 0, max: 100 },
    { name: "CGPA Threshold", value: [70], min: 0, max: 100 },
    { name: "Diversity Factor", value: [85], min: 0, max: 100 },
  ];

  const recentMatches = [
    {
      student: "Rajesh Kumar",
      company: "TCS",
      score: 96,
      factors: ["Skills: 95%", "Location: 90%", "Diversity: 100%"]
    },
    {
      student: "Priya Singh",
      company: "ONGC",
      score: 94,
      factors: ["Skills: 92%", "Location: 88%", "Diversity: 100%"]
    },
    {
      student: "Amit Sharma",
      company: "Infosys",
      score: 92,
      factors: ["Skills: 88%", "Location: 95%", "Diversity: 90%"]
    }
  ];

  const algorithmStats = [
    { label: "Processing Speed", value: "2.3k/min", icon: Zap },
    { label: "Match Accuracy", value: "94.2%", icon: Target },
    { label: "Success Rate", value: "97.8%", icon: TrendingUp },
    { label: "Conflicts Resolved", value: "156", icon: Settings }
  ];

  const handleStartMatching = () => {
    setIsProcessing(true);
    // Simulate processing
    const interval = setInterval(() => {
      setMatchingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            AI Matching Engine
          </h1>
          <p className="text-muted-foreground">
            Intelligent allocation system powered by advanced machine learning algorithms
          </p>
        </div>

        <Tabs defaultValue="engine" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="engine">Matching Engine</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="engine" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Control Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Algorithm Parameters
                  </CardTitle>
                  <CardDescription>
                    Fine-tune the matching algorithm weights
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {matchingParameters.map((param, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <Label>{param.name}</Label>
                        <span className="text-sm text-muted-foreground">
                          {param.value[0]}%
                        </span>
                      </div>
                      <Slider
                        value={param.value}
                        onValueChange={(value) => {
                          // Update parameter value
                        }}
                        min={param.min}
                        max={param.max}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t">
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleStartMatching}
                        disabled={isProcessing}
                        className="flex-1"
                      >
                        {isProcessing ? (
                          <>
                            <Pause className="h-4 w-4 mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Run Algorithm
                          </>
                        )}
                      </Button>
                      <Button variant="outline">
                        Reset Parameters
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Processing Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Processing Status
                  </CardTitle>
                  <CardDescription>
                    Real-time algorithm execution monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">
                      {isProcessing ? `${matchingProgress}%` : "Ready"}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {isProcessing ? "Processing applications..." : "Algorithm ready to run"}
                    </div>
                    {isProcessing && (
                      <Progress value={matchingProgress} className="w-full" />
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Applications Processed</span>
                      <span className="font-medium">
                        {isProcessing ? Math.round(matchingProgress * 128.47) : "0"}/12,847
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Matches Generated</span>
                      <span className="font-medium">
                        {isProcessing ? Math.round(matchingProgress * 89.23) : "0"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Conflicts Detected</span>
                      <span className="font-medium text-warning">
                        {isProcessing ? Math.round(matchingProgress * 0.12) : "0"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Time</span>
                      <span className="font-medium">
                        {isProcessing ? `${Math.max(0, 10 - Math.round(matchingProgress/10))} min` : "--"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Algorithm Performance */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {algorithmStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </CardTitle>
                      <Icon className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Latest Matching Results</CardTitle>
                <CardDescription>
                  AI-generated matches from the latest algorithm run
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match, index) => (
                    <div key={index} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="font-medium">{match.student}</div>
                          <div className="text-sm text-muted-foreground">{match.company}</div>
                        </div>
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          {match.score}% Match
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {match.factors.map((factor, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Algorithm Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Match Quality Score</span>
                        <span>94.2%</span>
                      </div>
                      <Progress value={94.2} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Student Satisfaction</span>
                        <span>97.8%</span>
                      </div>
                      <Progress value={97.8} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Company Satisfaction</span>
                        <span>92.1%</span>
                      </div>
                      <Progress value={92.1} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Diversity Compliance</span>
                        <span>89.5%</span>
                      </div>
                      <Progress value={89.5} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Processing Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">12,847</div>
                      <div className="text-sm text-muted-foreground">Total Applications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">8,923</div>
                      <div className="text-sm text-muted-foreground">Successful Matches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warning">2,391</div>
                      <div className="text-sm text-muted-foreground">Pending Review</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-muted-foreground">1,533</div>
                      <div className="text-sm text-muted-foreground">In Queue</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Matching;