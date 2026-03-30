import Layout from "@/components/Layout";
import { siteConfig } from "@/data/config";
import { Shield, Users, Target, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
    { icon: <Shield className="w-8 h-8" />, title: "Integrity", desc: "We operate with transparency and ethical conduct in every interaction." },
    { icon: <Users className="w-8 h-8" />, title: "Accessibility", desc: "Legal help should be within reach for every citizen, not just the privileged." },
    { icon: <Target className="w-8 h-8" />, title: "Precision", desc: "Every document is crafted with clarity, accuracy, and legal soundness." },
    { icon: <Award className="w-8 h-8" />, title: "Excellence", desc: "We continually raise the standard of legal drafting and client experience." },
];

const team = [
    { name: "Senior Legal Drafter", role: "RTI & Govt. Complaints Specialist", init: "SL" },
    { name: "Consumer Rights Expert", role: "Consumer Court & RERA Cases", init: "CR" },
    { name: "Cyber Law Consultant", role: "Digital Crime & Cyber Complaints", init: "CL" },
    { name: "Labour Law Expert", role: "Employment & Labour Disputes", init: "LL" },
];

const About = () => (
    <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Our Story</span>
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    About CUBA Legal
                </h1>
                <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
                    {siteConfig.fullName} — empowering citizens through accessible, professional legal drafting services.
                </p>
            </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="section-title mb-6">Our Mission</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            CUBA Legal Services was founded with a singular mission: to bridge the gap between citizens and the legal system. Too many people struggle to access justice simply because they don't know how to draft the right document or file the right complaint.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            We provide expert-quality legal drafting at affordable rates, covering everything from RTI applications to consumer court complaints, helping ordinary citizens assert their rights effectively.
                        </p>
                        <ul className="space-y-3">
                            {["Professional drafting by verified legal experts", "Fast turnaround — same-day delivery available", "Comprehensive coverage across all legal departments", "Secure, confidential, and client-focused service"].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-primary/5 rounded-3xl p-10 border border-primary/10">
                        <div className="text-7xl mb-6">⚖️</div>
                        <blockquote className="text-2xl font-heading font-bold text-primary leading-tight mb-6">
                            "Justice is not a privilege. It's a right."
                        </blockquote>
                        <p className="text-muted-foreground font-medium">
                            — CUBA Legal Services
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-white mb-16 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((v, i) => (
                        <div key={v.title} className="flex flex-col items-center text-center group animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="mb-6 p-5 rounded-2xl bg-white/5 border border-white/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:-translate-y-2">
                                {v.icon}
                            </div>
                            <h4 className="font-heading text-xl font-bold mb-3">{v.title}</h4>
                            <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-4 text-center">Our Expert Team</h2>
                <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 text-lg">
                    Verified professionals dedicated to delivering precise legal drafting across all domains.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <div key={member.name} className="premium-card text-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center font-bold text-2xl text-primary mx-auto mb-6 border-2 border-primary/10">
                                {member.init}
                            </div>
                            <h4 className="font-heading text-lg font-bold text-primary mb-2">{member.name}</h4>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Explore our full range of legal drafting services and book your consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/services">
                        <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-7 text-lg font-bold rounded-xl">
                            View All Services <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-bold rounded-xl">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    </Layout>
);

export default About;
