"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen(!open);

  const menuItems = [
    { name: "Blog", href: "/" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          MyBlog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md font-medium transition ${
                pathname === item.href
                  ? "bg-white text-black"
                  : "bg-transparent border border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  pathname === item.href
                    ? "bg-white text-black"
                    : "bg-transparent border border-white text-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
