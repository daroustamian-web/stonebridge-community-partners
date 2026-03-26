import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">Ready to learn more about our home care services? Contact StoneBridge Community Partners today for a free consultation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-xl bg-secondary">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Email Us</h4>
                  <p className="text-sm text-primary">sreaves01@sbcommunitypartners.org</p>
                  <p className="text-xs text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl bg-secondary">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Call Us</h4>
                  <p className="text-sm text-primary">704-659-3753</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri: 8AM-5PM, On-call Saturdays & Sundays</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl bg-secondary">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Service Area</h4>
                  <p className="text-sm">Charlotte, NC - Charlotte and surrounding communities and surrounding areas</p>
                  <p className="text-xs text-muted-foreground mt-1">Serving families across the region</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Service of Interest</option>
              <option>Personal Care Services</option>
              <option>Companion Care</option>
              <option>Respite Care</option>
              <option>Dementia Care</option>
              <option>Post-Operative Care</option>
              <option>Free Consultation</option>
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
