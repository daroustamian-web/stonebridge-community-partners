import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyTrustSection from "@/components/home/WhyTrustSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ReferralSection from "@/components/home/ReferralSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyTrustSection />
        <TestimonialsSection />
        <ReferralSection />
        <BlogSection />
        <ContactSection />
        <NewsletterSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
