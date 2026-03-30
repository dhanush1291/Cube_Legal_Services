import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, Eye, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/config";

const sampleDocs = [
    {
        category: "RTI Applications",
        emoji: "📄",
        samples: [
            { name: "RTI Application – State Government", desc: "Standard RTI application format for state government departments." },
            { name: "RTI First Appeal", desc: "First appeal format when PIO fails to respond within 30 days." },
            { name: "RTI Second Appeal to SIC/CIC", desc: "Second appeal format for escalation to Information Commission." },
        ],
    },
    {
        category: "Police Complaints",
        emoji: "🚓",
        samples: [
            { name: "FIR Non-Registration Complaint to SP", desc: "Complaint format for when police refuse to register an FIR." },
            { name: "Written Complaint to SHO", desc: "Formal complaint letter to Station House Officer for cognizable offences." },
        ],
    },
    {
        category: "Legal Notices",
        emoji: "⚖️",
        samples: [
            { name: "Legal Notice – Money Recovery", desc: "Formal legal notice demanding repayment of a loan or debt." },
            { name: "Legal Notice – Property Dispute", desc: "Notice addressing encroachment or property ownership disputes." },
            { name: "Legal Notice – Cheque Bounce (Sec 138)", desc: "Statutory notice required under Negotiable Instruments Act." },
        ],
    },
    {
        category: "Consumer Complaints",
        emoji: "🛍️",
        samples: [
            { name: "Consumer Forum Complaint – Defective Product", desc: "Complaint template for filing before District Consumer Forum." },
            { name: "Consumer Complaint – Deficient Service", desc: "Template for service deficiency cases like banking, telecom." },
        ],
    },
    {
        category: "Human Rights Complaints",
        emoji: "🛡️",
        samples: [
            { name: "SHRC Complaint – Police Harassment", desc: "Complaint to State Human Rights Commission regarding police misconduct." },
            { name: "NHRC Complaint Format", desc: "Standard complaint format for National Human Rights Commission." },
        ],
    },
];

const SampleDocuments = () => (
    <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-24 md:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Reference Library</span>
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    Sample Documents
                </h1>
                <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
                    Browse our library of sample legal documents to understand what we deliver. For fully customized drafts, book a service.
                </p>
            </div>
        </section>

        {/* Disclaimer Banner */}
        <div className="bg-secondary/10 border-y border-secondary/20 py-4">
            <div className="container mx-auto px-4 text-center">
                <p className="text-secondary font-bold text-sm">
                    ⚠️ These are sample formats for reference only. Actual documents are customized to your specific situation by our legal experts.
                </p>
            </div>
        </div>

        {/* Samples */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                {sampleDocs.map((cat, ci) => (
                    <div key={cat.category} className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="text-4xl">{cat.emoji}</span>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">{cat.category}</h2>
                            <div className="flex-1 h-px bg-muted" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cat.samples.map((doc, di) => (
                                <div
                                    key={doc.name}
                                    className="premium-card flex flex-col gap-4 animate-fade-in"
                                    style={{ animationDelay: `${(ci * 3 + di) * 80}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 shrink-0">
                                            <FileText className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading text-base font-bold text-primary mb-1">{doc.name}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{doc.desc}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 pt-2 border-t border-muted">
                                        <a
                                            href={`https://wa.me/${siteConfig.whatsapp}?text=I'd like to view a sample for: ${encodeURIComponent(doc.name)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary/80 transition-colors"
                                        >
                                            <Eye className="w-3.5 h-3.5" />
                                            Request Sample
                                        </a>
                                        <Link
                                            to="/book"
                                            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors ml-4"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                            Get Custom Draft
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Need a Customized Document?</h2>
                <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
                    Sample formats are just a starting point. Our experts draft tailored documents specific to your case.
                </p>
                <Link to="/book">
                    <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-12 py-7 text-lg font-bold rounded-xl">
                        Book Custom Drafting <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </section>
    </Layout>
);

export default SampleDocuments;
