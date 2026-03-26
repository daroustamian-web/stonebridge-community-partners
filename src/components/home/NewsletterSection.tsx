import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive our latest updates." });
    setEmail("");
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center text-primary-foreground">
          <span className="text-sm opacity-80">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Subscribe to Our Newsletter</h2>
          <p className="opacity-80 mb-8">Stay updated with the latest home care tips, health information, and news from StoneBridge Community Partners.</p>

          <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 md:p-8">
            <h3 className="font-heading text-lg font-semibold mb-2">Join Our Newsletter</h3>
            <p className="text-sm opacity-70 mb-4">Get valuable home care tips, health insights, and updates delivered to your inbox.</p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <button type="submit" className="px-6 py-3 bg-background text-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                Subscribe
              </button>
            </form>
            <p className="text-xs opacity-50 mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
