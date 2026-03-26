import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="StoneBridge Community Partners" className="h-10 w-auto" />
              <span className="font-heading text-base font-bold leading-tight">QUEEN<br/>HOME CARE</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-5">
              Providing reliable care for your peace of mind in Charlotte, NC - Charlotte and surrounding communities and surrounding areas. Bringing compassionate caregivers to your doorstep with dignity, respect, and genuine human connection.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-background/10 rounded-full">Licensed & Insured</span>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-background/10 rounded-full">Trained Caregivers</span>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-background/10 rounded-full">Personalized Care Plans</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/services/personal-care" className="hover:opacity-100 transition-opacity">Personal Care</Link></li>
              <li><Link to="/services/companion-care" className="hover:opacity-100 transition-opacity">Companion Care</Link></li>
              <li><Link to="/services/respite-care" className="hover:opacity-100 transition-opacity">Respite Care</Link></li>
              <li><Link to="/services/dementia-care" className="hover:opacity-100 transition-opacity">Dementia Care</Link></li>
              <li><Link to="/services/post-operative-care" className="hover:opacity-100 transition-opacity">Post-Operative Care</Link></li>
              <li className="pt-2 border-t border-background/10">
                <Link to="/scheduling" className="hover:opacity-100 transition-opacity font-medium">Schedule Assessment</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/refer-us" className="hover:opacity-100 transition-opacity">Refer Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link to="/scheduling" className="hover:opacity-100 transition-opacity">Schedule Care</Link></li>
            </ul>
            <h4 className="font-heading text-sm font-semibold mt-6 mb-3 opacity-80">Legal</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Charlotte, NC - Charlotte and surrounding communities</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:704-659-3753" className="hover:opacity-100 transition-opacity">704-659-3753</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:sreaves01@sbcommunitypartners.org" className="hover:opacity-100 transition-opacity">sreaves01@sbcommunitypartners.org</a>
              </div>
            </div>

            <h4 className="font-heading text-sm font-semibold mt-6 mb-3 opacity-80">Business Hours</h4>
            <div className="space-y-2 text-sm opacity-70">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday & Sunday: On-call</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h4 className="font-heading text-lg font-semibold mb-1">Stay Connected with StoneBridge Community Partners</h4>
              <p className="text-sm opacity-60">Get care tips and updates delivered to your inbox.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-50">
          <p>&copy; 2024 StoneBridge Community Partners. All rights reserved.</p>
          <p className="mt-2 text-xs">Serving the areas of Charlotte, NC - Charlotte and surrounding communities and surrounding areas. Experts in providing compassionate in-home care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
