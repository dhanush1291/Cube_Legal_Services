import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const samples = [
  { title: "Legal Notice Sample", desc: "A sample legal notice for money recovery disputes." },
  { title: "RTI Application Sample", desc: "A sample RTI application to a government department." },
  { title: "Police Complaint Sample", desc: "A sample written complaint to the Station House Officer." },
];

const SampleDocuments = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Sample Documents</h1>
        <p className="text-secondary font-heading text-lg">Download free sample legal documents</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6">
          {samples.map((s) => (
            <div key={s.title} className="bg-card rounded-lg border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <FileText className="w-10 h-10 text-secondary shrink-0" />
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Download Sample
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default SampleDocuments;
