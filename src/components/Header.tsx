import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, navGroups } from "@/data/services";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col" onClick={() => setMobileOpen(false)}>
            <span className="font-heading text-xl md:text-2xl font-bold text-primary-foreground">
              CUBA Legal Services
            </span>
            <span className="text-xs text-secondary font-body hidden sm:block">
              Complaint Utility Base Assistance
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/") ? "bg-secondary/20 text-secondary" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}>
              Home
            </Link>
            <Link to="/about" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/about") ? "bg-secondary/20 text-secondary" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}>
              About
            </Link>

            {/* Service Dropdowns */}
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors">
                  {group.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDropdown === group.label && (
                  <div className="absolute top-full left-0 w-64 bg-card rounded-lg shadow-xl border py-2 z-50">
                    {group.items.map((id) => {
                      const svc = services.find((s) => s.id === id);
                      if (!svc) return null;
                      return (
                        <Link
                          key={id}
                          to={`/services/${id}`}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {svc.emoji} {svc.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <Link to="/services" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/services") ? "bg-secondary/20 text-secondary" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}>
              All Services
            </Link>
            <Link to="/blog" className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/blog") ? "bg-secondary/20 text-secondary" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}>
              Blog
            </Link>
            <Link to="/book" className="ml-2 px-4 py-2 text-sm font-semibold bg-secondary text-primary-foreground rounded-md hover:bg-secondary/90 transition-colors">
              Book Service
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "All Services" },
              { to: "/sample-documents", label: "Sample Documents" },
              { to: "/blog", label: "Blog" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/book", label: "Book Service" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {navGroups.map((group) => (
              <div key={group.label}>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground rounded-md"
                  onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === group.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === group.label && (
                  <div className="pl-4 space-y-1">
                    {group.items.map((id) => {
                      const svc = services.find((s) => s.id === id);
                      if (!svc) return null;
                      return (
                        <Link
                          key={id}
                          to={`/services/${id}`}
                          className="block px-4 py-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {svc.emoji} {svc.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
