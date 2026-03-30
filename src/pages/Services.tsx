import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

const Services = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-secondary font-heading text-lg">33 Service Categories — 390+ Services</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <Link key={svc.id} to={`/services/${svc.id}`} className="group bg-card rounded-lg border p-6 hover:shadow-lg hover:border-secondary transition-all">
              <span className="text-3xl mb-3 block">{svc.emoji}</span>
              <h3 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-secondary transition-colors">{svc.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">{svc.shortDesc}</p>
              <span className="text-secondary text-sm font-semibold inline-flex items-center gap-1">
                View Services <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
