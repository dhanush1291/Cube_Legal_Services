import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getServiceById, services } from "@/data/services";
import { siteConfig } from "@/data/config";
import { CheckCircle2, ArrowRight, ChevronRight, MessageCircle } from "lucide-react";

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = getServiceById(id || "");

    if (!service) return <Navigate to="/services" replace />;

    const related = service.relatedIds.map((rid) => getServiceById(rid)).filter(Boolean) as typeof services;

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-8">
                        <Link to="/services" className="hover:text-secondary transition-colors font-medium">Services</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-primary-foreground/80">{service.name}</span>
                    </div>
                    <div className="max-w-3xl">
                        <div className="text-6xl mb-6">{service.emoji}</div>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">{service.name}</h1>
                        <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10">{service.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/book">
                                <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-10 py-7 text-lg font-bold rounded-xl shadow-xl shadow-secondary/20">
                                    Book This Service <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="whatsapp" className="px-10 py-7 text-lg font-bold rounded-xl shadow-xl shadow-whatsapp/10">
                                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-Services */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="section-title mb-6">What We Draft</h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
                        Choose from our full range of documents and complaints under {service.name}.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.subServices.map((sub, i) => (
                            <Link
                                key={sub}
                                to="/book"
                                className="group flex items-center gap-4 p-5 rounded-xl border border-muted hover:border-secondary/40 hover:bg-secondary/5 transition-all animate-fade-in"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span className="font-medium text-foreground group-hover:text-secondary transition-colors">{sub}</span>
                                <ChevronRight className="ml-auto w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authorities */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="section-title mb-10">Relevant Authorities</h2>
                    <div className="flex flex-wrap gap-3">
                        {service.authorities.map((auth) => (
                            <span key={auth} className="px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold">
                                {auth}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            {related.length > 0 && (
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="section-title mb-10">Related Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map((rel) => (
                                <Link
                                    key={rel.id}
                                    to={`/services/${rel.id}`}
                                    className="premium-card group flex flex-col"
                                >
                                    <span className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left inline-block">{rel.emoji}</span>
                                    <h3 className="font-heading text-lg font-bold text-primary mb-2">{rel.name}</h3>
                                    <p className="text-sm text-muted-foreground flex-1">{rel.shortDesc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to proceed with {service.name}?</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                        Get your document professionally drafted and delivered securely. Book now or reach us on WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/book">
                            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-7 text-lg font-bold rounded-xl">
                                Book Service
                            </Button>
                        </Link>
                        <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="whatsapp" className="px-10 py-7 text-lg font-bold rounded-xl shadow-xl shadow-whatsapp/10">
                                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
