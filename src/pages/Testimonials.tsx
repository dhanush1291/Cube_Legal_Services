import Layout from "@/components/Layout";
import { Star } from "lucide-react";

const testimonials = [
  { text: "Quick and professional drafting service.", source: "RTI Client" },
  { text: "Very helpful for RTI applications.", source: "Hyderabad" },
  { text: "Affordable and easy process.", source: "AP Client" },
  { text: "Got my police complaint drafted within hours.", source: "Warangal" },
  { text: "Excellent support for consumer court filing.", source: "Vijayawada" },
  { text: "Clear guidance throughout the process.", source: "Nizamabad" },
];

const Testimonials = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Testimonials</h1>
        <p className="text-secondary font-heading text-lg">What Our Clients Say</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.source} className="bg-card rounded-lg border p-6">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-card-foreground italic mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold text-secondary">— {t.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
