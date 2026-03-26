import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Star, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesData = [
  {
    id: "personal-care",
    tab: "Personal Care",
    title: "Personal Care Services",
    subtitle: "Respectful Assistance for Daily Living Needs",
    image: "/images/hero-couple.jpg",
    description:
      "Our personal care services are designed to help your loved one maintain their independence while receiving the hands-on support they need. Our trained caregivers provide respectful, dignified assistance with daily living activities, ensuring comfort and safety in the familiar surroundings of home.",
    features: [
      "Bathing, dressing, and grooming assistance",
      "Mobility and transfers",
      "Toileting and incontinence care",
      "Medication reminders",
    ],
    whyChoose: [
      "Maintains personal dignity",
      "Professional, trained caregivers",
      "Short-term or continuous care",
      "Ensures proper hygiene and safety",
    ],
  },
  {
    id: "companion-care",
    tab: "Companion Care",
    title: "Companion Care",
    subtitle: "Fostering Connections and Preventing Loneliness",
    image: "/images/companion-care.jpg",
    description:
      "Loneliness and isolation can have a serious impact on health and wellbeing, especially for seniors living alone. Our companion care services provide meaningful social interaction, practical help around the home, and a trusted presence that brings comfort and joy to everyday life.",
    features: [
      "Friendly conversation and social interaction",
      "Meal preparation and light housekeeping",
      "Help with errands and appointments",
      "Recreational activities",
    ],
    whyChoose: [
      "Reduces isolation",
      "Enhances quality of life",
      "Meaningful interactions",
      "Improves mental wellbeing",
    ],
  },
  {
    id: "respite-care",
    tab: "Respite Care",
    title: "Respite Care",
    subtitle: "Essential Support for Family Caregivers",
    image: "/images/respite-care.jpg",
    description:
      "Family caregivers give so much of themselves, but everyone needs a break. Our respite care services provide reliable, professional coverage so you can rest, run errands, or simply recharge knowing your loved one is in capable and compassionate hands.",
    features: [
      "Flexible scheduling options",
      "Reliable caregiver coverage",
      "Short-term or ongoing support",
      "Weekend and holiday care",
    ],
    whyChoose: [
      "Prevents caregiver burnout",
      "Peace of mind",
      "Consistent quality care",
      "Emergency respite available",
    ],
  },
  {
    id: "dementia-care",
    tab: "Dementia Care",
    title: "Dementia Care",
    subtitle: "Specialized Support for Cognitive Conditions",
    image: "/images/specialized-care.jpg",
    description:
      "Caring for someone with Alzheimer's or other forms of dementia requires patience, specialized training, and a deep understanding of the condition. Our dementia care team provides a safe, structured environment that promotes comfort, dignity, and meaningful engagement for your loved one.",
    features: [
      "Alzheimer's and dementia-trained caregivers",
      "Cognitive stimulation activities",
      "Safety monitoring and fall prevention",
      "Routine consistency and comfort",
    ],
    whyChoose: [
      "Specialized training",
      "Compassionate approach",
      "Family communication",
      "Behavioral support",
    ],
  },
  {
    id: "post-operative-care",
    tab: "Post-Operative Care",
    title: "Post-Operative Care",
    subtitle: "Recovery Support After Surgery",
    image: "/images/respite-care.jpg",
    description:
      "Recovering from surgery at home can be challenging without the right support. Our post-operative care services help you heal safely and comfortably by providing professional assistance with mobility, medication management, wound care monitoring, and daily activities during your recovery period.",
    features: [
      "Post-operative mobility support",
      "Wound care monitoring",
      "Medication management",
      "Transportation to follow-ups",
    ],
    whyChoose: [
      "Faster recovery",
      "Professional monitoring",
      "Nutrition and meal prep",
      "Progress tracking",
    ],
  },
];

const faqItems = [
  {
    question: "How do you determine which service is right for my loved one?",
    answer:
      "We begin with a comprehensive in-home assessment where we evaluate your loved one's physical, emotional, and social needs. Based on this assessment, we develop a personalized care plan that may include one or a combination of our services. Our care coordinators work closely with you and your family to ensure the right level of support.",
  },
  {
    question: "Can we combine multiple services for comprehensive care?",
    answer:
      "Absolutely. Many of our clients benefit from a combination of services. For example, someone may receive personal care assistance along with companion care for social engagement. We create flexible care plans that can blend multiple service types to provide holistic support tailored to your needs.",
  },
  {
    question: "Are your caregivers trained for specialized conditions?",
    answer:
      "Yes. All of our caregivers undergo thorough background checks and training. Those providing specialized services such as dementia care or post-operative care receive additional focused training to ensure they can deliver safe, competent, and compassionate care for those specific conditions.",
  },
  {
    question: "How quickly can services begin after assessment?",
    answer:
      "In most cases, we can begin services within 24 to 48 hours after the initial assessment. For urgent situations, we do our best to arrange care even sooner. Our goal is to provide timely support when you need it most.",
  },
  {
    question: "What if our care needs change over time?",
    answer:
      "Care needs often evolve, and we are fully prepared for that. We conduct regular reassessments and maintain open communication with families to adjust care plans as needed. Whether you need to increase, decrease, or change the type of services, we make transitions seamless.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We currently accept private pay. Our team can help you understand the costs associated with your care plan and discuss payment options that work for your family.",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = servicesData[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img
            src="/images/about-caregiver.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground max-w-2xl px-4">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-primary-foreground/30 rounded-full mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dedicated to Providing{" "}
                <span className="opacity-60">Exceptional Home Care</span>
              </h1>
              <p className="opacity-80 leading-relaxed">
                From personal care and companionship to specialized dementia
                support and post-operative recovery, our compassionate team
                provides the care your loved one needs to thrive at home in Charlotte
                County.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Services */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our Care Services
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-12" />
            </motion.div>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {servicesData.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === i
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s.tab}
                </button>
              ))}
            </div>

            {/* Active tab content */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              <img
                src={active.image}
                alt={active.title}
                className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
                loading="lazy"
              />
              <div>
                <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
                  {active.tab}
                </span>
                <h3 className="text-3xl font-bold mb-2">{active.title}</h3>
                <p className="text-primary font-medium mb-4">
                  {active.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {active.description}
                </p>

                {/* What We Provide */}
                <h4 className="text-lg font-semibold mb-4">What We Provide:</h4>
                <div className="space-y-3 mb-8">
                  {active.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <h4 className="text-lg font-semibold mb-4">Why Choose Us:</h4>
                <div className="space-y-3 mb-8">
                  {active.whyChoose.map((w) => (
                    <div key={w} className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm">{w}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Contact us today at{" "}
                  <a
                    href="tel:4845457410"
                    className="text-primary font-medium hover:underline"
                  >
                    704-659-3753
                  </a>{" "}
                  or{" "}
                  <a
                    href="mailto:sreaves01@sbcommunitypartners.org"
                    className="text-primary font-medium hover:underline"
                  >
                    sreaves01@sbcommunitypartners.org
                  </a>{" "}
                  to schedule your free in-home care consultation.
                </p>

                <Link
                  to="/scheduling"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Care Journey Contact Cards */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Your Care Journey Starts Here
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-12" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="bg-card rounded-xl p-8 text-center shadow-sm border border-border"
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-8 text-center shadow-sm border border-border"
              >
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-8 text-center shadow-sm border border-border"
              >
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Service Area</h3>
                <p className="text-muted-foreground text-sm">
                  Charlotte, NC — Charlotte and surrounding communities
                </p>
              </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
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

export default Services;
