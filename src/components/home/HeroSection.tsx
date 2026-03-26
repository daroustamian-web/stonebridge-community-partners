import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, UserPlus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-6">
              Professional Home Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Providing the Care They Deserve
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We bring compassionate, personalized care right to your home — because you deserve to feel safe, comfortable, and cared for where you feel most at ease. Our carefully screened and highly trained caregivers proudly serve families throughout Charlotte and surrounding communities.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Trusted by Charlotte, NC - Charlotte and surrounding communities and surrounding areas.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/scheduling"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Get Started Today
              </Link>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm font-medium">
                <UserPlus className="h-4 w-4" /> Accepting New Clients
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/hero-couple.jpg"
                alt="Elderly couple receiving compassionate care"
                className="w-full h-[400px] lg:h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />

              {/* Overlay labels */}
              <div className="absolute top-4 right-4 flex gap-3 text-xs font-medium">
                <span className="bg-background/20 backdrop-blur px-3 py-1 rounded-full text-primary-foreground">PERSONAL CARE</span>
                <span className="bg-background/20 backdrop-blur px-3 py-1 rounded-full text-primary-foreground">HOME CARE</span>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-primary-foreground opacity-70">YORK, NC</div>

              {/* Bottom card overlay */}
              <div className="absolute bottom-4 left-4 flex items-end gap-3">
                <div className="bg-foreground/80 backdrop-blur rounded-xl p-4 max-w-[240px]">
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                    <span className="text-primary-foreground text-sm font-medium">Personal Care Services</span>
                  </div>
                  <p className="text-primary-foreground/70 text-xs">
                    Respectful assistance with bathing, dressing, and grooming.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 lg:right-[-2rem] bg-card rounded-xl shadow-xl border border-border p-5 max-w-[220px]">
              <p className="font-heading font-semibold text-sm mb-1">Most Popular</p>
              <p className="text-xs text-muted-foreground">Personal care services with certified caregivers.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
