import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ReferralSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-primary font-medium">Want to spread the love?</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">Refer With Confidence</h2>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Share the Gift of Professional Home Care Services
        </h3>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Know someone who could benefit from our home care services? Your referral helps us extend our compassionate care to more families in need.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Why Refer to StoneBridge Community Partners?</h4>
            <div className="space-y-6">
              {[
                { title: "Certified Home Care Services", desc: "Our caregivers are thoroughly vetted, certified, and trained in comprehensive home care services to provide exceptional care." },
                { title: "Compassionate Professional Care", desc: "We treat each client with dignity, respect, and genuine care, focusing on their unique home care needs." },
                { title: "Local Service You Can Trust", desc: "We value your trust and confidence in our services. Ask about our referral appreciation program for families in Charlotte, NC." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{item.title}</h5>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/refer-us" className="inline-flex mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
              Refer Someone Today
            </Link>
          </div>
          <div>
            <img src="/images/specialized-care.jpg" alt="Caregiver helping senior" className="rounded-2xl w-full h-[380px] object-cover shadow-lg" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
