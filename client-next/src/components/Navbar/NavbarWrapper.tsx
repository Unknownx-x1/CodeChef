"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  console.log(pathname);

  if (pathname === "/") {
    return null;
  }

  return <Navbar />;
}