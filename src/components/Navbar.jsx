import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const links = ["About", "Skills", "Projects", "Experience", "Blog", "Contact"];

  return (
    <nav className="fixed w-full bg-cream/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dhanush</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-gray-500 transition"
            >
              {link}
            </a>
          ))}
          <button onClick={toggle} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenu(!menu)} className="md:hidden">
          {menu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-cream dark:bg-black border-t border-gray-200 dark:border-gray-800">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMenu(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
