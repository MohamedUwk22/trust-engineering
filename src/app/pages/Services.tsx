import { Link } from "react-router";
import { Building2, Ruler, TreePine, Home, Lightbulb, Shield, ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Architecture",
      description: "Visionary design solutions that blend aesthetics, functionality, and sustainability.",
      features: [
        "Conceptual Design",
        "Master Planning",
        "3D Visualization",
        "Historic Preservation",
        "Interior Architecture"
      ],
      image: "https://images.unsplash.com/photo-1773637780568-34d2478a568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
    },
    {
      icon: Ruler,
      title: "Structural Engineering",
      description: "Advanced structural solutions for complex and innovative projects across the region.",
      features: [
        "Seismic Design",
        "High-Rise Structures",
        "Bridge Engineering",
        "Finite Element Analysis",
        "Performance-Based Design"
      ],
      image: "https://images.unsplash.com/photo-1760940358966-d1a972bafb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Sophisticated interior environments that elevate the human experience.",
      features: [
        "Workplace Design",
        "Luxury Residential",
        "Hospitality Interiors",
        "Material Selection",
        "Lighting Design"
      ],
      image: "https://images.unsplash.com/photo-1774953037913-af0cf688491a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "Expert oversight ensuring projects are delivered on time, on budget, and to specification.",
      features: [
        "Construction Administration",
        "Budget Management",
        "Schedule Coordination",
        "Quality Assurance",
        "Risk Mitigation"
      ],
      image: "https://images.unsplash.com/photo-1744627049721-73c27008ad28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
    },
    {
      icon: TreePine,
      title: "Urban Planning",
      description: "Strategic planning for resilient, sustainable, and human-centered communities.",
      features: [
        "Smart City Planning",
        "Transit-Oriented Development",
        "Public Space Design",
        "Zoning Strategy",
        "Community Engagement"
      ],
      image: "https://images.unsplash.com/photo-1777341430006-ab74b50c29ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
    },
    {
      icon: Lightbulb,
      title: "Sustainability Consulting",
      description: "Innovative strategies to minimize environmental impact and maximize energy efficiency.",
      features: [
        "LEED Certification",
        "Carbon Footprint Analysis",
        "Energy Modeling",
        "Green Building Strategy",
        "Net-Zero Design"
      ],
      image: "https://images.unsplash.com/photo-1773687746072-f0141aea1198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Comprehensive engineering solutions for ambitious projects across Egypt, Saudi Arabia, and Qatar
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="w-16 h-16 bg-[#b8975a] flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl mb-4 font-medium">Key Capabilities</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#b8975a] rounded-full"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#b8975a] hover:gap-4 transition-all">
                      Discuss Your Project
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div className={`relative h-[500px] ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Why Trust Engineering</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Trust Engineering Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                39
              </div>
              <h3 className="text-xl mb-3">Years of Excellence</h3>
              <p className="text-gray-400">
                Nearly four decades of industry leadership and proven expertise
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                850+
              </div>
              <h3 className="text-xl mb-3">Projects Delivered</h3>
              <p className="text-gray-400">
                From concept to completion across Egypt, Saudi Arabia, and Qatar
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                98%
              </div>
              <h3 className="text-xl mb-3">Client Satisfaction</h3>
              <p className="text-gray-400">
                Exceptional results that exceed expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team of experts is ready to transform your vision into reality with innovative, sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
