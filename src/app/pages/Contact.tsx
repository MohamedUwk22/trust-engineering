import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const offices = [
    {
      city: "Cairo",
      address: "New Cairo Business District",
      postal: "Cairo, Egypt",
      phone: "+20 2 2538 0100",
      email: "cairo@trusteng.com"
    },
    {
      city: "Riyadh",
      address: "King Fahd Road",
      postal: "Riyadh, Saudi Arabia",
      phone: "+966 11 212 0100",
      email: "riyadh@trusteng.com"
    },
    {
      city: "Doha",
      address: "West Bay",
      postal: "Doha, Qatar",
      phone: "+974 4402 0100",
      email: "doha@trusteng.com"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758448656987-cfae6bf225e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 text-center text-white">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Let's discuss how we can bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-4xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Start a Conversation
              </h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Whether you have a project in mind, a question about our services, or would like to explore partnership opportunities, we'd love to hear from you.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors">
                    <option value="">Select a service</option>
                    <option value="architecture">Architecture</option>
                    <option value="structural">Structural Engineering</option>
                    <option value="interior">Interior Design</option>
                    <option value="project-mgmt">Project Management</option>
                    <option value="urban">Urban Planning</option>
                    <option value="sustainability">Sustainability Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm uppercase tracking-wider text-gray-700">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#b8975a] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-[#b8975a] text-white hover:bg-[#a1824d] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#f8f8f8] p-8 sticky top-24">
                <h3 className="text-2xl mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                  General Inquiries
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-[#b8975a] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:info@trusteng.com" className="text-gray-600 hover:text-[#b8975a] transition-colors">
                        info@trusteng.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-[#b8975a] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <a href="tel:+20225380100" className="text-gray-600 hover:text-[#b8975a] transition-colors">
                        +20 2 2538 0100
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#b8975a] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Headquarters</div>
                      <div className="text-gray-600">
                        New Cairo Business District<br />
                        Cairo, Egypt
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <h4 className="font-medium mb-4">Business Hours</h4>
                  <div className="text-gray-600 text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-32 bg-[#f8f8f8]">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="text-sm uppercase tracking-widest text-[#b8975a] mb-4">Our Locations</div>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              Regional Offices
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-8">
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {office.city}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Address</div>
                    <div>{office.address}</div>
                    <div>{office.postal}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-[#b8975a] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href={`mailto:${office.email}`} className="hover:text-[#b8975a] transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
          <p className="text-gray-500 text-lg">Interactive Map Placeholder</p>
          <p className="text-gray-400 text-sm">Egypt, Saudi Arabia, and Qatar office locations</p>
        </div>
      </section>
    </div>
  );
}
