import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Gift, Award, HeartHandshake, Zap, Phone, Mail, Clock, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Gift,
    title: "Referral Rewards",
    desc: "Receive a thank you gift for each successful referral that begins service with us.",
  },
  {
    icon: Award,
    title: "Quality Care Guarantee",
    desc: "Your referrals receive the same exceptional, compassionate care that you've experienced.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "We provide continuous support to both you and your referrals throughout their care journey.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Priority scheduling and assessment for all referred clients within 24-48 hours.",
  },
];

const faqs = [
  {
    q: "What home care services does StoneBridge Community Partners provide?",
    a: "We offer comprehensive home care services including Personal Care Services, Companion Care, Respite Care, Dementia Care, and Post-Operative Care. All services are provided by carefully screened, background-checked caregivers.",
  },
  {
    q: "What areas do you serve?",
    a: "We proudly serve Charlotte, NC - Charlotte and surrounding communities and surrounding areas. Our goal is to bring professional home care services directly to your doorstep throughout the region.",
  },
  {
    q: "Are your caregivers licensed and insured?",
    a: "Yes, all our caregivers are certified in home care services, thoroughly background-checked, and bonded. StoneBridge Community Partners is fully licensed and insured to provide peace of mind for you and your family.",
  },
  {
    q: "How do you create personalized care plans?",
    a: "We start with a comprehensive assessment of your needs, preferences, and health conditions. Our team then develops a customized care plan that addresses specific requirements while maintaining dignity and independence.",
  },
  {
    q: "What are your rates and payment options?",
    a: "Our rates vary depending on the type and level of care needed. We accept private pay and work with families to explore all payment options to ensure you receive the care you need. Contact us at 704-659-3753 for a free consultation to discuss pricing.",
  },
  {
    q: "What are your business hours?",
    a: "Our business hours are Monday to Friday (8am to 5pm), On-call on Saturdays & Sundays. We offer flexible scheduling to meet your care needs.",
  },
  {
    q: "Can I meet the caregiver before services begin?",
    a: "Absolutely! We believe in the importance of compatibility and trust. We'll arrange for you to meet potential caregivers before services begin to ensure the best possible match for your family's needs.",
  },
  {
    q: "What if I'm not satisfied with the caregiver?",
    a: "Your satisfaction is our priority. If you're not completely satisfied with your caregiver, we'll work with you to address concerns and, if necessary, provide a replacement caregiver at no additional cost.",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const ReferUs = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    relationship: "",
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    careUrgency: "",
    clientAddress: "",
    careType: "",
    additionalInfo: "",
  });

  const update = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please confirm you have permission to refer this client.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Referral Submitted!",
      description:
        "Thank you for your referral. Our team will reach out within 24 hours.",
    });
    setForm({
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      relationship: "",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      careUrgency: "",
      clientAddress: "",
      careType: "",
      additionalInfo: "",
    });
    setConsent(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img
            src="/images/hero-couple.jpg"
            alt="Refer someone to StoneBridge Community Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground max-w-2xl px-4">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-primary-foreground/30 rounded-full mb-6">
                Referral Program
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Share the Gift of Compassionate Care
              </h1>
              <p className="opacity-80 leading-relaxed">
                Know someone who could benefit from our exceptional home care
                services? Your referral could make a meaningful difference in
                someone's life.
              </p>
            </div>
          </div>
        </section>

        {/* Why Refer */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Refer to Us?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                When you refer someone to StoneBridge Community Partners, you're connecting
                them with trusted, compassionate professionals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{b.title}</h3>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + Trust Badge */}
        <section className="py-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
              <img
                src="/images/specialized-care.jpg"
                alt="Caregiver helping senior"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="bg-background/90 backdrop-blur rounded-xl px-5 py-3 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-sm">
                      Licensed & Insured
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Trusted Care Provider
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Form */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
                Referral Form
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Submit a Referral
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will follow up within 24
                hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-10 bg-card border border-border rounded-2xl p-6 md:p-10"
            >
              {/* Section 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs items-center justify-center">
                    1
                  </span>
                  Your Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Your Full Name *"
                    required
                    value={form.yourName}
                    onChange={(e) => update("yourName", e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address *"
                    required
                    value={form.yourEmail}
                    onChange={(e) => update("yourEmail", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={form.yourPhone}
                    onChange={(e) => update("yourPhone", e.target.value)}
                    className={inputClass}
                  />
                  <select
                    value={form.relationship}
                    onChange={(e) => update("relationship", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Relationship to Client</option>
                    <option>Family Member</option>
                    <option>Friend</option>
                    <option>Neighbor</option>
                    <option>Healthcare Provider</option>
                    <option>Social Worker</option>
                    <option>Current Client</option>
                    <option>Former Client</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs items-center justify-center">
                    2
                  </span>
                  Client Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Client's Full Name *"
                    required
                    value={form.clientName}
                    onChange={(e) => update("clientName", e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Client's Phone Number *"
                    required
                    value={form.clientPhone}
                    onChange={(e) => update("clientPhone", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Client's Email Address"
                    value={form.clientEmail}
                    onChange={(e) => update("clientEmail", e.target.value)}
                    className={inputClass}
                  />
                  <select
                    value={form.careUrgency}
                    onChange={(e) => update("careUrgency", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">When is Care Needed?</option>
                    <option>Immediate</option>
                    <option>Urgent within 3 days</option>
                    <option>Soon within a week</option>
                    <option>Planning ahead</option>
                  </select>
                </div>
                <input
                  placeholder="Client's Address"
                  value={form.clientAddress}
                  onChange={(e) => update("clientAddress", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs items-center justify-center">
                    3
                  </span>
                  Care Needs
                </h3>
                <select
                  value={form.careType}
                  onChange={(e) => update("careType", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Type of Care Needed</option>
                  <option>Personal Care</option>
                  <option>Companion Care</option>
                  <option>Respite Care</option>
                  <option>Dementia Care</option>
                  <option>Post-Operative Care</option>
                  <option>Care Assessment</option>
                  <option>Not Sure</option>
                </select>
                <textarea
                  placeholder="Additional Information (e.g., specific care needs, health conditions, preferred schedule)"
                  rows={4}
                  value={form.additionalInfo}
                  onChange={(e) => update("additionalInfo", e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-input accent-primary"
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  I confirm that I have permission to refer this client and that
                  the information provided is accurate to the best of my
                  knowledge.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Submit Referral
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will only be used to provide care
                services. We will never share personal information with third
                parties without consent.
              </p>
            </form>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions about our referral program? Reach out anytime.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mb-3">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Call Us</h4>
                <a
                  href="tel:4845457410"
                  className="text-sm text-primary hover:underline"
                >
                  704-659-3753
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mb-3">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Email Us</h4>
                <a
                  href="mailto:sreaves01@sbcommunitypartners.org"
                  className="text-sm text-primary hover:underline"
                >
                  sreaves01@sbcommunitypartners.org
                </a>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mb-3">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">Response Time</h4>
                <p className="text-sm text-muted-foreground">Within 24 Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our home care services
                and how we can help your family.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-5"
                >
                  <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-10 p-6 bg-secondary rounded-xl">
              <h3 className="font-heading font-semibold mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is here to help. Contact us for a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReferUs;
