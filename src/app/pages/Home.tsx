import { Link } from "react-router";
import { ArrowRight, Award, Users, Globe, TrendingUp } from "lucide-react";

export function Home() {
  const services = [
    {
      title: "Architecture",
      description: "Visionary design solutions that harmonize form, function, and sustainability.",
      image: "https://images.unsplash.com/photo-1773637780568-34d2478a568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Structural Engineering",
      description: "Precision-engineered frameworks that redefine structural possibilities.",
      image: "https://images.unsplash.com/photo-1760940358966-d1a972bafb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Urban Planning",
      description: "Strategic master planning for resilient, human-centered communities.",
      image: "https://images.unsplash.com/photo-1777341430006-ab74b50c29ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const projects = [
    {
      id: "skyline-tower",
      title: "Skyline Tower",
      location: "Cairo, Egypt",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1764270594264-4af7654f7cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    },
    {
      id: "marina-bay-complex",
      title: "Marina Bay Complex",
      location: "Doha, Qatar",
      category: "Mixed-Use",
      image: "https://images.unsplash.com/photo-1761706885595-02fdd9fe91bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    },
    {
      id: "zenith-headquarters",
      title: "Zenith Headquarters",
      location: "Riyadh, Saudi Arabia",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
    }
  ];

  const stats = [
    { value: "850+", label: "Projects Delivered" },
    { value: "3", label: "Countries" },
    { value: "450+", label: "Team Members" },
    { value: "125", label: "Industry Awards" }
  ];

  const testimonials = [
    {
      quote: "Trust Engineering transformed our vision into an architectural masterpiece that exceeds all expectations.",
      author: "Sarah Chen",
      position: "CEO, Zenith Corporation"
    },
    {
      quote: "Their commitment to sustainability and innovation sets a new standard in the industry.",
      author: "Michael Rodriguez",
      position: "Director, Urban Development"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776941251044-860da5c8f888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Engineering<br />the Future
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-200">
            Pioneering excellence in architecture and structural engineering since 1987
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Our Work
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">About Us</div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Building Tomorrow's Infrastructure Today
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For nearly four decades, Trust Engineering has been at the forefront of architectural and engineering excellence. Our regional team combines cutting-edge technology with timeless design principles to create structures that inspire and endure.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that great engineering goes beyond structural integrity—it shapes communities, transforms skylines, and creates legacies that span generations.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#b8975a] hover:gap-4 transition-all">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1774953037913-af0cf688491a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                alt="Office Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission/Values */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b8975a] mx-auto mb-6 flex items-center justify-center">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Vision</h3>
              <p className="text-gray-600">
                To be the region's most trusted partner in shaping sustainable, innovative infrastructure that defines the future of human spaces.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b8975a] mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Mission</h3>
              <p className="text-gray-600">
                Deliver exceptional engineering solutions through innovation, collaboration, and an unwavering commitment to excellence and sustainability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b8975a] mx-auto mb-6 flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Values</h3>
              <p className="text-gray-600">
                Integrity, innovation, sustainability, and client partnership form the foundation of everything we create and every relationship we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Our Services</div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Comprehensive Engineering Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 mb-6 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-20">
            <div>
              <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Featured Work</div>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Iconic Projects
              </h2>
            </div>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-[#b8975a] hover:gap-4 transition-all">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group cursor-pointer"
              >
                <div className="relative h-96 mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.location}</p>
                  </div>
                  <span className="text-sm text-[#b8975a]">{project.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Preview */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                alt="Awards"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Recognition</div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Award-Winning Excellence
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our commitment to innovation and excellence has earned recognition from leading engineering and architecture institutions. With over 125 industry awards, we continue to push the boundaries of what's possible.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Award className="text-[#b8975a]" size={24} />
                  <span>Regional Architecture Award 2025</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="text-[#b8975a]" size={24} />
                  <span>Sustainability Innovation Prize 2024</span>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="text-[#b8975a]" size={24} />
                  <span>Engineering Excellence Award 2024</span>
                </div>
              </div>
              <Link to="/awards" className="inline-flex items-center gap-2 text-[#b8975a] hover:gap-4 transition-all">
                View All Awards
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Client Testimonials</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f8f8f8] p-12">
                <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-medium mb-1">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#b8975a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
            Let's discuss how Trust Engineering can bring your vision to life with innovative, sustainable solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#b8975a] hover:bg-gray-100 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
