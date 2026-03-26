import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Personal Care Services", href: "/services/personal-care" },
  { name: "Companion Care", href: "/services/companion-care" },
  { name: "Respite Care", href: "/services/respite-care" },
  { name: "Dementia Care", href: "/services/dementia-care" },
  { name: "Post-Operative Care", href: "/services/post-operative-care" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="StoneBridge Community Partners" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading text-sm font-bold text-foreground leading-tight block">STONEBRIDGE<br/>COMMUNITY PARTNERS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/about" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>About</Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card rounded-lg shadow-lg border border-border py-2 min-w-[220px]">
                <Link to="/services" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-primary-light transition-colors border-b border-border mb-1">
                  View All Services
                </Link>
                {services.map((s) => (
                  <Link key={s.href} to={s.href} className="block px-4 py-2 text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/careers" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/careers") ? "text-primary" : "text-foreground"}`}>Careers</Link>
          <Link to="/blog" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/blog") ? "text-primary" : "text-foreground"}`}>Blog</Link>
          <Link to="/refer-us" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/refer-us") ? "text-primary" : "text-foreground"}`}>Refer Us</Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="px-5 py-2 text-sm font-medium border border-border rounded-full hover:bg-muted transition-colors">Contact</Link>
          <Link to="/scheduling" className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">Schedule Care</Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 px-4 space-y-3">
            <Link to="/about" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 py-2 text-sm font-medium w-full">
              Services <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/services" className="block py-1 text-sm font-medium text-primary" onClick={() => setMobileOpen(false)}>View All Services</Link>
                {services.map((s) => (
                  <Link key={s.href} to={s.href} className="block py-1 text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>{s.name}</Link>
                ))}
              </div>
            )}
            <Link to="/careers" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Careers</Link>
            <Link to="/blog" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/refer-us" className="block py-2 text-sm font-medium" onClick={() => setMobileOpen(false)}>Refer Us</Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/contact" className="text-center px-5 py-2 text-sm font-medium border border-border rounded-full" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link to="/scheduling" className="text-center px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full" onClick={() => setMobileOpen(false)}>Schedule Care</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
