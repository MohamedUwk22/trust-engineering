import { Award, Trophy, Star } from "lucide-react";

export function Awards() {
  const awardsByYear = [
    {
      year: "2025",
      awards: [
        {
          title: "Regional Architecture Award",
          project: "Skyline Tower",
          organization: "Council on Tall Buildings and Urban Habitat",
          category: "Best Tall Building"
        },
        {
          title: "Innovation in Sustainability",
          project: "Zenith Headquarters",
          organization: "Green Building Council",
          category: "Net-Zero Innovation"
        }
      ]
    },
    {
      year: "2024",
      awards: [
        {
          title: "AIA Honor Award",
          project: "National Cultural Center",
          organization: "Architecture Excellence Forum",
          category: "Architecture Excellence"
        },
        {
          title: "Engineering Excellence Award",
          project: "Marina Bay Complex",
          organization: "Institution of Structural Engineers",
          category: "Commercial Structures"
        },
        {
          title: "LEED Platinum Certification",
          project: "Innovation District",
          organization: "Green Building Council",
          category: "Urban Development"
        }
      ]
    },
    {
      year: "2023",
      awards: [
        {
          title: "Best Design Award",
          project: "Riverside Pavilion",
          organization: "Architecture Design Festival",
          category: "Cultural Buildings"
        },
        {
          title: "Structural Achievement",
          project: "Metro Line Extension",
          organization: "Bridge and Structural Engineering Association",
          category: "Infrastructure"
        },
        {
          title: "Innovation Prize",
          project: "The Arc Residences",
          organization: "Architectural Review",
          category: "Residential High-Rise"
        }
      ]
    },
    {
      year: "2022",
      awards: [
        {
          title: "Firm of the Year",
          project: "Trust Engineering",
          organization: "Engineering News-Record",
          category: "Regional Impact"
        },
        {
          title: "Sustainability Leadership",
          project: "Corporate Portfolio",
          organization: "Architecture 2030",
          category: "Carbon Reduction"
        }
      ]
    }
  ];

  const certifications = [
    "LEED Accredited Professional (AP)",
    "Saudi Council of Engineers",
    "Egyptian Syndicate of Engineers",
    "Urban Planning and Development Standards",
    "Qatar Green Building Council",
    "ISO 9001 Quality Management",
    "ISO 14001 Environmental Management",
    "WELL Building Standard"
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Awards"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Awards & Recognition
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Celebrating excellence and innovation in engineering
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-20 h-20 bg-[#b8975a] mx-auto mb-6 flex items-center justify-center">
                <Trophy className="text-white" size={40} />
              </div>
              <div className="text-6xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                125+
              </div>
              <div className="text-xl text-gray-600">Industry Awards</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-[#b8975a] mx-auto mb-6 flex items-center justify-center">
                <Award className="text-white" size={40} />
              </div>
              <div className="text-6xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                50+
              </div>
              <div className="text-xl text-gray-600">LEED Certified Projects</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-[#b8975a] mx-auto mb-6 flex items-center justify-center">
                <Star className="text-white" size={40} />
              </div>
              <div className="text-6xl mb-4 text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                15
              </div>
              <div className="text-xl text-gray-600">Industry Fellowships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Awards Timeline */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Recognition</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Recent Awards
            </h2>
          </div>

          <div className="space-y-16">
            {awardsByYear.map((yearGroup, yearIndex) => (
              <div key={yearIndex}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-5xl text-[#b8975a]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {yearGroup.year}
                  </div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {yearGroup.awards.map((award, awardIndex) => (
                    <div key={awardIndex} className="bg-white p-8">
                      <div className="w-12 h-12 bg-[#b8975a] flex items-center justify-center mb-6">
                        <Award className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {award.title}
                      </h3>
                      <div className="space-y-2 text-gray-600 text-sm">
                        <div>
                          <span className="text-gray-500">Project:</span> {award.project}
                        </div>
                        <div>
                          <span className="text-gray-500">Organization:</span> {award.organization}
                        </div>
                        <div>
                          <span className="text-gray-500">Category:</span> {award.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Professional Standards</div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Certifications & Memberships
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is validated through industry-leading certifications and professional affiliations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#f8f8f8] p-6 text-center">
                <div className="w-10 h-10 bg-[#b8975a] mx-auto mb-4 flex items-center justify-center">
                  <Star className="text-white" size={20} />
                </div>
                <div className="text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Legacy of Excellence
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            For nearly four decades, Trust Engineering has set the standard for innovation, sustainability, and design excellence. Each award represents our team's dedication to pushing boundaries and creating structures that inspire. But our greatest achievement isn't the recognition—it's the positive impact our work has on communities across Egypt, Saudi Arabia, and Qatar.
          </p>
        </div>
      </section>
    </div>
  );
}
