import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Building2, MapPin, Users, Briefcase, Search, Plus } from "lucide-react";
import { useState } from "react";

const Companies = () => {
  const [view, setView] = useState("list");

  const companies = [
    {
      id: 1,
      name: "Tata Consultancy Services",
      sector: "IT & Software",
      location: "Mumbai, Bangalore, Chennai",
      capacity: 500,
      filled: 342,
      requirements: ["B.Tech", "BCA", "MCA"],
      status: "Active"
    },
    {
      id: 2,
      name: "Infosys Limited",
      sector: "IT & Software",
      location: "Bangalore, Hyderabad, Pune",
      capacity: 400,
      filled: 298,
      requirements: ["B.Tech", "B.E.", "MCA"],
      status: "Active"
    },
    {
      id: 3,
      name: "Mahindra & Mahindra",
      sector: "Manufacturing",
      location: "Mumbai, Chennai, Pune",
      capacity: 150,
      filled: 89,
      requirements: ["B.Tech Mechanical", "B.E. Automobile"],
      status: "Active"
    },
    {
      id: 4,
      name: "Bharat Electronics Limited",
      sector: "Electronics & Defense",
      location: "Bangalore, Ghaziabad, Pune",
      capacity: 300,
      filled: 210,
      requirements: ["B.Tech", "B.E. Electronics", "M.Sc Physics"],
      status: "Active"
    },
    {
      id: 5,
      name: "Oil and Natural Gas Corporation (ONGC)",
      sector: "Oil & Gas",
      location: "Dehradun, Mumbai, Ahmedabad",
      capacity: 250,
      filled: 180,
      requirements: ["B.Tech Petroleum", "B.E. Chemical", "M.Sc Geology"],
      status: "Active"
    },
    {
      id: 6,
      name: "Indian Railways",
      sector: "Transport & Infrastructure",
      location: "Delhi, Kolkata, Chennai",
      capacity: 400,
      filled: 320,
      requirements: ["B.Tech Civil", "B.E. Mechanical"],
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              Company Management Portal
            </h1>
            <p className="text-muted-foreground">
              Register companies and manage internship opportunities
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
            >
              View Companies
            </Button>
            <Button 
              variant={view === "register" ? "default" : "outline"}
              onClick={() => setView("register")}
            >
              Register Company
            </Button>
          </div>
        </div>

        {view === "register" ? (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Company Registration Form</CardTitle>
              <CardDescription>
                Register your organization for the PM Internship Scheme
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <Input id="companyName" placeholder="Enter company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Company Website</Label>
                  <Input id="website" placeholder="https://www.company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sector">Industry Sector *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it">IT & Software</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Company Size *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50)</SelectItem>
                      <SelectItem value="small">Small (51-200)</SelectItem>
                      <SelectItem value="medium">Medium (201-1000)</SelectItem>
                      <SelectItem value="large">Large (1000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="locations">Office Locations *</Label>
                <Textarea 
                  id="locations" 
                  placeholder="List all office locations where internships will be offered"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Total Internship Capacity *</Label>
                  <Input id="capacity" type="number" placeholder="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Internship Duration (months) *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 months</SelectItem>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Educational Requirements *</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Specify educational qualifications and minimum requirements"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills</Label>
                <Textarea 
                  id="skills" 
                  placeholder="List technical and soft skills preferred for interns"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stipend">Stipend Amount (₹/month)</Label>
                <Input id="stipend" type="number" placeholder="15000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Brief description of your company and internship program"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Person *</Label>
                  <Input id="contact" placeholder="HR Manager Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email *</Label>
                  <Input id="contactEmail" type="email" placeholder="hr@company.com" />
                </div>
              </div>

              <Button size="lg" className="w-full">
                Register Company
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
                    <Input placeholder="Search companies by name or sector..." className="pl-10" />
                  </div>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="All Sectors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sectors</SelectItem>
                        <SelectItem value="it">IT & Software</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company List */}
            <div className="grid gap-4">
              {companies.map((company) => (
                <Card key={company.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{company.name}</h3>
                        <p className="text-muted-foreground">{company.sector}</p>
                      </div>
                      <Badge variant="default">
                        {company.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{company.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          Capacity: {company.filled}/{company.capacity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {Math.round((company.filled / company.capacity) * 100)}% Filled
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {company.requirements.map((req, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">
                        Manage Positions
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

export default Companies;