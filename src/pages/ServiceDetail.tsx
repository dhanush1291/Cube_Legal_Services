import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getServiceById, services } from "@/data/services";
import { Shield, Zap, ThumbsUp, Globe, FileText } from "lucide-react";

const whyPoints = [
  { icon: <ThumbsUp className="w-5 h-5" />, text: "Affordable services" },
  { icon: <Zap className="w-5 h-5" />, text: "Quick response" },
  { icon: <FileText className="w-5 h-5" />, text: "Easy process" },
  { icon: <Globe className="w-5 h-5" />, text: "Online support" },
  { icon: <Shield className="w-5 h-5" />, text: "Clear & professional drafting" },
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || "");

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Button asChild><Link to="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  const related = service.relatedIds.map((rid) => services.find((s) => s.id === rid)).filter(Boolean);
  const whatsappMsg = encodeURIComponent(`Hello CUBA Legal Services, I need help with ${service.name}.`);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block">{service.emoji}</span>
          <h1 className="font-heading text-4xl font-bold mb-2">{service.name}</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">{service.shortDesc}</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-foreground leading-relaxed mb-10">{service.description}</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Our Services Include</h2>
          <ol className="space-y-3 mb-10">
            {service.subServices.map((sub, i) => (
              <li key={i} className="flex gap-3 items-start bg-muted rounded-lg p-4">
                <span className="font-bold text-secondary shrink-0">{i + 1}.</span>
                <span className="text-foreground">{sub}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Where We Help You File</h2>
          <ul className="space-y-2 mb-10">
            {service.authorities.map((auth) => (
              <li key={auth} className="flex items-start gap-2 text-foreground">
                <span className="text-secondary mt-1">•</span> {auth}
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {whyPoints.map((p) => (
              <div key={p.text} className="flex items-center gap-3 bg-muted rounded-lg p-4">
                <span className="text-secondary">{p.icon}</span>
                <span className="text-foreground font-medium">{p.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="gold" asChild>
              <Link to={`/book?service=${service.id}`}>Request This Service</Link>
            </Button>
            <Button size="lg" variant="whatsapp" asChild>
              <a href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => r && (
                <Link key={r.id} to={`/services/${r.id}`} className="bg-card rounded-lg border p-5 hover:shadow-lg hover:border-secondary transition-all">
                  <span className="text-2xl mb-2 block">{r.emoji}</span>
                  <h3 className="font-heading font-semibold text-card-foreground">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{r.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ServiceDetail;
