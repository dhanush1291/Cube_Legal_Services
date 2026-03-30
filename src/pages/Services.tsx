import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { services, navGroups } from "@/data/services";
import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";

const Services = () => {
    const [query, setQuery] = useState("");

    const filtered = query.trim()
        ? services.filter(
            (s) =>
                s.name.toLowerCase().includes(query.toLowerCase()) ||
                s.shortDesc.toLowerCase().includes(query.toLowerCase())
        )
        : null;

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-24 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791055366-0d553381ad47?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Full Directory</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Legal Services
                    </h1>
                    <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg mb-10">
                        Professional drafting for every legal need. Select a service to get started.
                    </p>
                    {/* Search */}
                    <div className="max-w-lg mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/60 text-base"
                            placeholder="Search services..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    {filtered ? (
                        <>
                            <p className="text-muted-foreground mb-10 font-medium">
                                {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{query}"
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filtered.map((svc) => (
                                    <ServiceCard key={svc.id} svc={svc} />
                                ))}
                            </div>
                            {filtered.length === 0 && (
                                <div className="text-center py-24">
                                    <p className="text-4xl mb-4">🔍</p>
                                    <p className="text-xl font-heading font-bold text-primary mb-2">No services found</p>
                                    <p className="text-muted-foreground">Try a different search term.</p>
                                </div>
                            )}
                        </>
                    ) : (
                        navGroups.map((group) => {
                            const groupServices = group.items.map((id) => services.find((s) => s.id === id)!).filter(Boolean);
                            return (
                                <div key={group.label} className="mb-20">
                                    <div className="flex items-center gap-4 mb-10">
                                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">{group.label}</h2>
                                        <div className="flex-1 h-px bg-muted" />
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{groupServices.length} services</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {groupServices.map((svc) => (
                                            <ServiceCard key={svc.id} svc={svc} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Don't see your issue listed?</h2>
                    <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
                        We handle virtually every legal drafting need. Contact us and we'll help you out.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-10 py-7 text-lg font-bold rounded-xl">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

const ServiceCard = ({ svc }: { svc: ReturnType<typeof services[0]["id"]> extends string ? typeof services[0] : typeof services[0] }) => (
    <Link
        to={`/services/${svc.id}`}
        className="premium-card group flex flex-col h-full"
    >
        <div className="flex items-center justify-between mb-5">
            <span className="text-3xl group-hover:scale-125 transition-transform duration-500 transform origin-left">{svc.emoji}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="font-heading text-lg font-bold text-primary mb-2 leading-tight">{svc.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.shortDesc}</p>
        <div className="h-px w-full bg-muted mt-6 mb-4 group-hover:bg-secondary/30 transition-colors" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
            View Details →
        </span>
    </Link>
);

export default Services;
