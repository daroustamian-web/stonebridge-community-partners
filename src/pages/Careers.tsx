import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { DollarSign, Users, GraduationCap, Heart, MapPin, Briefcase, Clock } from "lucide-react";

const jobs = [
  {
    title: "Home Care Assistant",
    type: "Full-time",
    tag2: "Competitive Pay",
    image: "/images/about-caregiver.jpg",
    location: "Charlotte, NC - Charlotte and surrounding communities and surrounding areas",
    description:
      "Join our compassionate team and make a meaningful difference in the lives of our clients. We're seeking dedicated Home Care Assistants who are passionate about providing exceptional care to seniors and individuals with disabilities in the comfort of their own homes.",
  },
  {
    title: "Companion Care Specialist",
    type: "Part-time",
    tag2: "Flexible Hours",
    image: "/images/companion-care.jpg",
    location: "Charlotte, NC - Charlotte and surrounding communities and surrounding areas",
    description:
      "We're looking for friendly, outgoing individuals who enjoy building meaningful connections with seniors. Help combat loneliness and enhance quality of life through companionship and daily activity support.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay & Flexible Scheduling",
    desc: "Earn competitive wages with schedules that work around your life.",
  },
  {
    icon: Users,
    title: "Supportive Work Environment",
    desc: "Join a collaborative team that values your contributions and well-being.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    desc: "Ongoing training and professional development to grow your career.",
  },
  {
    icon: Heart,
    title: "Meaningful Impact",
    desc: "Make a real difference in the lives of individuals and families in your community.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[400px] md:h-[480px] overflow-hidden">
          <img
            src="/images/hero-couple.jpg"
            alt="Join the StoneBridge Community Partners team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground max-w-2xl px-4">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-primary-foreground/30 rounded-full mb-6">
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Home Care Team
              </h1>
              <p className="opacity-80 leading-relaxed">
                Make a meaningful difference in people's lives while building a
                rewarding career in home care. We're looking for compassionate,
                dedicated caregivers to join our growing team in Charlotte, NC - Charlotte
                County and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
                Open Positions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Current Openings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our team of dedicated caregivers making a difference in
                Charlotte, NC - Charlotte and surrounding communities and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {jobs.map((job) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border border-border rounded-2xl overflow-hidden bg-card"
                >
                  <div className="relative h-52">
                    <img
                      src={job.image}
                      alt={job.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Now Hiring
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 bg-primary-light text-primary rounded-full">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 bg-secondary rounded-full">
                        <Clock className="h-3 w-3" />
                        {job.tag2}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {job.description}
                    </p>
                    <div className="flex gap-3">
                      <Link
                        to="/contact"
                        className="px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Us
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We invest in our team because great care starts with great
                people.
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

        {/* CTA */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center bg-primary rounded-2xl p-10 md:p-14"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Apply now and start making a difference in people's lives.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-8 py-3 bg-background text-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
