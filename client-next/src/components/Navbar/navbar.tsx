"use client";

import Link from "next/link";
import {
  House,
  CalendarDays,
  Newspaper,
  Users,
  Trophy,
} from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/home", icon: House },
    { name: "Events", href: "/events", icon: CalendarDays },
    { name: "Blogs", href: "/blogs", icon: Newspaper },
    { name: "Team", href: "/team", icon: Users },
    { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  ];

  return (
    <div
      className="
        fixed
        right-6
        top-1/2
        -translate-y-1/2
        z-50
      "
    >
      <nav
        className="
          bg-black/95
          backdrop-blur-md
          rounded-[28px]
          px-2
          py-8
          border
          border-white/10
          shadow-2xl
        "
      >
        <div className="flex flex-col items-center gap-5">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="
                  flex
                  flex-col
                  items-center
                  gap-1
                  text-[#ECE9C7]
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <Icon size={18} />

                <span
                  className="
                    font-bebas
                    text-xs
                    tracking-wider
                    text-center
                  "
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}