import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { services } from "@/data/services";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, ArrowRight, Zap } from "lucide-react";

const steps = [
    { num: 1, title: "Select Your Service", desc: "Choose from 30+ legal drafting categories." },
    { num: 2, title: "Share Your Details", desc: "Tell us your name, contact, and case details." },
    { num: 3, title: "Make Payment", desc: "Secure and affordable payment via your preferred mode." },
    { num: 4, title: "Receive Your Document", desc: "Get your professionally drafted document delivered fast." },
];

const BookService = () => {
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: searchParams.get("service") || "",
        subService: searchParams.get("subService") || "",
        description: "",
        urgency: "standard",
    });

    useEffect(() => {
        const service = searchParams.get("service");
        const subService = searchParams.get("subService");
        if (service || subService) {
            setFormData(prev => ({
                ...prev,
                service: service || prev.service,
                subService: subService || prev.subService
            }));
        }
    }, [searchParams]);

    const [submitted, setSubmitted] = useState(false);

    const selectedService = services.find((s) => s.id === formData.service);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "service" ? { subService: "" } : {}),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*New Service Booking — CUBA Legal Services*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Service:* ${selectedService?.name || formData.service}
*Sub-Service:* ${formData.subService || "Not specified"}
*Urgency:* ${formData.urgency === "express" ? "⚡ Express (Same Day)" : "Standard"}
*Details:* ${formData.description}`;

        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Layout>
                <section className="min-h-[60vh] flex items-center justify-center bg-background py-24">
                    <div className="text-center max-w-md mx-auto px-4">
                        <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-12 h-12 text-secondary" />
                        </div>
                        <h1 className="font-heading text-4xl font-bold text-primary mb-4">Booking Initiated!</h1>
                        <p className="text-muted-foreground text-lg mb-8">
                            Your request has been sent via WhatsApp. Our team will confirm your booking and next steps shortly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="whatsapp" className="px-8 py-6 font-bold rounded-xl shadow-lg shadow-whatsapp/10">
                                    <MessageCircle className="w-5 h-5 mr-2" /> Open WhatsApp
                                </Button>
                            </a>
                            <Button variant="outline" onClick={() => setSubmitted(false)} className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 font-bold rounded-xl">
                                Book Another
                            </Button>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-20 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Book Now</span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Book a Legal Service
                    </h1>
                    <p className="max-w-xl mx-auto text-primary-foreground/70 text-lg">
                        Fill in the form below and we'll reach out via WhatsApp to confirm your booking and discuss your requirements.
                    </p>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 bg-secondary/5 border-b border-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {steps.map((step) => (
                            <div key={step.num} className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-heading font-bold text-lg mb-3">
                                    {step.num}
                                </div>
                                <h4 className="font-heading font-bold text-primary text-sm mb-1">{step.title}</h4>
                                <p className="text-xs text-muted-foreground">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="premium-card p-10">
                        <h2 className="font-heading text-2xl font-bold text-primary mb-8">Booking Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Full Name *</label>
                                <input
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Phone Number *</label>
                                <input
                                    name="phone"
                                    required
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Email (optional)</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Service Category *</label>
                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                >
                                    <option value="">Select a service...</option>
                                    {services.map((s) => (
                                        <option key={s.id} value={s.id}>{s.emoji} {s.name}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sub-Service */}
                            {selectedService && (
                                <div>
                                    <label className="block text-sm font-bold text-foreground mb-2">Specific Document / Sub-Service</label>
                                    <select
                                        name="subService"
                                        value={formData.subService}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                    >
                                        <option value="">Select specific document...</option>
                                        {selectedService.subServices.map((sub) => (
                                            <option key={sub} value={sub}>{sub}</option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Urgency */}
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-3">Urgency</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: "standard", label: "Standard", desc: "2–3 business days", icon: null },
                                        { value: "express", label: "Express", desc: "Same day delivery", icon: <Zap className="w-4 h-4" /> },
                                    ].map((opt) => (
                                        <label
                                            key={opt.value}
                                            className={`flex flex-col gap-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.urgency === opt.value
                                                ? "border-secondary bg-secondary/5 text-secondary"
                                                : "border-muted hover:border-secondary/40"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="urgency"
                                                value={opt.value}
                                                checked={formData.urgency === opt.value}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <div className="flex items-center gap-2 font-bold text-sm">
                                                {opt.icon}{opt.label}
                                            </div>
                                            <span className="text-xs text-muted-foreground">{opt.desc}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Details */}
                            <div>
                                <label className="block text-sm font-bold text-foreground mb-2">Case Description *</label>
                                <textarea
                                    name="description"
                                    required
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Briefly describe your issue and what you need drafted..."
                                    className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground resize-none"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-secondary text-white hover:bg-secondary/90 py-7 text-lg font-bold rounded-xl shadow-lg shadow-secondary/20">
                                <MessageCircle className="w-5 h-5 mr-2" /> Book via WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <p className="text-center text-xs text-muted-foreground">
                                Clicking submit will open WhatsApp with your booking details pre-filled for our team.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BookService;
