"use client";

import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../sharedComponents/Loader/Loader";

const EditProfilePage = () => {
  const { data, isPending, refetch } = useSession();
  const router = useRouter();
  const [name, setName] = useState(data?.user?.name || "");
  const [image, setImage] = useState(data?.user?.image || "");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type = "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  if (isPending) {
    return <Loader />;
  }

  if (!data?.user) {
    router.push("/auth/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await authClient.updateUser({
        name: name,
        image: image,
      });

      if (result.error) {
        showToast(result.error.message || "Update failed. Please try again.");
      } else {
        showToast("Profile updated successfully!", "success");
        await refetch();
        setTimeout(() => {
          router.push("/my-profile");
        }, 1500);
      }
    } catch (err) {
      console.error("Update error:", err);
      showToast("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 md:py-12">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {toast.message}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/my-profile"
            className="inline-flex items-center gap-2 text-primary hover:text-amber-600 mb-4 transition-colors"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Profile
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Edit Profile
          </h1>
          <p className="text-base-content/70">
            Update your personal information
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500 mt-4 rounded-full"></div>
        </div>

        {/* Edit Form */}
        <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Profile Photo URL
              </label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-2 border border-base-300 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <p className="text-xs text-base-content/50 mt-1">
                Enter a valid image URL (optional)
              </p>
            </div>

            {/* Current Email (Read-only) */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={data?.user?.email || ""}
                disabled
                className="w-full px-4 py-2 border border-base-300 rounded-lg bg-base-200 cursor-not-allowed"
              />
              <p className="text-xs text-base-content/50 mt-1">
                Email cannot be changed here. Contact support for email changes.
              </p>
            </div>

            {/* Preview Section */}
            {(image || name) && (
              <div className="p-4 bg-base-200 rounded-lg">
                <p className="text-sm font-semibold mb-2">Preview:</p>
                <div className="flex items-center gap-3">
                  {image && (
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold overflow-hidden">
                      <Image
                        src={image}
                        alt="Preview"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML =
                            name?.charAt(0).toUpperCase() || "U";
                        }}
                      />
                    </div>
                  )}
                  <span className="font-medium">
                    {name || data?.user?.name}
                  </span>
                </div>
              </div>
            )}

            {/* Update Button */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
              >
                {loading ? "Updating..." : "Update Information"}
              </button>
              <Link
                href="/my-profile"
                className="flex-1 text-center border border-base-300 hover:bg-base-200 text-base-content font-semibold py-2 rounded-lg transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
