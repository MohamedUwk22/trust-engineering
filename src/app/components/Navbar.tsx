import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "News", path: "/news" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const brandTextClass = isScrolled ? "text-[#1a1a1a]" : "text-white";
  const brandMetaClass = isScrolled ? "text-gray-500" : "text-white/75";
  const linkClass = isScrolled
    ? "text-gray-700 hover:text-[#b8975a]"
    : "text-white hover:text-[#d8bd83]";
  const mobileButtonClass = isScrolled
    ? "text-[#1a1a1a] hover:text-[#b8975a]"
    : "text-white hover:text-[#d8bd83]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-[#1a1a1a]/75 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#b8975a] flex items-center justify-center">
                <span className="text-white font-medium text-lg">TE</span>
              </div>
              <div>
                <div className={`text-lg tracking-wide transition-colors duration-300 ${brandTextClass}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                  Trust Engineering
                </div>
                <div className={`text-xs tracking-widest uppercase transition-colors duration-300 ${brandMetaClass}`}>
                  Since 1987
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 relative group ${linkClass}`}
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#b8975a] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${mobileButtonClass}`}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg text-gray-700 hover:text-[#b8975a] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
