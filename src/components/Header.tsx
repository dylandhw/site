"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [discordStatus, setDiscordStatus] = useState("online");

  // Clock logic
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
    const interval = setInterval(updateClock, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const statuses: Array<"online" | "idle" | "do-not-disturb" | "offline"> = [
      "online",
    ];

    function pickRandomStatus() {
      const random = statuses[Math.floor(Math.random() * statuses.length)];
      setDiscordStatus(random);
    }

    pickRandomStatus(); // initial pick
    const interval = setInterval(pickRandomStatus, 2 * 60 * 60 * 1000); // every 2 hours
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "/", label: "home" },
    { href: "/experience", label: "experience" },
    { href: "/work", label: "projects" },
    { href: "/blog", label: "blog" },
  ];

  const statusColorMap: Record<string, string> = {
    online: "bg-green-500",
  };

  return (
    <header className="relative w-full py-2">
      <div className="top-2 left-4 flex items-center gap-2 z-50">
        <img
          src="/me.jpg"
          alt="logo"
          className="w-8 h-8 rounded-lg object-cover"
        />

        {/* Colored circle with fallback */}
        <span
          className={`w-2 h-2 rounded-full ${
            statusColorMap[discordStatus] || "bg-gray-500"
          }`}
        />

        {/* Status text */}
        <span className="text-sm text-gray-600">{discordStatus}</span>

        {/* Clock */}
        <span className="text-gray-600 text-sm">{time}</span>
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
