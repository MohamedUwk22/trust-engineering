import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const leadership = [
    {
      name: "Dr. James Chen",
      position: "Founder & Chairman",
      bio: "Visionary architect with 40+ years of experience shaping landmark structures across the region.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      email: "j.chen@trusteng.com"
    },
    {
      name: "Sarah Williams",
      position: "Chief Executive Officer",
      bio: "Strategic leader driving regional growth and innovation in sustainable engineering.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      email: "s.williams@trusteng.com"
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Design Officer",
      bio: "Award-winning architect known for pushing boundaries in contemporary design.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      email: "m.rodriguez@trusteng.com"
    },
    {
      name: "Dr. Aisha Patel",
      position: "Chief Engineering Officer",
      bio: "Structural engineering expert specializing in high-performance and seismic design.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      email: "a.patel@trusteng.com"
    },
    {
      name: "David Chang",
      position: "Chief Technology Officer",
      bio: "Digital transformation pioneer integrating AI and BIM across all projects.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      email: "d.chang@trusteng.com"
    },
    {
      name: "Emma Schmidt",
      position: "Chief Sustainability Officer",
      bio: "Leading our commitment to net-zero engineering and environmental stewardship.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      email: "e.schmidt@trusteng.com"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1774953037913-af0cf688491a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Leadership Team
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Visionaries guiding the future of engineering excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Meet Our Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings together decades of expertise across architecture, engineering, sustainability, and technology. United by a shared vision of excellence and innovation, they guide Trust Engineering's commitment to creating structures that inspire and endure.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white group">
                <div className="relative h-[400px] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {member.name}
                  </h3>
                  <div className="text-[#b8975a] mb-4 uppercase text-sm tracking-wider">
                    {member.position}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {member.bio}
                  </p>
                  <div className="flex gap-4">
                    <a href={`mailto:${member.email}`} className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#b8975a] hover:text-[#b8975a] transition-colors">
                      <Mail size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-[#b8975a] hover:text-[#b8975a] transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                450+
              </div>
              <div className="text-gray-300">Team Members</div>
            </div>
            <div>
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                3
              </div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                35+
              </div>
              <div className="text-gray-300">Disciplines</div>
            </div>
            <div>
              <div className="text-5xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                12
              </div>
              <div className="text-gray-300">Languages Spoken</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence and innovation.
          </p>
          <a href="/careers" className="inline-block px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300">
            Explore Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
