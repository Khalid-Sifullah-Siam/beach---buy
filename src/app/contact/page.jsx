import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 md:py-16">
      <div className="md:max-w-10/12 mx-auto px-4">
        {/* Header Section */}
        <div className="text-left mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-base-content/70 ">
            We&apos;d love to hear from you! Get in touch with our team
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mt-6 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form action="/api/contact" method="POST" className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell us about your inquiry..."
                  className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-base-content/70 text-sm">
                      123 Beach Road, Cox&apos;s Bazar
                      <br />
                      Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-base-content/70 text-sm">
                      support@beachandbuy.com
                      <br />
                      sales@beachandbuy.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-base-content/70 text-sm">
                      +880 1234-56789
                      <br />
                      Mon-Fri, 9AM - 6PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-base-300">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-base-content/70">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-base-300">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-base-content/70">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-base-content/70">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                >
                  f
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-linear-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                >
                  in
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-linear-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                >
                  🐦
                </Link>
                <Link
                  href="#"
                  className="w-12 h-12 bg-linear-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform"
                >
                  📸
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-base-300">
            <h2 className="text-2xl font-bold text-center">Find Us Here</h2>
            <p className="text-center text-base-content/70 mt-2">
              Visit our physical store at Cox&apos;s Bazar Beach
            </p>
          </div>
          <div className="relative h-80 md:h-96 bg-linear-to-br from-amber-100 to-orange-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">📍</div>
              <p className="text-lg font-semibold text-gray-700">
                123 Beach Road, Cox&apos;s Bazar
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Click to open in Google Maps
              </p>
            </div>
            {/* Map placeholder - Replace with actual map embed if needed */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-b-2xl"></div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-base-100 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">
                How long does shipping take?
              </h3>
              <p className="text-base-content/70 text-sm">
                Standard shipping takes 3-5 business days. Express shipping
                available at checkout.
              </p>
            </div>
            <div className="bg-base-100 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">
                What is your return policy?
              </h3>
              <p className="text-base-content/70 text-sm">
                We accept returns within 7 days of delivery. Check our Returns
                Policy for details.
              </p>
            </div>
            <div className="bg-base-100 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-base-content/70 text-sm">
                Yes, we ship to over 10 countries worldwide. Shipping costs vary
                by location.
              </p>
            </div>
            <div className="bg-base-100 rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2">
                How can I track my order?
              </h3>
              <p className="text-base-content/70 text-sm">
                You&apos;ll receive a tracking link via email once your order
                ships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
