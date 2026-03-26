import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Personal Care Services",
    description: "Dignified assistance for daily living activities. We assist with bathing, dressing, grooming, mobility transfers, toileting, incontinence care, and medication reminders.",
    image: "/images/hero-couple.jpg",
    href: "/services/personal-care",
  },
  {
    title: "Companion Care",
    description: "Building connections and combating loneliness. Friendly conversations, meal preparation, light housekeeping, errands, and recreational activities.",
    image: "/images/companion-care.jpg",
    href: "/services/companion-care",
  },
  {
    title: "Respite Care",
    description: "Support for family caregivers when they need it most. Flexible scheduling, reliable caregivers, and peace of mind while you rest and recharge.",
    image: "/images/respite-care.jpg",
    href: "/services/respite-care",
  },
  {
    title: "Dementia Care",
    description: "Specialized support for individuals living with Alzheimer's and other forms of dementia. Patient, trained caregivers who provide safety, routine, and meaningful engagement.",
    image: "/images/specialized-care.jpg",
    href: "/services/dementia-care",
  },
  {
    title: "Post-Operative Care",
    description: "Dedicated recovery support following surgical procedures. Assistance with mobility, wound care monitoring, medication management, and daily activities to help you heal at home.",
    image: "/images/respite-care.jpg",
    href: "/services/post-operative-care",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
            Our Home Care Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Care Services Tailored to Your Needs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At StoneBridge Community Partners, we offer a comprehensive range of personalized care services designed to meet your unique needs and enhance your quality of life in the comfort of your own home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-4 w-4 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <Link to={service.href} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="font-heading text-2xl font-bold mb-3">
            Schedule Your Free In-Home Care Assessment Today!
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Discover how we can help your loved one live independently and comfortably at home. Call us at 704-659-3753 or email us at sreaves01@sbcommunitypartners.org to get started.
          </p>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/20 text-primary-foreground/90 rounded-full text-xs font-medium mb-4">
            <ShieldCheck className="h-3.5 w-3.5" /> Private Pay — Accepting New Clients
          </span>
          <br />
          <Link to="/scheduling" className="inline-flex px-6 py-3 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
            Schedule a Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
