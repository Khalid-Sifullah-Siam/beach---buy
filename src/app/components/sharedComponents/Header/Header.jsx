import Link from "next/link";

const Header = () => {
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Products", href: "/products" },
    { id: 3, name: "My Profile", href: "/my-profile" },
  ];
  return (
    <div className="w-full bg-base-100">
      <div className="navbar md:max-w-9/12 mx-auto shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((nav) => (
                <div key={nav.id}>
                  <Link href={`${nav.href}`}>{nav.name}</Link>
                </div>
              ))}
            </ul>
          </div>
          <Link
            href={"/"}
            className="px-4 py-1 rounded-md md:text-xl font-bold text-amber-600"
          >
            Beach & Buy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            {navItems.map((nav) => (
              <div key={nav.id}>
                <Link
                  className="font-semibold hover:text-amber-600"
                  href={`${nav.href}`}
                >
                  {nav.name}
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
