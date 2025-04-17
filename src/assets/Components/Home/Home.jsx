import React from "react";
import teaImage from "../../images/tea.jpg";
import cropsImage from "../../images/crops.png";
import gumbiImage from "../../images/lilly.jpg";
import testimonial1 from "../../images/testimonials/person1.jpg";
import testimonial2 from "../../images/testimonials/person2.jpg";
import testimonial3 from "../../images/testimonials/person3.jpg";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400 relative overflow-hidden py-12">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-white mb-6">
                Welcome to Mongarlowe Gourmet Farm
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Experience the perfect harmony of nature, sustainability, and
                purpose. At Mongarlowe Gourmet, we craft premium Gumbi Gumbi tea
                blends and seasonal delights while giving back to our community.
                As a proud, 50% Aboriginal-owned social enterprise, our journey
                celebrates resilience and sustainability, ensuring every product
                reflects our commitment to quality and care.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors">
                  Learn More
                </button>
                <button className="border border-white text-white hover:bg-white/10 px-6 py-2.5 rounded-md text-sm font-medium transition-colors">
                  Explore it
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <div className="relative max-w-lg">
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/30">
                  <img
                    src={teaImage}
                    alt="Moringa Tea Collection"
                    className="w-full h-auto rounded-lg object-cover shadow-md"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
                  Tea Blend
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Product is Special */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why Our Product is Special</h2>
          
          <div className="max-w-5xl mx-auto space-y-16">
            {/* First Row */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-64 relative flex-shrink-0">
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <img
                    src={cropsImage}
                    alt="Sustainable Crops"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-600 leading-relaxed">
                  At Mongarlowe Gourmet, every product is a testament to nature and care. Our Gumbi Gumbi tea blends 
                  are sustainably grown, hand-harvested, and crafted with precision to ensure the highest quality. Unique 
                  seasonal offerings, like truffled coconut, showcase our innovation and dedication to creating something truly special.
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-64 h-64 relative flex-shrink-0">
                <div className="bg-gray-100/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <img
                    src={gumbiImage}
                    alt="Gumbi Gumbi Tea"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-600 leading-relaxed">
                  We prioritize sustainability, social responsibility, and supporting health-conscious individuals who value 
                  products with purpose. Every purchase contributes to our mission of giving back and creating a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial1}
                  alt="Customer 1"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/50"
                />
                <p className="text-white text-center mb-4">
                  "The tea from Mongarlowe Green Farm is exceptional. The
                  flavors are rich and authentic, and knowing it's sustainably
                  grown makes it even better."
                </p>
                <h4 className="font-semibold text-white">Michael Johnson</h4>
                <p className="text-sm text-white/80">Tea Enthusiast</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial2}
                  alt="Customer 2"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/50"
                />
                <p className="text-white text-center mb-4">
                  "I love supporting local businesses, and Mongarlowe Green
                  Farm's commitment to quality and sustainability is truly
                  admirable."
                </p>
                <h4 className="font-semibold text-white">Sarah Ahmed</h4>
                <p className="text-sm text-white/80">Regular Customer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial3}
                  alt="Customer 3"
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/50"
                />
                <p className="text-white text-center mb-4">
                  "Their products are consistently high quality, and their
                  customer service is outstanding. I highly recommend their
                  teas!"
                </p>
                <h4 className="font-semibold text-white">Emily Parker</h4>
                <p className="text-sm text-white/80">Food Blogger</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Natural Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            We Offer Guaranteed Natural Products
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-center mb-12 leading-relaxed">
              Experience the best of nature with our 100% natural products,
              crafted without any artificial additives or harmful chemicals.
              Each product is sustainably sourced, eco-friendly, and designed to
              enhance your well-being while protecting the planet. Pure, simple,
              and genuinely natural—because you deserve the best nature has to
              offer.
            </p>
            <div className="flex justify-center">
              <div className="relative w-32 h-32 flex items-center justify-center rounded-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="0"
                  />
                </svg>
                <span className="absolute text-3xl font-bold text-green-500">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
