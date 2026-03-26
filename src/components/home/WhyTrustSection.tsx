import { motion } from "framer-motion";
import { Shield, FileText, MapPin, Heart } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Carefully Screened Caregivers",
    description: "Every caregiver is chosen not only for their experience, but also for their kindness, dedication, and genuine passion for helping others.",
  },
  {
    icon: FileText,
    title: "Personalized Care Plans",
    description: "Customized home care services tailored to each client's unique needs, preferences, and independence goals.",
  },
  {
    icon: MapPin,
    title: "Local Service You Can Trust",
    description: "Dedicated to serving Charlotte, NC - Charlotte and surrounding communities and surrounding areas with reliable, consistent home care services.",
  },
  {
    icon: Heart,
    title: "Compassionate Professional Care",
    description: "Committed to enhancing quality of life through professional home care services with genuine care and understanding.",
  },
];

const WhyTrustSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Families{" "}
          <span className="text-muted-foreground">Trust StoneBridge Community Partners</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-5">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustSection;
