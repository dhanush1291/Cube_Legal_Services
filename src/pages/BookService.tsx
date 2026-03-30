import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const BookService = () => {
  const [searchParams] = useSearchParams();
  const preSelected = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: preSelected,
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const svcName = services.find((s) => s.id === form.service)?.name || form.service;
    const msg = encodeURIComponent(
      `Hello CUBA Legal Services,\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${svcName}\nDetails: ${form.description}`
    );
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, "_blank");
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-secondary font-heading text-lg">Fill in the form below and we'll get back to you</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <form onSubmit={handleSubmit} className="bg-card rounded-lg border p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full rounded-md border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-secondary focus:outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full rounded-md border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-secondary focus:outline-none"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Service Required</label>
              <select
                required
                className="w-full rounded-md border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-secondary focus:outline-none"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.emoji} {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">Description of Issue</label>
              <textarea
                required
                rows={4}
                className="w-full rounded-md border bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-secondary focus:outline-none resize-none"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <Button type="submit" size="lg" className="w-full" variant="gold">
              Submit & Chat on WhatsApp
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BookService;
