import Layout from "@/components/Layout";
import { useState } from "react";
import { siteConfig } from "@/data/config";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, ArrowRight, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: <Phone className="w-6 h-6" />,
        label: "Phone / WhatsApp",
        value: siteConfig.phone,
        href: `tel:${siteConfig.phoneRaw}`,
    },
    {
        icon: <Mail className="w-6 h-6" />,
        label: "Email",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        label: "Service Area",
        value: siteConfig.location,
        href: null,
    },
    {
        icon: <Clock className="w-6 h-6" />,
        label: "Working Hours",
        value: "Mon – Sat, 9:00 AM – 7:00 PM",
        href: null,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `*Contact Enquiry — CUBA Legal Services*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

        window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
        setSubmitted(true);
    };

    return (
        <Layout>
            {/* Hero */}
            <section className="bg-primary text-primary-foreground py-24 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Get in Touch</span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                        Contact Us
                    </h1>
                    <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
                        Have a question or need guidance? Reach out to our team and we'll respond promptly.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Info Panel */}
                        <div>
                            <h2 className="section-title mb-4">Reach Our Team</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                                We're available via WhatsApp, phone, and email. For quickest response, use WhatsApp.
                            </p>

                            <div className="space-y-6 mb-12">
                                {contactInfo.map((ci) => (
                                    <div key={ci.label} className="flex items-start gap-5">
                                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary shrink-0">
                                            {ci.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1">{ci.label}</p>
                                            {ci.href ? (
                                                <a href={ci.href} className="font-bold text-primary hover:text-secondary transition-colors">{ci.value}</a>
                                            ) : (
                                                <p className="font-bold text-primary">{ci.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}?text=Hello!%20I%20need%20help%20with%20a%20legal%20matter.`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" variant="whatsapp" className="px-8 py-7 text-lg font-bold rounded-xl w-full sm:w-auto shadow-xl shadow-whatsapp/10">
                                    <MessageCircle className="w-6 h-6 mr-3" /> Chat on WhatsApp
                                </Button>
                            </a>

                            {/* Trust indicators */}
                            <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Our Commitments</p>
                                {["Confidential & secure communication", "Response within 2 business hours", "Expert guidance, no hidden fees", "Pan-India service via digital channels"].map((item) => (
                                    <div key={item} className="flex items-center gap-3 mb-3">
                                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                                        <span className="text-sm font-medium text-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            {submitted ? (
                                <div className="premium-card p-10 text-center flex flex-col items-center h-full justify-center">
                                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-secondary" />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-primary mb-3">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Your enquiry has been forwarded to our team via WhatsApp. Expect a reply within 2 hours.
                                    </p>
                                    <Button variant="outline" onClick={() => setSubmitted(false)} className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-5 font-bold rounded-xl">
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <div className="premium-card p-10">
                                    <h2 className="font-heading text-2xl font-bold text-primary mb-8">Send a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="col-span-2 sm:col-span-1">
                                                <label className="block text-sm font-bold text-foreground mb-2">Name *</label>
                                                <input
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-1">
                                                <label className="block text-sm font-bold text-foreground mb-2">Phone *</label>
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
                                        </div>
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
                                        <div>
                                            <label className="block text-sm font-bold text-foreground mb-2">Subject *</label>
                                            <input
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="What's this about?"
                                                className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-foreground mb-2">Message *</label>
                                            <textarea
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Describe your legal matter or query..."
                                                className="w-full px-4 py-3 rounded-xl border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-secondary/40 text-foreground resize-none"
                                            />
                                        </div>
                                        <Button type="submit" size="lg" className="w-full bg-secondary text-white hover:bg-secondary/90 py-7 text-lg font-bold rounded-xl shadow-lg shadow-secondary/20">
                                            <MessageCircle className="w-5 h-5 mr-2" /> Send via WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
