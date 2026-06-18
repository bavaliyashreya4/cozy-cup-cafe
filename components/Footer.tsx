import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-mocha-dark text-cream-soft pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-heading italic text-3xl font-semibold tracking-wide mb-4">
              Cozy Cup
            </h2>
            <p className="text-beige-warm italic mb-6">With Your Soul</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/cozycup.cafe" target="_blank" rel="noopener noreferrer" className="hover:text-gold-accent transition-colors font-medium">
                IG
              </a>
              <a href="#" className="hover:text-gold-accent transition-colors font-medium">
                FB
              </a>
              <a href="#" className="hover:text-gold-accent transition-colors font-medium">
                TW
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-gold-accent">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-gold-accent transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gold-accent transition-colors">Menu</Link></li>
              <li><Link href="/our-story" className="hover:text-gold-accent transition-colors">Our Story</Link></li>
              <li><Link href="/reservations" className="hover:text-gold-accent transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-gold-accent">Contact</h3>
            <ul className="space-y-4 text-sm text-beige-warm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-accent shrink-0 mt-0.5" />
                <span>CG Road, Navrangpura<br/>Ahmedabad, Gujarat<br/>India 380009</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-gold-accent">Hours</h3>
            <ul className="space-y-4 text-sm text-beige-warm">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-gold-accent shrink-0 mt-0.5" />
                <span>Open Daily<br/>8:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-medium pt-8 text-center text-sm text-beige-warm/60">
          <p>&copy; {new Date().getFullYear()} Cozy Cup Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
