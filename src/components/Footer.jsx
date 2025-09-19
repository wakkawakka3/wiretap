import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer text-footer-foreground border-t border-footer-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-footer-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🧠</span>
              </div>
              <span className="text-xl font-bold text-footer-foreground">
                PM Internship Engine
              </span>
            </div>
            <p className="text-footer-muted mb-4 text-sm leading-relaxed">
              Revolutionizing internship allocation with AI-powered matching
              algorithms that ensure fair and optimal placement for the PM
              Internship Scheme.
            </p>
            <Badge
              variant="secondary"
              className="bg-footer-accent/10 text-footer-accent border-footer-accent/20"
            >
              AI-Powered Platform
            </Badge>
          </div>

          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/students"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Student Applications
                </a>
              </li>
              <li>
                <a
                  href="/companies"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Company Portal
                </a>
              </li>
              <li>
                <a
                  href="/matching"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  AI Matching Engine
                </a>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Admin Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/analytics"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Analytics & Reports
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/documentation"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/api"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/guidelines"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Allocation Guidelines
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-footer-foreground mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Technical Support
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/accessibility"
                  className="text-footer-muted hover:text-footer-accent transition-colors text-sm"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-footer-border mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-footer-muted text-sm">
            © {currentYear} PM Internship Engine. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-footer-muted">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              System Status: Operational
            </div>

            <div className="flex items-center gap-4 text-sm text-footer-muted">
              <span>Built with AI</span>
              <span>•</span>
              <span>Secure & Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
