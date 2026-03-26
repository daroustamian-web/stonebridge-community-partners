import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Shield, Award, Home, Users, Sparkles, Check } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Compassionate Care", desc: "We believe every person deserves home care services that honor their dignity, respect their choices, and nurture their wellbeing with genuine compassion." },
  { icon: Shield, title: "Trust & Reliability", desc: "Building lasting relationships through consistent, dependable home care services that families can count on, day after day." },
  { icon: Award, title: "Professional Excellence", desc: "We strive for the highest standards in everything we do, from caregiver training to care delivery, always seeking to exceed expectations." },
  { icon: Home, title: "Home-Centered Care", desc: "We believe there's no place like home, and we're committed to helping people maintain their independence and comfort in familiar surroundings." },
  { icon: Users, title: "Family Partnership", desc: "We work closely with families, providing support, communication, and peace of mind throughout the care journey." },
  { icon: Sparkles, title: "Inclusive Care", desc: "We celebrate diversity and provide care for all abilities, ensuring everyone receives the care and respect they deserve." },
];

const commitmentItems = [
  { title: "Licensed & Insured", desc: "All our caregivers are thoroughly vetted for your peace of mind." },
  { title: "Ongoing Training", desc: "We invest in continuous education to ensure our team stays current with best practices." },
  { title: "Flexible Support", desc: "We're available during business hours and provide on-call support when needed." },
  { title: "Personalized Care", desc: "Every care plan is tailored to meet the unique needs of each client." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img src="/images/hero-couple.jpg" alt="About StoneBridge Community Partners" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground max-w-2xl px-4">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-primary-foreground/30 rounded-full mb-6">
                About StoneBridge Community Partners
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Providing the Care{" "}
                <span className="opacity-60">They Deserve</span>
              </h1>
              <p className="opacity-80 leading-relaxed">
                At StoneBridge Community Partners, we bring compassionate, personalized care right to your home — because you deserve to feel safe, comfortable, and cared for where you feel most at ease. Our carefully screened caregivers proudly serve families throughout Charlotte and surrounding communities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Mission</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-8" />
              <p className="text-lg leading-relaxed mb-6">
                At StoneBridge Community Partners, we know that choosing a home care provider is about more than services — it's about trust, compassion, and peace of mind. Our mission is simple: to provide reliable, personalized care that allows our clients to live safely, comfortably, and with dignity in the place they call home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each member of our team is chosen not only for their experience, but also for their kindness, dedication, and genuine passion for helping others. You can trust that your loved one will receive respectful, dependable, and compassionate care every step of the way. We are proudly serving families throughout Charlotte, NC and surrounding areas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/about-caregiver.jpg" alt="StoneBridge Community Partners caregiver with client" className="w-full h-[400px] object-cover" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                <div className="w-16 h-1 bg-primary mb-8" />
                <p className="text-lg leading-relaxed mb-6">
                  We offer a wide range of services, from companionship and personal care to respite and specialized support, ensuring every client receives the care that best fits their unique needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of skilled caregivers is dedicated to treating every client like family — with patience, respect, and a commitment to excellence. Serving families in Charlotte, NC - Charlotte and surrounding communities, we are proud to be a trusted partner for clients and their loved ones.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {coreValues.map((v) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment to Excellence */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Excellence</h2>
                <div className="w-16 h-1 bg-primary mb-8" />
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  At StoneBridge Community Partners, we hold ourselves to the highest standards so you can have complete confidence in the care your loved one receives.
                </p>
                <div className="space-y-6">
                  {commitmentItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/images/respite-care.jpg" alt="StoneBridge Community Partners commitment to excellence" className="w-full h-[400px] object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Home Care Journey?</h2>
              <p className="text-lg opacity-80 mb-10 leading-relaxed">
                Let StoneBridge Community Partners help you or your loved one maintain independence and dignity at home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/scheduling"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
