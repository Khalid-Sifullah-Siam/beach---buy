"use client";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../sharedComponents/Loader/Loader";

const MyProfilePage = () => {
  const { data, isPending } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data]);

  if (isPending) {
    return <Loader />;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-base-content/70 mb-4">
            Please login to view your profile
          </p>
          <Link
            href="/auth/login"
            className="btn btn-primary bg-amber-500 hover:bg-amber-600 border-none"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="text-left mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            My Profile
          </h1>
          <p className="text-base-content/70">
            Manage your personal information
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-amber-500 to-orange-500  mt-4 rounded-full"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
          {/* Profile Info Section */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    user?.name?.charAt(0).toUpperCase() || "U"
                  )}
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold  mb-2">{user?.name}</h2>
                <p className="text-base-content/70 mb-1">
                  <span className="font-semibold">Email:</span> {user?.email}
                </p>
                <p className="text-sm text-base-content/50">
                  Member since: {new Date(user?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Update Button */}
            <div className="border-t border-base-300 pt-6 text-center">
              <Link
                href="/my-profile/edit"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all transform hover:scale-105"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Update Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
