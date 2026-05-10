import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, MapPin, Users, Award } from "lucide-react";

export function ProjectDetails() {
  const { id } = useParams();

  const projectData: Record<string, any> = {
    "skyline-tower": {
      title: "Skyline Tower",
      location: "Cairo, Egypt",
      category: "Commercial",
      year: "2024",
      client: "Skyline Development Corp",
      size: "285,000 sq ft",
      heroImage: "https://images.unsplash.com/photo-1764270594264-4af7654f7cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000",
      images: [
        "https://images.unsplash.com/photo-1761706885595-02fdd9fe91bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        "https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        "https://images.unsplash.com/photo-1773637780568-34d2478a568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
      ],
      overview: "Skyline Tower stands as a testament to modern architectural innovation, rising 82 stories above Cairo's new business district. This mixed-use development combines premium office space, luxury residences, and destination retail in a striking glass-and-steel form that has become a defining landmark of the city skyline.",
      scope: [
        "Architectural Design & Master Planning",
        "Structural Engineering",
        "MEP Engineering",
        "Sustainability Consulting",
        "Construction Administration"
      ],
      challenges: [
        "Designing for high seismic and wind loads in a densely urban context",
        "Integrating complex mixed-use programming vertically",
        "Achieving LEED Gold certification in a supertall building",
        "Coordinating with 14 different stakeholder groups"
      ],
      solutions: [
        "Implemented advanced tuned mass damper system for wind resistance",
        "Created distinct vertical zones with separate core systems",
        "Integrated high-performance facade with energy recovery systems",
        "Developed comprehensive BIM coordination workflow"
      ],
      stats: [
        { label: "Height", value: "1,050 ft" },
        { label: "Floors", value: "82" },
        { label: "Construction Time", value: "4.5 years" },
        { label: "Investment", value: "$1.2B" }
      ],
      awards: [
        "Best Tall Building Regional Award 2024",
        "Engineering Excellence Honor Award 2024",
        "LEED Gold Certification"
      ]
    }
  };

  const project = projectData[id || ""] || projectData["skyline-tower"];

  const relatedProjects = [
    {
      id: "marina-bay-complex",
      title: "Marina Bay Complex",
      location: "Doha, Qatar",
      image: "https://images.unsplash.com/photo-1761706885595-02fdd9fe91bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      id: "zenith-headquarters",
      title: "Zenith Headquarters",
      location: "Riyadh, Saudi Arabia",
      image: "https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 pb-20 text-white w-full">
          <Link to="/projects" className="inline-flex items-center gap-2 mb-8 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">{project.category}</div>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                {project.overview}
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                {project.stats.map((stat: any, index: number) => (
                  <div key={index}>
                    <div className="text-3xl text-[#b8975a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f8f8f8] p-8 h-fit">
              <h3 className="text-xl mb-6 font-medium">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="font-medium">{project.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Completed</div>
                  <div className="font-medium">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Size</div>
                  <div className="font-medium">{project.size}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Category</div>
                  <div className="font-medium">{project.category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="relative h-[400px] overflow-hidden group cursor-pointer">
                <img
                  src={image}
                  alt={`${project.title} view ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Scope of Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.scope.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#b8975a] flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b8975a] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#b8975a] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.awards.map((award: string, index: number) => (
              <div key={index} className="bg-[#f8f8f8] p-8 flex items-start gap-4">
                <Award className="text-[#b8975a] flex-shrink-0" size={24} />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Related Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedProjects.map((related) => (
              <Link
                key={related.id}
                to={`/projects/${related.id}`}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl mb-2">{related.title}</h3>
                <p className="text-gray-400">{related.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
