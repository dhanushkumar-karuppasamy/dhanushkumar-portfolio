import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Personal</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex gap-4 items-center">
          <a
            href="/DhanushKumar-K Resume2026.pdf"
            download
            className="hidden md:block border border-black dark:border-white px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {menu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-cream dark:bg-black border-t border-gray-200 dark:border-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setMenu(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => setMenu(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
