import Layout from "@/components/Layout";

const posts = [
  { title: "How to File RTI Application in India", date: "Jan 15, 2024", excerpt: "A comprehensive step-by-step guide to filing RTI applications with any government department in India." },
  { title: "How to Send a Legal Notice", date: "Feb 8, 2024", excerpt: "Everything you need to know about sending a legal notice — when to send, format, and legal requirements." },
  { title: "Property Dispute Solutions", date: "Mar 12, 2024", excerpt: "Common property disputes in India and the legal remedies available for resolution." },
  { title: "What to Do If Police Refuse to Register FIR", date: "Apr 5, 2024", excerpt: "Your legal options when police refuse to register your FIR — from written complaints to magistrate orders." },
  { title: "Cyber Crime Complaint — Step by Step Guide", date: "May 20, 2024", excerpt: "How to file a cyber crime complaint online and offline, with tips for gathering digital evidence." },
  { title: "RERA Complaint Against Builder — Complete Guide", date: "Jun 10, 2024", excerpt: "How to file a RERA complaint against a builder for project delays, defects, or fraud." },
];

const Blog = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Blog</h1>
        <p className="text-secondary font-heading text-lg">Legal Knowledge & Guides</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-card rounded-lg border p-6">
              <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
              <h2 className="font-heading text-xl font-semibold text-card-foreground mb-2">{p.title}</h2>
              <p className="text-muted-foreground mb-3">{p.excerpt}</p>
              <span className="text-secondary text-sm font-semibold cursor-pointer hover:underline">Read More →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
