import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/config";

const footerServices = services.slice(0, 8);

const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-24 pb-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">
              Professional Legal-Tech Assist
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs font-medium">
            Where professional legal expertise meets digital efficiency. Reliable drafting support for individuals and businesses across India.
          </p>
          <div className="flex gap-4">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Ecosystem</h4>
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "All Services" },
              { to: "/blog", label: "Legal Insights" },
              { to: "/contact", label: "Contact Terminal" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/60 hover:text-white transition-all flex items-center gap-2 group"
              >
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Popular Modules</h4>
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {footerServices.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="text-white/60 hover:text-white transition-all flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-secondary/30 group-hover:bg-secondary transition-colors" />
                {s.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Direct Access</h4>
          <div className="space-y-6">
            <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/30 mb-0.5">Secure Line</p>
                <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{siteConfig.phone}</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-white/30 mb-0.5">Operations</p>
                <p className="text-sm font-medium text-white/80">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
            © {siteConfig.currentYear} CUBA Legal Services. Digital Justice Node.
          </p>
          <div className="flex gap-6 opacity-40">
            <ShieldCheck className="w-5 h-5" />
            <Zap className="w-5 h-5" />
            <Globe className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
