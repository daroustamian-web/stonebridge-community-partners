import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our home care services and how we can help your family.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5">
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
          <h3 className="font-heading font-semibold mb-2">Still have questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">Our team is here to help. Contact us for a free consultation.</p>
          <Link to="/contact" className="inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
