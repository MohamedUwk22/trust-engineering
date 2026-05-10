import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const offices = [
    { city: "Cairo", address: "New Cairo, Cairo, Egypt", phone: "+20 2 2538 0100" },
    { city: "Riyadh", address: "King Fahd Road, Riyadh, Saudi Arabia", phone: "+966 11 212 0100" },
    { city: "Doha", address: "West Bay, Doha, Qatar", phone: "+974 4402 0100" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#b8975a] flex items-center justify-center">
                <span className="text-white font-medium text-xl">TE</span>
              </div>
              <div>
                <div className="text-xl tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Trust Engineering
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Pioneering excellence in architecture and engineering since 1987.
              Shaping sustainable infrastructure across Egypt, Saudi Arabia, and Qatar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-[#b8975a] hover:text-[#b8975a] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-[#b8975a] hover:text-[#b8975a] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-[#b8975a] hover:text-[#b8975a] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-[#b8975a] transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-[#b8975a] transition-colors">Leadership</Link></li>
              <li><Link to="/awards" className="text-gray-400 hover:text-[#b8975a] transition-colors">Awards</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-[#b8975a] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-[#b8975a] transition-colors">Architecture</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#b8975a] transition-colors">Structural Engineering</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#b8975a] transition-colors">Urban Planning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#b8975a] transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:info@trusteng.com" className="text-gray-400 hover:text-[#b8975a] transition-colors flex items-center gap-2">
                <Mail size={16} /> info@trusteng.com
              </a></li>
              <li><a href="tel:+20225380100" className="text-gray-400 hover:text-[#b8975a] transition-colors flex items-center gap-2">
                <Phone size={16} /> +20 2 2538 0100
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {offices.map((office) => (
              <div key={office.city} className="group">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#b8975a] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-2">{office.city}</h4>
                    <p className="text-sm text-gray-400 mb-2">{office.address}</p>
                    <p className="text-sm text-gray-400">{office.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Trust Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#b8975a] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#b8975a] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#b8975a] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
