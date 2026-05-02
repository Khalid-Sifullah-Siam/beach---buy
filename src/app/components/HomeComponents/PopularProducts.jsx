import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const PopularProducts = () => {
  const lastThreeProducts = products.slice(-3);

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className="w-4 h-4 text-yellow-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-yellow-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              fill-opacity="0.5"
            />
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-4 h-4 text-gray-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <span className="text-sm text-base-content/60 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="w-full bg-base-100 py-12 md:py-16">
      <div className="md:max-w-10/12 mx-auto px-4">
        <div className="text-left mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Popular Products
          </h2>
          <p className="text-base-content/70">
            Check out our most loved summer essentials
          </p>
          <div className="w-20 h-1 bg-amber-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {lastThreeProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-linear-to-br from-amber-100 to-orange-100">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🏖️
                  </div>
                )}

                {product.discount && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold z-10">
                    -{product.discount}% OFF
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-500 hover:text-white transition-transform transform -translate-y-2 group-hover:translate-y-0 duration-300"
                  >
                    Quick View
                  </Link>
                </div>
              </div>

              <div className="p-5">
                {product.category && (
                  <div className="text-xs text-amber-600 font-semibold mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                )}

                <Link href={`/product/${product.id}`}>
                  <h3 className="text-xl font-bold mb-2 hover:text-amber-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>

                <div className="mb-3">
                  {renderRating(product.rating || 4.5)}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-base-content/50 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <Link
                  href={`/product/${product.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>View Details</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View All Products
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
