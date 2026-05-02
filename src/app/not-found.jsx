import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-base-200 to-base-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl lg:text-[200px] font-bold text-primary/10 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl md:text-7xl lg:text-8xl animate-bounce">
              🏖️
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-base-content/70 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for seems to have drifted away like a
          summer cloud.
        </p>

        {/* Helpful Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Browse Products
          </Link>
        </div>

        {/* Quick Links Grid */}
        <div className="border-t border-base-300 pt-8">
          <p className="text-sm text-base-content/60 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="text-sm text-amber-600 hover:underline">
              Home
            </Link>
            <span className="text-base-content/30">•</span>
            <Link
              href="/products"
              className="text-sm text-amber-600 hover:underline"
            >
              Products
            </Link>
            <span className="text-base-content/30">•</span>
            <Link
              href="/about"
              className="text-sm text-amber-600 hover:underline"
            >
              About Us
            </Link>
            <span className="text-base-content/30">•</span>
            <Link
              href="/contact"
              className="text-sm text-amber-600 hover:underline"
            >
              Contact
            </Link>
            <span className="text-base-content/30">•</span>
            <Link
              href="/auth/login"
              className="text-sm text-amber-600 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Cute Summer Message */}
        <div className="mt-8 p-4 bg-amber-50 rounded-lg inline-block mx-auto">
          <p className="text-sm text-amber-700">
            ☀️ Don&apos;t worry, the sun is still shining! Let&apos;s get you
            back on track.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
