import Layout from "@/components/Layout";
import { Shield, Zap, ThumbsUp, Globe, FileText, Lock, Building, HelpCircle } from "lucide-react";

const points = [
  { icon: <ThumbsUp className="w-6 h-6" />, text: "Affordable services" },
  { icon: <Zap className="w-6 h-6" />, text: "Quick response" },
  { icon: <FileText className="w-6 h-6" />, text: "Easy process" },
  { icon: <Globe className="w-6 h-6" />, text: "Online support" },
  { icon: <Shield className="w-6 h-6" />, text: "Clear & professional drafting" },
  { icon: <Building className="w-6 h-6" />, text: "Covers all government departments" },
  { icon: <Lock className="w-6 h-6" />, text: "Confidential handling" },
  { icon: <HelpCircle className="w-6 h-6" />, text: "Expert question framing for RTI" },
];

const About = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">About Us</h1>
        <p className="text-secondary font-heading text-lg">Know More About CUBA Legal Services</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-foreground leading-relaxed mb-8">
          CUBA Legal Services (Complaint Utility Base Assistance) is dedicated to providing simple, affordable, and accessible legal drafting support. We understand that many people struggle with legal procedures due to complexity and lack of guidance. Our mission is to make legal documentation easy and understandable for everyone.
        </p>
        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-6 text-center">
          <p className="font-heading text-lg font-semibold text-foreground italic">
            "To make legal support accessible to every citizen without complexity."
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.text} className="flex items-start gap-4 bg-card rounded-lg border p-5">
              <div className="text-secondary shrink-0">{p.icon}</div>
              <p className="font-medium text-card-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
