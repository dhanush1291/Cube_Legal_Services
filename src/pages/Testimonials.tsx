import Layout from "@/components/Layout";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        text: "CUBA Legal Services helped me draft my RTI application within hours. The document was precise and professionally worded. The information I received from the government department was exactly what I needed for my case.",
        source: "Ravi Kumar",
        location: "Hyderabad, Telangana",
        service: "RTI Services",
        rating: 5,
    },
    {
        text: "I was struggling with a consumer complaint against a builder for years. CUBA helped me draft a proper complaint for the Consumer Forum and now my case is progressing well. Truly grateful.",
        source: "Priya Sharma",
        location: "Bangalore, Karnataka",
        service: "Consumer Court",
        rating: 5,
    },
    {
        text: "Professional, fast, and affordable. They drafted my police complaint to the SP and within a week, the FIR was registered. Their document was cited by the officer as well-structured.",
        source: "Amir Khan",
        location: "Vijayawada, AP",
        service: "Police Complaints",
        rating: 5,
    },
    {
        text: "My RERA complaint against a builder who delayed my flat by 3 years was drafted brilliantly by CUBA Legal. The team was responsive and guided me through every step.",
        source: "Saritha Reddy",
        location: "Warangal, Telangana",
        service: "RERA",
        rating: 5,
    },
    {
        text: "I was a victim of cyber fraud and didn't know how to report it properly. CUBA Legal drafted the complaint for the cyber crime portal and the bank. My money was recovered within a month!",
        source: "Lakshmi Devi",
        location: "Chennai, Tamil Nadu",
        service: "Cyber Crime",
        rating: 5,
    },
    {
        text: "The legal notice for my property dispute was drafted perfectly. It immediately got the other party to respond and we're now in mediation. Highly recommend their services.",
        source: "Suresh Goud",
        location: "Nizamabad, Telangana",
        service: "Legal Notice",
        rating: 5,
    },
    {
        text: "As a daily wage worker, I couldn't afford a lawyer. CUBA Legal helped me draft a complaint to the Labour Commissioner about unpaid wages. My issue was resolved quickly.",
        source: "Ramesh Babu",
        location: "Karimnagar, Telangana",
        service: "Labour Department",
        rating: 5,
    },
    {
        text: "My RTI application to the municipal corporation was drafted so professionally that I received a detailed response within 20 days. Excellent service!",
        source: "Kavitha Nair",
        location: "Visakhapatnam, AP",
        service: "RTI Services",
        rating: 5,
    },
    {
        text: "I filed a complaint to the Women's Commission through CUBA Legal and received immediate attention. The support team was empathetic and the document was legally precise.",
        source: "Meera Kumari",
        location: "Guntur, AP",
        service: "Women Commission",
        rating: 5,
    },
];

const stats = [
    { value: "500+", label: "Cases Handled" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "30+", label: "Service Categories" },
    { value: "2+", label: "Years of Service" },
];

const Testimonials = () => (
    <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-24 md:py-28 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Client Voices</span>
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    Testimonials
                </h1>
                <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
                    Real stories from citizens who reclaimed their rights with our help.
                </p>
            </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center text-white">
                            <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                            <div className="text-white/70 font-medium text-sm uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="section-title mb-16 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.source}
                            className="premium-card flex flex-col relative animate-fade-in"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            <Quote className="w-12 h-12 text-secondary/10 absolute top-6 right-6" />
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {Array.from({ length: t.rating }).map((_, s) => (
                                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                                ))}
                            </div>
                            {/* Service Badge */}
                            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4 self-start">
                                {t.service}
                            </span>
                            {/* Quote */}
                            <p className="text-foreground text-base leading-relaxed mb-8 flex-1 font-medium italic">
                                "{t.text}"
                            </p>
                            {/* Author */}
                            <div className="flex items-center gap-4 border-t border-muted pt-6">
                                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary text-lg border border-primary/10">
                                    {t.source.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary">{t.source}</p>
                                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{t.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
                <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
                    Let us help you draft the right document and take the right step towards justice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/book">
                        <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-10 py-7 text-lg font-bold rounded-xl">
                            Book a Service <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/services">
                        <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-7 text-lg font-bold rounded-xl">
                            View All Services
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    </Layout>
);

export default Testimonials;
