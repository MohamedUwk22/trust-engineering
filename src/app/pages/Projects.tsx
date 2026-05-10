import { Link } from "react-router";
import { useState } from "react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Commercial", "Residential", "Mixed-Use", "Infrastructure", "Cultural"];

  const projects = [
    {
      id: "skyline-tower",
      title: "Skyline Tower",
      location: "Cairo, Egypt",
      category: "Commercial",
      year: "2024",
      image: "https://images.unsplash.com/photo-1764270594264-4af7654f7cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "82-story mixed-use tower redefining Cairo's new business skyline"
    },
    {
      id: "marina-bay-complex",
      title: "Marina Bay Complex",
      location: "Doha, Qatar",
      category: "Mixed-Use",
      year: "2025",
      image: "https://images.unsplash.com/photo-1761706885595-02fdd9fe91bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Integrated development combining retail, residential, and hospitality"
    },
    {
      id: "zenith-headquarters",
      title: "Zenith Headquarters",
      location: "Riyadh, Saudi Arabia",
      category: "Commercial",
      year: "2023",
      image: "https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "LEED Platinum certified corporate campus with net-zero energy"
    },
    {
      id: "arc-residences",
      title: "The Arc Residences",
      location: "New Cairo, Egypt",
      category: "Residential",
      year: "2024",
      image: "https://images.unsplash.com/photo-1776941251044-860da5c8f888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Luxury high-rise residential tower with innovative facade design"
    },
    {
      id: "cultural-center",
      title: "National Cultural Center",
      location: "Doha, Qatar",
      category: "Cultural",
      year: "2023",
      image: "https://images.unsplash.com/photo-1773687746072-f0141aea1198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Award-winning museum and performance venue"
    },
    {
      id: "metro-extension",
      title: "Metro Line Extension",
      location: "Riyadh, Saudi Arabia",
      category: "Infrastructure",
      year: "2022",
      image: "https://images.unsplash.com/photo-1777341430006-ab74b50c29ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "15km underground transit system with 12 new stations"
    },
    {
      id: "innovation-district",
      title: "Innovation District",
      location: "Cairo, Egypt",
      category: "Mixed-Use",
      year: "2025",
      image: "https://images.unsplash.com/photo-1760940358966-d1a972bafb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Smart city development integrating technology and sustainability"
    },
    {
      id: "riverside-pavilion",
      title: "Riverside Pavilion",
      location: "Doha, Qatar",
      category: "Cultural",
      year: "2024",
      image: "https://images.unsplash.com/photo-1771898013427-a015648e54cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Contemporary arts center with iconic river frontage"
    },
    {
      id: "luxury-villas",
      title: "Oceanview Villas",
      location: "North Coast, Egypt",
      category: "Residential",
      year: "2023",
      image: "https://images.unsplash.com/photo-1771244611638-6bc7e8e2e144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
      description: "Exclusive collection of sustainable luxury residences"
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Projects
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Iconic structures that shape skylines and communities across Egypt, Saudi Arabia, and Qatar
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#b8975a] text-white"
                    : "border border-gray-300 text-gray-700 hover:border-[#b8975a] hover:text-[#b8975a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-6 right-6 bg-[#b8975a] text-white px-4 py-2 text-sm">
                    {project.year}
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-sm text-[#b8975a] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.location}</p>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with award-winning engineering excellence.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
