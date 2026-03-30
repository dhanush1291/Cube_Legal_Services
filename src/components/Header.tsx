import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { services, navGroups } from "@/data/services";
import { siteConfig } from "@/data/config";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-primary py-4 text-primary-foreground"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex flex-col group transition-transform hover:scale-105"
            onClick={() => setMobileOpen(false)}
          >
            <span className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
              {siteConfig.name}
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:block transition-colors ${scrolled ? "text-secondary" : "text-secondary/80"}`}>
              Professional Legal Drafting
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${scrolled ? (isActive("/") ? "bg-primary/5 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted") : (isActive("/") ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/10")}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${scrolled ? (isActive("/about") ? "bg-primary/5 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted") : (isActive("/about") ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/10")}`}
            >
              About
            </Link>

            {/* Service Dropdowns */}
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative group/dropdown"
                onMouseEnter={() => setOpenDropdown(group.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${scrolled ? "text-muted-foreground hover:text-primary hover:bg-muted" : "text-white/80 hover:text-white hover:bg-white/10"}`}>
                  {group.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === group.label ? "rotate-180" : ""}`} />
                </button>
                <div className={`absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-border py-3 z-50 transition-all duration-300 transform origin-top ${openDropdown === group.label ? "opacity-100 scale-100 translate-y-2" : "opacity-0 scale-95 pointer-events-none"}`}>
                  <div className="px-4 pb-2 mb-2 border-b border-muted">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{group.label} Modules</p>
                  </div>
                  {group.items.map((id) => {
                    const svc = services.find((s) => s.id === id);
                    if (!svc) return null;
                    return (
                      <Link
                        key={id}
                        to={`/services/${id}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-all group/item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="text-lg group-hover/item:scale-125 transition-transform">{svc.emoji}</span>
                        <span className="font-medium">{svc.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            <Link
              to="/services"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${scrolled ? (isActive("/services") ? "bg-primary/5 text-primary" : "text-muted-foreground hover:text-primary hover:bg-muted") : (isActive("/services") ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/10")}`}
            >
              Services
            </Link>

            <div className="h-6 w-px bg-current opacity-10 mx-2" />

            <Link to="/book" className="ml-2">
              <Button size="sm" variant={scrolled ? "default" : "secondary"} className="font-bold shadow-lg">
                Launch Sequence
              </Button>
            </Link>
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-4 ml-6">
            <a href={`tel:${siteConfig.phoneRaw}`} className={`p-2 rounded-full transition-colors ${scrolled ? "bg-muted text-primary hover:bg-primary hover:text-white" : "bg-white/10 text-white hover:bg-white/20"}`}>
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <span className="font-heading text-xl font-bold text-primary">{siteConfig.name}</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-primary">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-6 space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "All Services" },
              { to: "/blog", label: "Legal Insights" },
              { to: "/book", label: "Book Service" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 text-lg font-semibold rounded-xl transition-all ${isActive(link.to) ? "bg-primary text-white" : "text-foreground hover:bg-primary/5"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 pb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-4 mb-2">Service Modules</p>
              {navGroups.map((group) => (
                <div key={group.label} className="mb-2">
                  <p className="px-4 py-2 text-sm font-bold text-secondary">{group.label}</p>
                  <div className="space-y-1">
                    {group.items.map((id) => {
                      const svc = services.find((s) => s.id === id);
                      if (!svc) return null;
                      return (
                        <Link
                          key={id}
                          to={`/services/${id}`}
                          className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{svc.emoji}</span>
                          <span>{svc.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </nav>
          <div className="p-6 border-t bg-muted/30">
            <Button className="w-full py-6 text-lg font-bold" asChild>
              <Link to="/book" onClick={() => setMobileOpen(false)}>Start Drafting</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
