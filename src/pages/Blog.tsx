import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "How to File an RTI Application in 5 Simple Steps",
        excerpt: "The Right to Information Act is one of the most powerful tools available to Indian citizens. Learn how to file an effective RTI application that gets results.",
        category: "RTI & Information",
        date: "March 15, 2026",
        readTime: "5 min read",
        emoji: "📄",
    },
    {
        id: 2,
        title: "Understanding Consumer Rights: When to Approach the Consumer Forum",
        excerpt: "Many consumers suffer silently when faced with defective products or poor service. Here's when and how to approach the Consumer Disputes Redressal Forum.",
        category: "Consumer Rights",
        date: "March 10, 2026",
        readTime: "7 min read",
        emoji: "🛍️",
    },
    {
        id: 3,
        title: "Cyber Crime: How to Report Online Fraud Effectively",
        excerpt: "Online fraud is rising rapidly. Knowing how to report it quickly and correctly can make the difference between recovering your money and losing it forever.",
        category: "Cyber Law",
        date: "March 5, 2026",
        readTime: "6 min read",
        emoji: "💻",
    },
    {
        id: 4,
        title: "Legal Notice: The First Step Before Going to Court",
        excerpt: "A well-drafted legal notice can resolve disputes without expensive litigation. Find out when to send one and what it should contain.",
        category: "Legal Process",
        date: "February 28, 2026",
        readTime: "4 min read",
        emoji: "⚖️",
    },
    {
        id: 5,
        title: "Women's Rights: Complaints to the National Commission for Women",
        excerpt: "The NCW is a powerful redressal body for women facing harassment, domestic violence, or discrimination. Here's how to file an effective complaint.",
        category: "Women's Rights",
        date: "February 20, 2026",
        readTime: "6 min read",
        emoji: "👩‍⚖️",
    },
    {
        id: 6,
        title: "RERA: Protecting Home Buyers from Builder Fraud",
        excerpt: "Builder delays, quality defects, and project fraud have affected thousands of home buyers. RERA gives you a powerful mechanism to seek justice.",
        category: "Real Estate",
        date: "February 12, 2026",
        readTime: "8 min read",
        emoji: "🏢",
    },
];

const Blog = () => (
    <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-24 md:py-28 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8">
                    <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">Legal Insights</span>
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    Blog & Resources
                </h1>
                <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
                    Expert articles on India's legal landscape — written to help you understand your rights and how to exercise them.
                </p>
            </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background border-b border-muted">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="inline-block text-[10px] font-bold uppercase tracking-widest text-secondary mb-6">Featured Article</div>
                <div className="group grid md:grid-cols-2 gap-10 items-center">
                    <div className="bg-primary/5 rounded-3xl aspect-video flex items-center justify-center text-8xl border border-primary/10">
                        {posts[0].emoji}
                    </div>
                    <div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full mb-4">
                            <Tag className="w-3 h-3" /> {posts[0].category}
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">{posts[0].title}</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">{posts[0].excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                            <span>{posts[0].date}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{posts[0].readTime}</span>
                        </div>
                        <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary/80 transition-colors">
                            Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* All Posts */}
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="section-title mb-12">All Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.slice(1).map((post, i) => (
                        <div
                            key={post.id}
                            className="premium-card flex flex-col gap-4 group animate-fade-in"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl mt-1 group-hover:scale-110 transition-transform origin-left">{post.emoji}</div>
                                <div className="flex-1">
                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full mb-2">
                                        <Tag className="w-2.5 h-2.5" /> {post.category}
                                    </span>
                                    <h3 className="font-heading text-lg font-bold text-primary leading-tight mb-2">{post.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-muted text-xs text-muted-foreground">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                                <span>{post.date}</span>
                            </div>
                            <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:gap-2.5 transition-all">
                                Read Article <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center max-w-xl">
                <h2 className="font-heading text-3xl font-bold mb-4">Stay Informed</h2>
                <p className="text-primary-foreground/70 text-lg mb-10">
                    Get the latest legal insights delivered directly. Contact us to join our information network.
                </p>
                <Link to="/contact">
                    <div className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-colors cursor-pointer">
                        Get Legal Updates <ArrowRight className="w-5 h-5" />
                    </div>
                </Link>
            </div>
        </section>
    </Layout>
);

export default Blog;
