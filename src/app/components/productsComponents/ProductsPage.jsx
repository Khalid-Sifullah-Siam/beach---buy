import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-0.5">
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
              fillOpacity="0.5"
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
        <span className="text-xs text-base-content/60 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 md:py-12">
      <div className="max-w-10/12 mx-auto px-4">
        <div className="text-left mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3">
            All Products
          </h1>
          <p className="text-base-content/70">
            Discover our complete summer collection - from sunglasses to beach
            accessories
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 mt-4 rounded-full"></div>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <p className="text-sm text-base-content/60">
            Showing{" "}
            <span className="font-semibold text-primary">
              {products.length}
            </span>{" "}
            products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
                opacity: 0,
              }}
            >
              <Link
                href={`/product/${product.id}`}
                className="relative block h-64 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200"
              >
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
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-500 hover:text-white transition-colors">
                    Quick View
                  </span>
                </div>
              </Link>

              <div className="p-4">
                {product.category && (
                  <div className="text-xs text-amber-600 font-semibold mb-1 uppercase tracking-wider">
                    {product.category}
                  </div>
                )}

                <Link href={`/product/${product.id}`}>
                  <h3 className="text-lg font-bold mb-1 hover:text-amber-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>

                <div className="mb-2">
                  {renderRating(product.rating || 4.5)}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-base-content/50 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <Link
                  href={`/products/detail/${product.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
                >
                  <span>View Details</span>
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
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
            <p className="text-base-content/60">
              Check back later for new summer arrivals!
            </p>
          </div>
        )}

        {products.length > 12 && (
          <div className="flex justify-center gap-2 mt-12">
            <button className="btn btn-sm btn-ghost">Previous</button>
            <button className="btn btn-sm btn-primary bg-amber-500 hover:bg-amber-600 border-none">
              1
            </button>
            <button className="btn btn-sm btn-ghost">2</button>
            <button className="btn btn-sm btn-ghost">3</button>
            <button className="btn btn-sm btn-ghost">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
