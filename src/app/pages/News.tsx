import { Link } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";

export function News() {
  const featuredArticle = {
    title: "Trust Engineering Wins Regional Architecture Award 2025",
    date: "May 1, 2026",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1758193017781-e3aee6c3e359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    excerpt: "Our Skyline Tower project has been recognized with a prestigious regional architecture award, marking our 125th industry honor."
  };

  const articles = [
    {
      id: 1,
      title: "Pioneering Net-Zero Engineering: Our Sustainability Commitment",
      date: "April 28, 2026",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1773687746072-f0141aea1198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      excerpt: "How Trust Engineering is leading the industry transition to net-zero carbon buildings through innovative design and materials."
    },
    {
      id: 2,
      title: "Cairo Innovation District Breaks Ground",
      date: "April 22, 2026",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1760940358966-d1a972bafb19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      excerpt: "A major smart district project begins construction, setting new standards for sustainable mixed-use development."
    },
    {
      id: 3,
      title: "AI and Architecture: The Future of Design",
      date: "April 15, 2026",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1744627049721-73c27008ad28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      excerpt: "Exploring how artificial intelligence is transforming our design process and enabling unprecedented architectural possibilities."
    },
    {
      id: 4,
      title: "Trust Engineering Strengthens Gulf Operations",
      date: "April 8, 2026",
      category: "Company",
      image: "https://images.unsplash.com/photo-1777341430006-ab74b50c29ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      excerpt: "Our Riyadh and Doha teams expand delivery capacity for major projects across Saudi Arabia and Qatar."
    },
    {
      id: 5,
      title: "Celebrating 39 Years of Engineering Excellence",
      date: "March 30, 2026",
      category: "Company",
      image: "https://images.unsplash.com/photo-1774953037913-af0cf688491a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      excerpt: "Reflecting on nearly four decades of innovation, collaboration, and transformative projects."
    },
    {
      id: 6,
      title: "The Rise of Mass Timber in High-Rise Construction",
      date: "March 25, 2026",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1773637780568-34d2478a568e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      excerpt: "How we're pioneering sustainable structural solutions with engineered wood products in tall buildings."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            News & Insights
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Latest updates, thought leadership, and industry perspectives
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-white">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">
                {featuredArticle.category}
              </div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                {featuredArticle.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <Calendar size={18} />
                <span>{featuredArticle.date}</span>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#b8975a] hover:gap-4 transition-all">
                Read Full Article
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white group cursor-pointer">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-3">
                    {article.category}
                  </div>
                  <h3 className="text-2xl mb-4 group-hover:text-[#b8975a] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {article.excerpt}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#b8975a] hover:gap-4 transition-all text-sm">
                    Read More
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Informed
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest project updates, industry insights, and company news.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#b8975a]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
