import Link from "next/link";

const SummerCareTips = () => {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      description:
        "Drink at least 8-10 glasses of water daily to keep your skin glowing and prevent heat exhaustion.",
      icon: "💧",
      color: "from-blue-400 to-cyan-500",
      tips: [
        "Carry a reusable water bottle",
        "Eat water-rich fruits like watermelon",
        "Avoid excessive caffeine",
      ],
    },
    {
      id: 2,
      title: "Sun Protection",
      description:
        "Apply broad-spectrum SPF 30+ sunscreen every 2 hours when outdoors to protect your skin.",
      icon: "☀️",
      color: "from-orange-400 to-red-500",
      tips: [
        "Wear UV protection sunglasses",
        "Use wide-brimmed hats",
        "Seek shade between 10 AM - 4 PM",
      ],
    },
    {
      id: 3,
      title: "Summer Skincare",
      description:
        "Switch to lightweight, water-based products to keep your skin fresh and acne-free.",
      icon: "🧴",
      color: "from-pink-400 to-rose-500",
      tips: [
        "Use gentle foaming cleansers",
        "Apply aloe vera for cooling",
        "Exfoliate twice a week",
      ],
    },
    {
      id: 4,
      title: "Beach Essentials",
      description:
        "Pack smart for beach days with these must-have items for comfort and safety.",
      icon: "🏖️",
      color: "from-teal-400 to-emerald-500",
      tips: [
        "Quick-dry beach towel",
        "Waterproof phone case",
        "Cooler bag for snacks",
      ],
    },
  ];

  return (
    <div className="w-full bg-linear-to-b from-base-200 to-base-100 py-12 md:py-16">
      <div className="md:max-w-10/12 mx-auto px-4">

        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Summer Care Tips
          </h2>
          <p className="text-base-content/70">
            Stay safe, fresh, and glowing this summer with our expert tips
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 mt-4 rounded-full"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `slideUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >

              <div className={`bg-linear-to-r ${tip.color} p-6 text-center`}>
                <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{tip.title}</h3>
              </div>


              <div className="p-5">
                <p className="text-base-content/80 text-sm mb-4 leading-relaxed">
                  {tip.description}
                </p>


                <div className="space-y-2">
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    Quick Tips →
                  </p>
                  <ul className="space-y-1.5">
                    {tip.tips.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-base-content/70"
                      >
                        <span className="text-amber-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-3">
                BONUS TIP
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Need Summer Essentials?
              </h3>
              <p className="text-gray-600 mb-4">
                Shop our curated summer collection with exclusive discounts
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                Shop Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1 flex justify-center gap-4">
              <div className="text-6xl animate-float">🕶️</div>
              <div className="text-6xl animate-float animation-delay-200">
                🧴
              </div>
              <div className="text-6xl animate-float animation-delay-400">
                👒
              </div>
            </div>
          </div>
        </div>


        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <div className="text-3xl">😎</div>
            <div>
              <p className="font-semibold text-black text-sm">Sunglasses Care</p>
              <p className="text-xs text-gray-600">
                Clean with microfiber cloth
              </p>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3">
            <div className="text-3xl">👕</div>
            <div>
              <p className="font-semibold text-black text-sm">Summer Outfits</p>
              <p className="text-xs text-gray-600">Wash in cold water</p>
            </div>
          </div>
          <div className="bg-orange-50 rounded-xl p-4 flex items-center gap-3">
            <div className="text-3xl">🏊</div>
            <div>
              <p className="font-semibold text-black text-sm">Beach Accessories</p>
              <p className="text-xs text-gray-600">
                Rinse after salt water use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCareTips;
