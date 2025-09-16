import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Users, MapPin, BookOpen, Award, Search, Filter } from "lucide-react";
import { useState } from "react";

const Students = () => {
  const [view, setView] = useState<"register" | "list">("list");

  const students = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      education: "B.Tech Computer Science",
      skills: ["Python", "React", "Machine Learning"],
      location: "Bihar",
      category: "Rural",
      cgpa: 8.5,
      status: "Pending"
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.singh@email.com",
      education: "B.E. Electronics",
      skills: ["Java", "IoT", "Data Analytics"],
      location: "Uttar Pradesh",
      category: "OBC",
      cgpa: 9.1,
      status: "Matched"
    },
    {
      id: 3,
      name: "Amit Sharma",
      email: "amit.sharma@email.com",
      education: "BCA",
      skills: ["JavaScript", "Node.js", "MongoDB"],
      location: "Rajasthan",
      category: "General",
      cgpa: 7.8,
      status: "Under Review"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              Student Management Portal
            </h1>
            <p className="text-muted-foreground">
              Manage student applications and track internship allocations
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
            >
              View Applications
            </Button>
            <Button 
              variant={view === "register" ? "default" : "outline"}
              onClick={() => setView("register")}
            >
              New Registration
            </Button>
          </div>
        </div>

        {view === "register" ? (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Student Registration Form</CardTitle>
              <CardDescription>
                Complete your profile for the PM Internship Scheme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="education">Current Education *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="btech">B.Tech</SelectItem>
                      <SelectItem value="be">B.E.</SelectItem>
                      <SelectItem value="bca">BCA</SelectItem>
                      <SelectItem value="bsc">B.Sc</SelectItem>
                      <SelectItem value="bcom">B.Com</SelectItem>
                      <SelectItem value="ba">B.A.</SelectItem>
                      <SelectItem value="mtech">M.Tech</SelectItem>
                      <SelectItem value="mca">MCA</SelectItem>
                      <SelectItem value="mba">MBA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cgpa">CGPA/Percentage *</Label>
                  <Input id="cgpa" placeholder="8.5 or 85%" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                      <SelectItem value="bihar">Bihar</SelectItem>
                      <SelectItem value="mp">Madhya Pradesh</SelectItem>
                      <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District *</Label>
                  <Input id="district" placeholder="Enter your district" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Social Category *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                    <SelectItem value="ews">EWS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Technical Skills *</Label>
                <Textarea 
                  id="skills" 
                  placeholder="List your technical skills (e.g., Python, Java, React, Machine Learning, Data Analytics)"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferences">Sector Preferences *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["IT & Software", "Manufacturing", "Finance", "Healthcare", "Retail", "Government"].map((sector) => (
                    <div key={sector} className="flex items-center space-x-2">
                      <Checkbox id={sector} />
                      <Label htmlFor={sector} className="text-sm">{sector}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Previous Experience (Optional)</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Describe any previous internships, projects, or work experience"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions of the PM Internship Scheme
                </Label>
              </div>

              <Button size="lg" className="w-full">
                Submit Application
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search students by name, email, or skills..." className="pl-10" />
                  </div>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="matched">Matched</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="rural">Rural</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student List */}
            <div className="grid gap-4">
              {students.map((student) => (
                <Card key={student.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{student.name}</h3>
                        <p className="text-muted-foreground">{student.email}</p>
                      </div>
                      <Badge 
                        variant={
                          student.status === "Matched" ? "default" :
                          student.status === "Pending" ? "secondary" : "outline"
                        }
                      >
                        {student.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{student.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{student.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">CGPA: {student.cgpa}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Category: {student.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm">
                        Process Application
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Students;