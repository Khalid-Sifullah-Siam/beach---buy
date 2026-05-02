"use client";
import { products } from "@/data/products";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../sharedComponents/Loader/Loader";
import ProtectedRoute from "../sharedComponents/protectedRoute/ProtectedRoute";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  const product = products.find((p) => p.id === parseInt(id));
  const { data: session, isPending } = useSession();

  // Get related products (same category, exclude current product)
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (isPending) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
          <p className="text-base-content/70 mb-4">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products" className="btn btn-primary bg-amber-500 hover:bg-amber-600 border-none">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0z"/>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        <span className="text-sm text-base-content/60 ml-2">({product.rating})</span>
      </div>
    );
  };

  const handleAddToCart = () => {
    setToastMessage(`${quantity} x ${product.name} added to cart!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const productContent = (
    <div className="min-h-screen bg-base-200 py-8 md:py-12">
      <div className="md:max-w-10/12 mx-auto px-4">
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed top-20 right-4 z-50 animate-slide-in">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {toastMessage}
            </div>
          </div>
        )}

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex cursor-pointer items-center gap-2 text-primary hover:text-amber-600 mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </button>

        {/* Product Details */}
        <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            
            {/* Image Section */}
            <div className="relative h-80 md:h-96 lg:h-112.5 rounded-xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Info Section */}
            <div>
              {/* Category Badge */}
              <div className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                {product.category}
              </div>

              {/* Product Name */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>

              {/* Brand */}
              <p className="text-base-content/60 mb-3">
                Brand: <span className="font-semibold text-primary">{product.brand}</span>
              </p>

              {/* Rating */}
              <div className="mb-4">
                {renderRating(product.rating)}
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-base-content/50 line-through ml-2">
                  ${(product.price * 1.25).toFixed(2)}
                </span>
                <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  Save 20%
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-4 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm">
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                </span>
              </div>

              {/* Quantity Selector */}
              {product.stock > 0 && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Quantity:</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="btn btn-sm btn-outline"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="btn btn-sm btn-outline"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 cursor-pointer bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105"
                >
                  Add to Cart 
                </button>
              </div>

              {/* Tab Section */}
              <div className="border-t border-base-300 pt-4">
                <div className="flex gap-4 mb-4">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`pb-2 font-semibold transition-colors cursor-pointer ${activeTab === "description" ? "border-b-2 border-amber-500 text-amber-600" : "text-base-content/60"}`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("shipping")}
                    className={`pb-2 font-semibold transition-colors cursor-pointer ${activeTab === "shipping" ? "border-b-2 border-amber-500 text-amber-600" : "text-base-content/60"}`}
                  >
                    Shipping Info
                  </button>
                </div>

                <div className="text-base-content/80 leading-relaxed">
                  {activeTab === "description" ? (
                    <p>{product.description}</p>
                  ) : (
                    <div className="space-y-2">
                      <p>📦 Free shipping on orders over $50</p>
                      <p>🚚 Delivery time: 3-5 business days</p>
                      <p>🔄 Easy returns within 7 days</p>
                      <p>🔒 Secure payment guaranteed</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group bg-base-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40 bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover p-2"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-1">{relatedProduct.name}</h3>
                    <p className="text-primary font-bold text-sm mt-1">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return <ProtectedRoute>{productContent}</ProtectedRoute>;
};

export default ProductDetailsPage;