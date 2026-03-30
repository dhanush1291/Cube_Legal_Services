import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { Shield, Zap, ThumbsUp, Globe, FileText, ArrowRight } from "lucide-react";

const featuredIds = ["rti-services", "police-complaints", "cyber-crime", "legal-notice", "consumer-court", "women-commission", "revenue-complaints", "rera"];
const featured = services.filter((s) => featuredIds.includes(s.id));

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "33", label: "Service Categories" },
  { value: "390+", label: "Services Available" },
  { value: "100%", label: "Online Support" },
];

const whyChoose = [
  { icon: <ThumbsUp className="w-6 h-6" />, text: "Affordable services" },
  { icon: <Zap className="w-6 h-6" />, text: "Quick response" },
  { icon: <FileText className="w-6 h-6" />, text: "Easy process" },
  { icon: <Globe className="w-6 h-6" />, text: "Online support" },
  { icon: <Shield className="w-6 h-6" />, text: "Clear & professional drafting" },
];

const testimonials = [
  { text: "Quick and professional drafting service.", source: "RTI Client" },
  { text: "Very helpful for RTI applications.", source: "Hyderabad" },
  { text: "Affordable and easy process.", source: "AP Client" },
];

const blogPreviews = [
  { title: "How to File RTI Application in India", excerpt: "A step-by-step guide to filing RTI applications with any government department." },
  { title: "How to Send Legal Notice", excerpt: "Understand when and how to send a legal notice for disputes." },
  { title: "Property Dispute Solutions", excerpt: "Common property disputes and legal remedies available in India." },
];

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-3">CUBA Legal Services</h1>
        <p className="text-secondary font-heading text-lg md:text-xl mb-2">Complaint Utility Base Assistance</p>
        <p className="text-primary-foreground/80 text-lg mb-2 font-medium">Your Legal Support, Simplified — Drafting to Justice</p>
        <p className="max-w-2xl mx-auto text-primary-foreground/70 mb-8 text-sm md:text-base">
          We provide professional and reliable legal drafting services to help individuals handle legal matters easily. From legal notices to RTI applications and complaints, we ensure clarity, accuracy, and quick service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="gold" asChild>
            <Link to="/book">Book Service Now</Link>
          </Button>
          <Button size="lg" variant="whatsapp" asChild>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-bold font-heading text-primary">{s.value}</p>
              <p className="text-sm text-primary/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Services */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-10">Our Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((svc) => (
            <Link key={svc.id} to={`/services/${svc.id}`} className="group bg-card rounded-lg border p-6 hover:shadow-lg hover:border-secondary transition-all">
              <span className="text-3xl mb-3 block">{svc.emoji}</span>
              <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-secondary transition-colors">{svc.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{svc.shortDesc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/services" className="gap-2">View All 33 Services <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChoose.map((item) => (
            <div key={item.text} className="flex flex-col items-center text-center p-6 bg-card rounded-lg border">
              <div className="text-secondary mb-3">{item.icon}</div>
              <p className="font-medium text-card-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.source} className="bg-card rounded-lg border p-6">
              <p className="text-card-foreground italic mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold text-secondary">— {t.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog Preview */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-10">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPreviews.map((b) => (
            <div key={b.title} className="bg-card rounded-lg border p-6">
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{b.excerpt}</p>
              <Link to="/blog" className="text-secondary text-sm font-semibold hover:underline">Read More →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">Need Legal Help? Contact Us Today</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button size="lg" variant="gold" asChild>
            <Link to="/book">Book Service Now</Link>
          </Button>
          <Button size="lg" variant="whatsapp" asChild>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
