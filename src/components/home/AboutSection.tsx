import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-6">
              About StoneBridge Community Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Providing Reliable Care{" "}
              <span className="text-muted-foreground">for Your Peace of Mind</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At StoneBridge Community Partners, we bring compassionate, personalized care right to your home — because you deserve to feel safe, comfortable, and cared for where you feel most at ease. Our carefully screened and highly trained caregivers proudly serve families throughout Charlotte and surrounding communities. Each member of our team is chosen not only for their experience, but also for their kindness, dedication, and genuine passion for helping others. You can trust that your loved one will receive respectful, dependable, and compassionate care every step of the way.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/about-caregiver.jpg"
              alt="Compassionate caregiving"
              className="rounded-2xl w-full h-[400px] object-cover shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
