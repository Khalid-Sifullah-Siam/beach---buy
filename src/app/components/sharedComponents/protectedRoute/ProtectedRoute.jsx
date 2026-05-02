"use client";
import { useSession } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { data, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname(); // Current page path

  const user = data?.user;

  useEffect(() => {
    if (!isPending && !user) {
      // Save the current URL to redirect back after login
      sessionStorage.setItem("redirectAfterLogin", pathname);
      router.push("/auth/login");
    }
  }, [isPending, user, router, pathname]);

  if (isPending) {
    return <Loader />;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;