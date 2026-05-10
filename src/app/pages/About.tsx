import { Check, MapPin } from "lucide-react";

export function About() {
  const timeline = [
    { year: "1987", event: "Founded in Cairo", description: "Trust Engineering established with a vision to redefine architectural excellence" },
    { year: "1995", event: "Regional Growth", description: "Expanded our engineering capabilities across Egypt" },
    { year: "2003", event: "Sustainability Pioneer", description: "Launched our first LEED Platinum certified project" },
    { year: "2012", event: "Innovation Hub", description: "Established R&D division for advanced materials and smart buildings" },
    { year: "2020", event: "Digital Transformation", description: "Integrated AI and BIM technologies across all projects" },
    { year: "2026", event: "Regional Leader", description: "Recognized for landmark work across Egypt, Saudi Arabia, and Qatar" }
  ];

  const values = [
    { title: "Excellence", description: "We pursue the highest standards in every project, never compromising on quality or precision." },
    { title: "Innovation", description: "We embrace cutting-edge technology and creative thinking to solve complex challenges." },
    { title: "Sustainability", description: "We design for the long term, prioritizing environmental responsibility and resilience." },
    { title: "Collaboration", description: "We believe the best solutions emerge from diverse perspectives working in partnership." },
    { title: "Integrity", description: "We operate with transparency, honesty, and unwavering ethical standards." },
    { title: "Impact", description: "We create structures that improve communities and leave lasting positive legacies." }
  ];

  const regionalPresence = [
    { region: "Egypt", offices: 1, projects: 320 },
    { region: "Saudi Arabia", offices: 1, projects: 185 },
    { region: "Qatar", offices: 1, projects: 95 }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1774192620890-f61475279725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Nearly four decades of engineering excellence and innovation
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Who We Are</div>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Building the Future Since 1987
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Trust Engineering was founded on a simple but powerful belief: that exceptional engineering can transform not just skylines, but entire communities and ways of life. What began as a focused architectural and engineering practice in Cairo has evolved into a trusted regional partner for integrated engineering solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, our teams in Egypt, Saudi Arabia, and Qatar continue to push the boundaries of what's possible in architecture, structural engineering, and sustainable design. Our portfolio includes landmark developments, civic spaces, and award-winning cultural projects across the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                But our greatest achievement isn't measured in height or square footage—it's measured in the positive impact our work has on the people who live, work, and gather in the spaces we create.
              </p>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1758448656987-cfae6bf225e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                alt="Modern Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Our Journey</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Milestones That Define Us
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.year}
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2">
                  <div className="w-4 h-4 bg-[#b8975a] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <div className="flex-1 pb-12 border-b border-gray-300">
                  <h3 className="text-2xl mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the region's most trusted partner in shaping sustainable, innovative infrastructure that defines the future of human spaces. We envision communities where engineering excellence and environmental stewardship create structures that inspire generations.
              </p>
            </div>
            <div>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To deliver exceptional engineering solutions through innovation, collaboration, and an unwavering commitment to excellence. We create value for our clients while advancing the industry through sustainable practices and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Our Principles</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#f8f8f8] p-8">
                <div className="w-12 h-12 bg-[#b8975a] flex items-center justify-center mb-6">
                  <Check className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Regional Reach</div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Regional Presence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With offices in Egypt, Saudi Arabia, and Qatar, we bring local expertise and regional perspective to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {regionalPresence.map((region, index) => (
              <div key={index} className="bg-white p-8 text-center">
                <MapPin className="text-[#b8975a] mx-auto mb-4" size={32} />
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {region.region}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div>{region.offices} Offices</div>
                  <div>{region.projects}+ Projects</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-12 text-center">
            <div className="text-6xl text-[#b8975a] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              3
            </div>
            <div className="text-xl text-gray-600 mb-8">Countries Where We Operate</div>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-500">
              <span>Egypt</span>
              <span>•</span>
              <span>Saudi Arabia</span>
              <span>•</span>
              <span>Qatar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-32 bg-[#b8975a] text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            "Engineering is not just about structures—it's about creating possibilities for human flourishing."
          </h2>
          <p className="text-xl text-white/90">
            — Dr. James Chen, Founder & Chairman
          </p>
        </div>
      </section>
    </div>
  );
}
