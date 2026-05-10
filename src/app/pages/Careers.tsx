import { Briefcase, Heart, GraduationCap, Globe, TrendingUp, Users } from "lucide-react";

export function Careers() {
  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and mental health benefits" },
    { icon: GraduationCap, title: "Learning & Development", description: "Continuous education programs and professional certifications" },
    { icon: Globe, title: "Regional Opportunities", description: "Work with teams in Egypt, Saudi Arabia, and Qatar" },
    { icon: TrendingUp, title: "Career Growth", description: "Clear advancement paths and mentorship programs" },
    { icon: Users, title: "Collaborative Culture", description: "Inclusive environment that celebrates diversity" },
    { icon: Briefcase, title: "Work-Life Balance", description: "Flexible schedules and generous time-off policies" }
  ];

  const positions = [
    {
      title: "Senior Structural Engineer",
      department: "Engineering",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Lead structural design for high-rise and complex projects"
    },
    {
      title: "Architectural Designer",
      department: "Architecture",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      description: "Create innovative design solutions for commercial and residential projects"
    },
    {
      title: "Sustainability Consultant",
      department: "Sustainability",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Develop sustainable strategies and achieve green building certifications"
    },
    {
      title: "Project Manager",
      department: "Project Management",
      location: "Cairo, Egypt",
      type: "Full-time",
      description: "Oversee large-scale infrastructure and development projects"
    },
    {
      title: "BIM Coordinator",
      department: "Technology",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      description: "Manage Building Information Modeling processes and coordination"
    },
    {
      title: "Urban Planning Specialist",
      department: "Planning",
      location: "Doha, Qatar",
      type: "Full-time",
      description: "Design sustainable urban master plans and community developments"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1744627049721-73c27008ad28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Careers
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Build your future with a leading regional engineering firm
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Why Trust Engineering</div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Shape the Future of Engineering
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a regional team of specialists committed to creating structures that inspire and endure for generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-[#f8f8f8] p-8">
                  <div className="w-14 h-14 bg-[#b8975a] flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Our Culture</div>
              <h2 className="text-4xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Where Innovation Meets Collaboration
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Trust Engineering, we believe our people are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning where every team member can thrive and make an impact.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From junior designers to senior partners, everyone has a voice in shaping the future of our firm and the projects we create. We celebrate diversity, encourage creative risk-taking, and support professional growth at every stage of your career.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With offices in Egypt, Saudi Arabia, and Qatar, you'll have opportunities to work on major regional projects while building strong relationships with colleagues across our markets.
              </p>
            </div>
            <div className="relative h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1774953037913-af0cf688491a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                alt="Team Culture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Current Openings</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join Our Team
            </h2>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:border-[#b8975a] transition-colors group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 group-hover:text-[#b8975a] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <Globe size={16} />
                        {position.location}
                      </span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300 whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-32 bg-[#b8975a] text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to Trust Engineering.
          </p>
          <button className="px-8 py-4 bg-white text-[#b8975a] hover:bg-gray-100 transition-all duration-300">
            Submit General Application
          </button>
        </div>
      </section>
    </div>
  );
}
