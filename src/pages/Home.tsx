import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { siteConfig } from "@/data/config";
import { Shield, Zap, ThumbsUp, Globe, FileText, ArrowRight, CheckCircle2, MessageCircle, ChevronRight } from "lucide-react";

const featuredIds = ["rti-services", "police-complaints", "cyber-crime", "legal-notice", "consumer-court", "women-commission", "revenue-complaints", "rera"];
const featured = services.filter((s) => featuredIds.includes(s.id));

const whyChoose = [
  { icon: <ThumbsUp className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Affordable Access", desc: "Quality legal drafting at scalable prices." },
  { icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Rapid Response", desc: "Fast turnaround — standard same-day delivery." },
  { icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Structured Process", desc: "Hassle-free online orchestration from start to finish." },
  { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Distributed Support", desc: "Available nationwide via secure digital channels." },
  { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Professional Rigor", desc: "Clear, authoritative drafting by verified experts." },
];

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground py-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 sm:mb-8 animate-fade-in">
          <span className="text-secondary text-[10px] font-bold uppercase tracking-widest leading-none">Legal Excellence Redefined</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold mb-5 sm:mb-8 leading-tight animate-fade-in delay-100">
          Professional <br /> Drafting Terminal.
        </h1>
        <p className="text-secondary font-heading text-base sm:text-xl md:text-2xl mb-4 sm:mb-8 font-medium animate-fade-in delay-200">
          {siteConfig.tagline}
        </p>
        <p className="max-w-3xl mx-auto text-primary-foreground/70 mb-8 sm:mb-12 text-sm sm:text-base md:text-xl leading-relaxed animate-fade-in delay-300">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center animate-fade-in delay-400 px-4 sm:px-0">
          <Link to="/book" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-8 text-base sm:text-lg font-bold bg-secondary text-white hover:bg-secondary/90 transition-all rounded-xl shadow-2xl shadow-secondary/20 border-none">
              Start Drafting Now
            </Button>
          </Link>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 sm:px-10 py-6 sm:py-8 text-base sm:text-lg font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-all rounded-xl">
              <MessageCircle className="w-5 h-5 mr-2 sm:mr-3" /> Connect Securely
            </Button>
          </a>
        </div>
      </div>
    </section>

    {/* Featured Services */}
    <section className="py-14 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <h2 className="section-title mb-3 sm:mb-4 text-center">Core Modules</h2>
          <p className="text-muted-foreground text-center max-w-xl text-sm sm:text-lg">Select from our most utilized drafting categories for immediate processing.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {featured.map((svc, i) => (
            <Link
              key={svc.id}
              to={`/services/${svc.id}`}
              className="premium-card group animate-fade-in flex flex-col h-full p-4 sm:p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-6">
                <span className="text-2xl sm:text-4xl group-hover:scale-125 transition-transform duration-500 transform origin-left">{svc.emoji}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-heading text-sm sm:text-xl font-bold text-primary mb-1.5 sm:mb-3 leading-tight">{svc.name}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2 sm:line-clamp-none">{svc.shortDesc}</p>
              <div className="h-px w-full bg-muted mt-3 sm:mt-8 mb-2 sm:mb-6 group-hover:bg-secondary/30 transition-colors" />
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-16">
          <Link to="/services">
            <Button variant="outline" size="lg" className="px-8 sm:px-10 py-5 sm:py-7 font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-xl text-sm sm:text-base">
              Explore Full Directory <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-14 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blur-[120px] -z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-white mb-10 sm:mb-16 text-center sm:text-left">Operational Standards</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-10">
          {whyChoose.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center group animate-fade-in last:col-span-2 sm:last:col-span-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:-translate-y-2">
                {item.icon}
              </div>
              <h4 className="font-heading text-sm sm:text-lg font-bold mb-1.5 sm:mb-3">{item.title}</h4>
              <p className="text-[11px] sm:text-sm text-white/50 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 text-white">
        <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-10 opacity-50" />
        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 uppercase tracking-tighter">Ready to Proceed?</h2>
        <p className="max-w-xl mx-auto text-white/80 text-sm sm:text-lg md:text-xl font-medium mb-8 sm:mb-12 px-2">
          Secure, professionally drafted legal modules delivered to your secure channel.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center px-4 sm:px-0">
          <Link to="/book" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-8 sm:px-12 py-6 sm:py-9 text-base sm:text-xl font-bold bg-primary text-white hover:bg-primary/90 transition-all rounded-2xl shadow-2xl shadow-primary/20">
              Book a Service
            </Button>
          </Link>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto px-8 sm:px-12 py-6 sm:py-9 text-base sm:text-xl font-bold transition-all rounded-2xl shadow-xl shadow-whatsapp/20">
              <MessageCircle className="w-5 h-5 mr-2" /> Chat Support
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
