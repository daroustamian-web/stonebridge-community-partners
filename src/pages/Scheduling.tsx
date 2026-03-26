import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { num: 1, title: "Personal Info", desc: "Your contact details" },
  { num: 2, title: "Care Recipient", desc: "Who needs care" },
  { num: 3, title: "Service Details", desc: "Type and schedule" },
  { num: 4, title: "Location & Review", desc: "Final details" },
];

const Scheduling = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", relationship: "",
    recipientName: "", recipientAge: "", recipientCondition: "",
    serviceType: "", startDate: "", frequency: "",
    address: "", city: "", notes: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Consultation Scheduled!", description: "We'll contact you shortly to confirm." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <span className="inline-block px-4 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-6">Schedule Care</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Schedule Your{" "}
                  <span className="text-muted-foreground">Care Consultation</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  Take the first step towards compassionate, professional home care. Complete our scheduling form and we'll arrange a free consultation to discuss your specific needs and create a personalized care plan.
                </p>
              </div>
              <img src="/images/scheduling-hero.jpg" alt="Care consultation" className="rounded-2xl h-[300px] w-full object-cover" />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto">
              {steps.map((s) => (
                <button
                  key={s.num}
                  onClick={() => setCurrentStep(s.num)}
                  className={`p-4 rounded-xl border text-left transition-colors ${
                    currentStep === s.num ? "border-primary bg-primary-light" : "border-border"
                  }`}
                >
                  <span className={`inline-flex w-6 h-6 rounded-full text-xs items-center justify-center mb-2 ${
                    currentStep === s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>{s.num}</span>
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </button>
              ))}
            </div>

            <div className="w-full bg-border rounded-full h-1 mb-10 max-w-3xl mx-auto">
              <div className="bg-primary h-1 rounded-full transition-all" style={{ width: `${(currentStep / 4) * 100}%` }} />
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
                  <p className="text-sm text-muted-foreground mb-6">Tell us about yourself so we can contact you about the consultation.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="First Name *" required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    <input placeholder="Last Name *" required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <select value={form.relationship} onChange={(e) => update("relationship", e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Relationship to Care Recipient *</option>
                    <option>Adult Child</option>
                    <option>Spouse/Partner</option>
                    <option>Sibling</option>
                    <option>Friend</option>
                    <option>Other Family Member</option>
                    <option>Myself</option>
                    <option>Healthcare Professional</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-2">Care Recipient Information</h2>
                  <input placeholder="Recipient's Full Name *" required value={form.recipientName} onChange={(e) => update("recipientName", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input placeholder="Age" value={form.recipientAge} onChange={(e) => update("recipientAge", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <textarea placeholder="Current health conditions or care needs" rows={3} value={form.recipientCondition} onChange={(e) => update("recipientCondition", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-2">Service Details</h2>
                  <select value={form.serviceType} onChange={(e) => update("serviceType", e.target.value)} required className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select Service Type *</option>
                    <option>Personal Care Services</option>
                    <option>Companion Care</option>
                    <option>Respite Care</option>
                    <option>Dementia Care</option>
                    <option>Post-Operative Care</option>
                  </select>
                  <input type="date" placeholder="Preferred Start Date" value={form.startDate} onChange={(e) => update("startDate", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <select value={form.frequency} onChange={(e) => update("frequency", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Frequency of Care</option>
                    <option>Daily</option>
                    <option>A few times per week</option>
                    <option>Weekly</option>
                    <option>As needed</option>
                    <option>24/7 Care</option>
                  </select>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold mb-2">Location & Review</h2>
                  <input placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <textarea placeholder="Additional notes or questions" rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                </div>
              )}

              <div className="flex justify-between pt-4">
                {currentStep > 1 && (
                  <button type="button" onClick={() => setCurrentStep(currentStep - 1)} className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors text-sm">
                    &larr; Back
                  </button>
                )}
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                      Next &rarr;
                    </button>
                  ) : (
                    <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                      Submit Request
                    </button>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Your information is secure and will only be used to provide you with care services. We will never share your personal information with third parties without your consent.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Scheduling;
