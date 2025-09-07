import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import infinityLogo from "@/assets/infinity-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Talent", href: "/talent" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={infinityLogo} 
              alt="Infinity Network Studio" 
              className="h-12 w-auto object-contain"
            />
            <span className="font-bold text-lg text-primary hidden sm:block">
              Infinity Network Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-foreground hover:text-secondary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Button variant="accent" size="sm" className="mt-4 w-fit">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;