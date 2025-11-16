"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ms = now.getMilliseconds().toString().padStart(3, "0");
      setTime(`${hours}:${minutes}:${seconds}.${ms}`);
    }

    updateClock();
    const interval = setInterval(updateClock, 10); // update every 10ms for smooth ms counter
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/experience", label: "experience" },
    { href: "/work", label: "projects" },
    { href: "/blog", label: "blog" },
  ];

  return (
    <header className="relative w-full py-2">
      {/* LEFT DOG + CLOCK */}
      <div className="fixed top-2 left-4 flex items-center gap-3 z-50">
        <img
          src="/dogwoof.jpg"
          alt="logo"
          className="w-8 h-8 rounded-lg object-cover"
        />
        <span className="text-[#d1d5db] text-sm">{time}</span>
      </div>

      {/* CENTERED NAV */}
      <div className="max-w-4xl mx-auto flex justify-center">
        <nav className="flex gap-6 text-lg">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#72b5d6] font-medium"
                    : "hover:text-gray-600 hover:font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
