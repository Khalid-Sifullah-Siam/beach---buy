import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 md:py-16">
      <div className="md:max-w-10/12 mx-auto px-4">
        {/* Hero Section */}
        <div className="text-left mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            About Beach & Buy
          </h1>
          <p className="text-xl text-base-content/70 ">
            Your ultimate destination for summer essentials since 2024
          </p>
          <div className="w-24 h-1 bg-liear-to-r from-amber-500 to-orange-500 mt-6 rounded-full"></div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base-content/80 leading-relaxed mb-4">
              At Beach & Buy, we believe that summer is more than just a season—it&apos;s a feeling. 
              Our mission is to help you embrace the sunshine with confidence by providing high-quality 
              summer products that combine style, comfort, and functionality.
            </p>
            <p className="text-base-content/80 leading-relaxed">
              From trendy sunglasses to beach-ready accessories, we curate every product to ensure 
              you look and feel your best under the sun. Whether you&apos;re planning a tropical getaway 
              or enjoying a staycation, we&apos;ve got you covered.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-orange-500/20 z-10"></div>
            <div className="w-full h-full flex items-center justify-center text-8xl bg-linear-to-br from-amber-100 to-orange-100">
              🏖️
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-base-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">🛍️</div>
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <p className="text-sm text-base-content/60">Happy Customers</p>
          </div>
          <div className="bg-base-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-primary mb-1">4.8</div>
            <p className="text-sm text-base-content/60">Average Rating</p>
          </div>
          <div className="bg-base-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">📦</div>
            <div className="text-3xl font-bold text-primary mb-1">1000+</div>
            <p className="text-sm text-base-content/60">Products Shipped</p>
          </div>
          <div className="bg-base-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">🌍</div>
            <div className="text-3xl font-bold text-primary mb-1">10+</div>
            <p className="text-sm text-base-content/60">Countries Served</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-base-content/70 text-sm">
                We never compromise on quality. Every product is carefully selected and tested.
              </p>
            </div>
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💚</div>
              <h3 className="text-xl font-bold mb-2">Customer Love</h3>
              <p className="text-base-content/70 text-sm">
                Your satisfaction is our top priority. We&apos;re here to help 24/7.
              </p>
            </div>
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-base-content/70 text-sm">
                Committed to eco-friendly practices and sustainable packaging.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", icon: "👩‍💼", bg: "from-pink-400 to-rose-500" },
              { name: "Mike Chen", role: "Product Curator", icon: "👨‍🎨", bg: "from-blue-400 to-cyan-500" },
              { name: "Emma Rodriguez", role: "Customer Happiness", icon: "👩‍💻", bg: "from-green-400 to-emerald-500" }
            ].map((member, index) => (
              <div key={index} className="bg-base-100 rounded-2xl overflow-hidden shadow-lg text-center group hover:shadow-xl transition-all hover:-translate-y-2">
                <div className={`bg-linear-to-r ${member.bg} p-8`}>
                  <div className="text-7xl mb-2">{member.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-base-content/60 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Summer?</h2>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Shop our latest collection and get ready for the sunshine!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/auth/register"
              className="inline-block border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-all"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;