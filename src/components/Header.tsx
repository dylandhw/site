"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/blog", label: "Blog" },
    { href: "/work", label: "Projects" },
  ];

  return (
    <header className="flex items-center justify-center w-full p-2">
      <nav className="flex gap-6 justify-center text-sm">
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
                  ? "text-blue-600 font-medium"
                  : "hover:text-grey-600 hover:font-medium"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
