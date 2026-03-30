import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-secondary mb-2">CUBA Legal Services</h3>
          <p className="text-sm text-primary-foreground/70 mb-4">Complaint Utility Base Assistance</p>
          <p className="text-sm text-primary-foreground/60">
            ✔ Legal Drafting Experts | ✔ Fast & Reliable
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
              { to: "/book", label: "Book Service" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="block text-primary-foreground/70 hover:text-secondary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="mailto:cubalegalservices@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" /> cubalegalservices@gmail.com
            </a>
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" /> +91 XXXXX XXXXX
            </a>
            <p className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" /> Telangana / Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
        © 2024 CUBA Legal Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
