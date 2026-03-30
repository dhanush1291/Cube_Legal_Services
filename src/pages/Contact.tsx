import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-secondary font-heading text-lg">Get in touch with CUBA Legal Services</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-card rounded-lg border p-8 space-y-6">
          <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <Phone className="w-6 h-6 text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold text-card-foreground">+91 XXXXX XXXXX</p>
            </div>
          </a>
          <a href="mailto:cubalegalservices@gmail.com" className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
            <Mail className="w-6 h-6 text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold text-card-foreground">cubalegalservices@gmail.com</p>
            </div>
          </a>
          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
            <MapPin className="w-6 h-6 text-secondary" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold text-card-foreground">Telangana / Andhra Pradesh</p>
            </div>
          </div>
          <Button size="lg" variant="whatsapp" className="w-full gap-2" asChild>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
