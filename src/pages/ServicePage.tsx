import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceData: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    features: string[];
    whyChoose: string[];
  }
> = {
  "personal-care": {
    title: "Personal Care Services",
    description:
      "Dignified assistance for daily living activities. We assist with bathing, dressing, grooming, mobility transfers, toileting, incontinence care, and medication reminders.",
    image: "/images/hero-couple.jpg",
    features: [
      "Bathing & hygiene assistance",
      "Dressing & grooming",
      "Mobility & transfer support",
      "Toileting & incontinence care",
      "Medication reminders",
      "Meal preparation",
    ],
    whyChoose: [
      "Maintains personal dignity",
      "Professional, trained caregivers",
      "Short-term or continuous care",
      "Ensures proper hygiene and safety",
    ],
  },
  "companion-care": {
    title: "Companion Care",
    description:
      "Building connections and combating loneliness. Friendly conversations, meal preparation, light housekeeping, errands, and recreational activities.",
    image: "/images/companion-care.jpg",
    features: [
      "Friendly companionship",
      "Meal preparation",
      "Light housekeeping",
      "Errand assistance",
      "Recreational activities",
      "Social engagement support",
    ],
    whyChoose: [
      "Reduces isolation",
      "Enhances quality of life",
      "Meaningful interactions",
      "Improves mental wellbeing",
    ],
  },
  "respite-care": {
    title: "Respite Care",
    description:
      "Support for family caregivers when they need it most. Flexible scheduling, reliable caregivers, and peace of mind while you rest and recharge.",
    image: "/images/respite-care.jpg",
    features: [
      "Flexible scheduling",
      "Reliable caregiver coverage",
      "Short-term or ongoing support",
      "Emergency respite available",
      "Weekend & holiday care",
      "Peace of mind for families",
    ],
    whyChoose: [
      "Prevents caregiver burnout",
      "Peace of mind",
      "Consistent quality care",
      "Emergency respite available",
    ],
  },
  "dementia-care": {
    title: "Dementia Care",
    description:
      "Specialized support for individuals living with Alzheimer's and other forms of dementia. Our patient, trained caregivers provide safety, routine, and meaningful engagement to help your loved one maintain dignity and quality of life.",
    image: "/images/specialized-care.jpg",
    features: [
      "Alzheimer's & dementia specialized care",
      "Safety monitoring & supervision",
      "Cognitive stimulation activities",
      "Routine & structure maintenance",
      "Wandering prevention",
      "Family education & support",
    ],
    whyChoose: [
      "Specialized training",
      "Compassionate approach",
      "Family communication",
      "Behavioral support",
    ],
  },
  "post-operative-care": {
    title: "Post-Operative Care",
    description:
      "Dedicated recovery support following surgical procedures. Our caregivers assist with mobility, wound care monitoring, medication management, and daily activities to help you heal safely and comfortably at home.",
    image: "/images/respite-care.jpg",
    features: [
      "Post-operative mobility support",
      "Wound care monitoring",
      "Medication management",
      "Nutrition & meal preparation",
      "Transportation to follow-ups",
      "Recovery progress tracking",
    ],
    whyChoose: [
      "Faster recovery",
      "Professional monitoring",
      "Nutrition and meal prep",
      "Progress tracking",
    ],
  },
};

const faqItems = [
  {
    question: "How do you determine which service is right for my loved one?",
    answer:
      "We begin with a comprehensive in-home assessment where we evaluate your loved one's physical, emotional, and social needs. Based on this assessment, we develop a personalized care plan that may include one or a combination of our services.",
  },
  {
    question: "Can we combine multiple services for comprehensive care?",
    answer:
      "Absolutely. Many of our clients benefit from a combination of services. We create flexible care plans that can blend multiple service types to provide holistic support tailored to your needs.",
  },
  {
    question: "Are your caregivers trained for specialized conditions?",
    answer:
      "Yes. All of our caregivers undergo thorough background checks and training. Those providing specialized services receive additional focused training to ensure safe, competent, and compassionate care.",
  },
  {
    question: "How quickly can services begin after assessment?",
    answer:
      "In most cases, we can begin services within 24 to 48 hours after the initial assessment. For urgent situations, we do our best to arrange care even sooner.",
  },
  {
    question: "What if our care needs change over time?",
    answer:
      "Care needs often evolve, and we are fully prepared for that. We conduct regular reassessments and maintain open communication with families to adjust care plans as needed.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We currently accept private pay. Our team can help you understand the costs associated with your care plan and discuss payment options that work for your family.",
  },
];

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary underline">
            View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-6">
                  Our Services
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
                <div className="space-y-3 mb-8">
                  {service.whyChoose.map((w) => (
                    <div key={w} className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{w}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/scheduling"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Schedule a Consultation{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Contact Block */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-4">
                Ready to Get Started?
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-12" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a
                  href="tel:4845457410"
                  className="text-primary font-medium hover:underline"
                >
                  704-659-3753
                </a>
              </div>

              <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a
                  href="mailto:sreaves01@sbcommunitypartners.org"
                  className="text-primary font-medium hover:underline"
                >
                  sreaves01@sbcommunitypartners.org
                </a>
              </div>

              <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Service Area</h3>
                <p className="text-muted-foreground text-sm">
                  Charlotte, NC — Charlotte and surrounding communities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-4">
                Services FAQ
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-12" />
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need More Information?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              We are here to answer your questions and help you find the right
              care solution for your family.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
