import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InsidersOnly = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if already authenticated in session
  useEffect(() => {
    const auth = sessionStorage.getItem("insiders_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }

    document.title = "Insiders Only - Infinity Network Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Internal hub for Infinity Network Studio employees and owners."
    );
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple password check - in production, this should be backend-validated
    // For now, using a simple password (user should change this)
    if (password === "InfinityInsiders2025") {
      sessionStorage.setItem("insiders_auth", "true");
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome to the Insiders Hub",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
    setPassword("");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("insiders_auth");
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl text-center">Insiders Only</CardTitle>
              <CardDescription className="text-center">
                Enter the password to access internal company information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Access Hub"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Insiders Hub</h1>
              <p className="text-muted-foreground">
                Internal information for employees and owners
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Updates</CardTitle>
                <CardDescription>Latest news and announcements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Welcome to the Insiders Hub. This is your central location for company
                  updates, internal documentation, and team resources.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Important links and documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add your internal resources, documentation, and important links here.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Directory</CardTitle>
                <CardDescription>Connect with your colleagues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Team contact information and organizational structure coming soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsidersOnly;
