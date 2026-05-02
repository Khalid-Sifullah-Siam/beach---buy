import Image from "next/image";

const TopBrands = () => {
  const brands = [
    {
      id: 1,
      name: "Ray-Ban",
      logo: "https://i.postimg.cc/xTcDFk1k/ray-ban-logo-10.png",
      description: "Iconic sunglasses since 1937",
      discount: "20% OFF",
    },
    {
      id: 2,
      name: "Nike",
      logo: "https://i.postimg.cc/cHX2FZq6/web-183282388.webp",
      description: "Summer athletic wear",
      discount: "25% OFF",
    },
    {
      id: 3,
      name: "Neutrogena",
      logo: "https://i.postimg.cc/YqmDWQS3/Neutrogena-Emblem.png",
      description: "Dermatologist recommended skincare",
      discount: "15% OFF",
    },
    {
      id: 4,
      name: "Speedo",
      logo: "https://i.postimg.cc/2S7s1nHM/images.png",
      description: "Premium swim & beach gear",
      discount: "30% OFF",
    },
  ];

  return (
    <div className="w-full bg-base-100 py-12 md:py-16">
      <div className="md:max-w-10/12 mx-auto px-4">
        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Top Brands
          </h2>
          <p className="text-base-content/70">
            Shop from world&apos;s most trusted summer brands
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group relative bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              style={{
                animation: `fadeInScale 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="absolute top-3 right-3 z-10 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                {brand.discount}
              </div>

              <div className="p-6 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center h-48">
                <div className="relative w-32 h-32 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 128px"
                  />
                </div>
              </div>

              <div className="p-5 text-center border-t border-base-300">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {brand.name}
                </h3>
                <p className="text-base-content/60 text-sm mb-3">
                  {brand.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-amber-500/0 rounded-2xl transition-all duration-300 group-hover:border-amber-500/30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
