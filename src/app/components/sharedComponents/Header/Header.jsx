"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Loader from "../Loader/Loader";

const Header = () => {
  const { data, isPending } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  const user = data?.user;

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  if (isPending) {
    return <Loader />;
  }

  // Nav items - only show My Profile if user is logged in
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Products", href: "/products" },
  ];

  // Add My Profile only if user is logged in
  if (user) {
    navItems.push({ id: 3, name: "My Profile", href: "/my-profile" });
  }

  return (
    <div className="w-full bg-base-100 relative">
      <div className="navbar md:max-w-10/12 mx-auto shadow-sm px-4 md:px-0">
        {/* Left side - Logo and Hamburger */}
        <div className="navbar-start gap-2">
          {/* Hamburger Menu Button - Mobile only */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <Link
            href={"/"}
            className="px-2 md:px-4 py-1 rounded-md md:text-xl font-bold text-amber-600"
          >
            Beach & Buy
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            {navItems.map((nav) => (
              <li key={nav.id}>
                <Link
                  className="font-semibold hover:text-amber-600 transition-colors"
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - User section */}
        <div className="navbar-end">
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="Profile menu"
              >
                {/* Profile Picture - Check for user image first */}
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold overflow-hidden">
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
                <span className="hidden md:inline font-medium text-sm">
                  {user?.name?.split(" ")[0]}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProfileDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-base-100 rounded-lg shadow-lg border border-base-300 z-50">
                  <div className="px-4 py-3 border-b border-base-300">
                    <p className="text-sm font-semibold">{user?.name}</p>
                    <p className="text-xs text-base-content/60 truncate">
                      {user?.email}
                    </p>
                  </div>
                  <div className="py-2">
                    <Link
                      href="/my-profile"
                      onClick={() => setIsProfileDropdownOpen(false)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-base-200 transition-colors block"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-base-200 transition-colors"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2 md:gap-4">
              <Link
                href={"/auth/login"}
                className="btn btn-sm btn-ghost hover:text-amber-600"
              >
                Login
              </Link>
              <Link
                href={"/auth/register"}
                className="btn btn-sm btn-primary bg-amber-600 hover:bg-amber-700 border-none"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Slide-up Menu */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ top: 0, bottom: 0 }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel - slides up from bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-base-100 rounded-t-2xl shadow-xl max-h-[60vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-base-100 border-b border-base-300 px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-bold text-amber-600">Beach & Buy</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-sm btn-circle btn-ghost"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* User Info in Mobile Menu (if logged in) */}
          {user && (
            <div className="px-4 py-3 bg-base-200/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold overflow-hidden">
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
              <div>
                <p className="font-semibold">{user?.name}</p>
                <p className="text-xs text-base-content/60">{user?.email}</p>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div className="py-2">
            {navItems.map((nav) => (
              <Link
                key={nav.id}
                href={nav.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium hover:bg-base-200 hover:text-amber-600 transition-colors"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-base-300 my-2"></div>

          {/* Logout Button for Mobile (if logged in) */}
          {user && (
            <div className="px-4 py-2">
              <button
                onClick={() => {
                  signOut();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-red-600 font-medium hover:bg-base-200 rounded-lg transition-colors"
              >
                Log Out
              </button>
            </div>
          )}

          {/* Auth Links for Mobile (if not logged in) */}
          {!user && (
            <div className="px-4 py-3 flex flex-col gap-2">
              <Link
                href={"/auth/login"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-ghost justify-start"
              >
                Login
              </Link>
              <Link
                href={"/auth/register"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-none justify-start"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;