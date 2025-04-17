import React from "react";
import about1 from "../../images/aboutus1.jpg";
import about2 from "../../images/aboutus2.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Our Story */}
      <section className="bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-white/90 text-lg">
            Crafting extraordinary moments through exceptional gourmet
            experiences
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Mongarlowe Green Farm, we believe that food is more than just
                nourishment; it's an experience that brings people together,
                celebrates cultures, and evokes memories. Born from a passion
                for quality ingredients and sustainable practices, we've
                dedicated ourselves to crafting products that are both gourmet
                and eco-conscious everyday moments into powerful ones.
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
                Learn More
              </button>
            </div>
            <div>
              <img
                src={about1}
                alt="Our Farm"
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Quality
              </h3>
              <p className="text-white/90 text-center">
                Finest ingredients, excellent final flavor
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Sustainability
              </h3>
              <p className="text-white/90 text-center">
                Ethical sourcing, eco-friendly practices
              </p>
            </div>

            {/* Authenticity */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-2">
                Authenticity
              </h3>
              <p className="text-white/90 text-center">
                Tradition with a modern twist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <p className="text-gray-600">
                Specializing in premium tea blends, we offer everything from
                calming herbal teas to bold brews, perfect for any occasion.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-600">
                We're committed to quality, creativity, and sustainability,
                helping our customers create memorable experiences with every
                sip and bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 via-emerald-400 to-green-400">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={about2}
              alt="Tea Plantation"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Our Commitment
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                Founded by a team of industry enthusiasts, each with years of
                experience in both traditional and modern culinary practices,
                Mongarlowe Green Farm was born from the vision of bringing a
                distinctive blend of flavors. We carefully select our premium
                ingredients from the best sustainable sources, ensuring each
                product is not only delicious but full of rich, authentic taste.
              </p>
              <button className="bg-white text-green-600 px-6 py-2 rounded hover:bg-white/90 transition-colors">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
