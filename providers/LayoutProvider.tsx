"use client"

import { usePathname } from "next/navigation";
import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const [user, setUser] = useState(null);

  const getNavbar = () => {
    if (isPublicRoute) return null;
    return <Navbar />;
  };

  const getFooter = () => {
    if (isPublicRoute) return null;
    return <Footer />;
  };

  const getContent = () => {
    if (isPublicRoute) return children;
    return <>{children}</>;
  };

  const getCurrentUser = async () => {
    try {
      const response: any = await fetchUsers();
      console.log("Fetch Users Response:", response); // Debug log
      if (response.error) throw new Error(response.error.message);
      setUser(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!isPublicRoute) {
      getCurrentUser();
    }
  }, [isPublicRoute]);

  return (
    <div className="min-h-screen flex flexCol justify-between">
      {getNavbar()}
      {getContent()}
      {getFooter()}
    </div>
  );
}

export default LayoutProvider;
