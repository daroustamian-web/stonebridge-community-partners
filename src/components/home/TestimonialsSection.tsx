import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Finding reliable care for my mom wasn't easy until we found StoneBridge Community Partners. The caregivers are dependable, kind, and truly go above and beyond. They've made such a difference in her daily life — and mine.",
    name: "Karen L.",
    location: "Charlotte, NC",
    image: "/images/testimonial-karen.jpg",
  },
  {
    text: "What I appreciate most is their consistency. Someone is always there to help my dad with patience and respect. I've never once had to worry about whether he's being cared for.",
    name: "Michael T.",
    location: "Charlotte, NC",
    image: "/images/testimonial-michael.jpg",
  },
  {
    text: "I called in a panic needing help for my grandmother over the weekend, and they responded immediately. The caregiver showed up within hours and was incredible. I'll never forget that level of care and urgency.",
    name: "Victoria M.",
    location: "Charlotte, NC",
    image: "/images/testimonial-victoria.jpg",
  },
  {
    text: "When my mother needed specialized care for her dementia, StoneBridge Community Partners provided exactly what we needed. Their caregivers are trained and compassionate, making such a difficult time more manageable for our family.",
    name: "Maria G.",
    location: "Charlotte, NC",
    image: "/images/testimonial-maria.jpg",
  },
  {
    text: "StoneBridge Community Partners's post-operative care services helped my father recover comfortably at home after his surgery. Their compassionate approach helped our entire family through an incredibly difficult time.",
    name: "Robert M.",
    location: "Charlotte, NC",
    image: "/images/testimonial-robert.jpg",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Families Say</h2>
          <p className="text-muted-foreground">
            Read stories from families who have experienced the StoneBridge Community Partners difference.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="flex justify-between items-center mb-8">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border"
            >
              <span className="text-xs font-medium text-muted-foreground block mb-4">Client Feedback</span>
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg leading-relaxed mb-8">{testimonials[current].text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-heading font-semibold">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
