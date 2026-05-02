"use client";
import { authClient } from "@/lib/auth-client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const RegisterPage = () => {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [animationData, setAnimationData] = useState(null);
  const router = useRouter();

  // Load animation data
  useEffect(() => {
    fetch("/form-registration.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      image: formData.get("image") || undefined,
    };

    // Validation
    if (!userData.name || userData.name.length < 3) {
      showToast("Name must be at least 3 characters");
      setLoading(false);
      return;
    }

    if (!userData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
      showToast("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!userData.password || userData.password.length < 8) {
      showToast("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    if (!/[A-Z]/.test(userData.password)) {
      showToast("Password must contain at least one uppercase letter");
      setLoading(false);
      return;
    }

    if (!/[0-9]/.test(userData.password)) {
      showToast("Password must contain at least one number");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.image,
        callbackURL: "/auth/login",
      });

      if (error) {
        showToast(error.message || "Registration failed. Please try again.");
      } else {
        showToast("Registration successful! Redirecting to login...", "success");
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      }
    } catch (err) {
      showToast("Registration failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      showToast("Google registration failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <div
            className={`px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {toast.message}
          </div>
        </div>
      )}

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Lottie Animation Section */}
        <div className="hidden lg:flex justify-center items-center">
          {animationData && (
            <div className="w-full max-w-md">
              <Lottie 
                animationData={animationData} 
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
        </div>

        {/* Registration Form Section */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">
              Create Account
            </h1>
            <p className="text-base-content/60">
              Join us for the best summer deals
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Profile Photo URL (Optional)
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <p className="text-xs text-base-content/50 mt-1">
                Leave empty to use default avatar
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">Password *</label>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                required
              />
              <p className="text-xs text-base-content/50 mt-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition-colors disabled:bg-gray-400 cursor-pointer"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-base-100 text-base-content/60">or</span>
            </div>
          </div>

          {/* Google Social Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 border border-base-300 hover:bg-base-200 text-base-content font-semibold py-2 rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>{googleLoading ? "Redirecting..." : "Continue with Google"}</span>
          </button>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-base-content/60">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-amber-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;