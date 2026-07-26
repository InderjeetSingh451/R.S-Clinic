import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Doctor", href: "#doctor" },
    { name: "Laboratory", href: "#laboratory" },
    { name: "Gallery", href: "#gallery" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={Logo}
                alt="R.S Clinic Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
                  R.S <span className="text-teal-600">Clinic</span>
                </h2>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-tight">
                  Ayurvedic Healthcare & Urban Clinic Lab
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+91XXXXXXXXXX"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-teal-600/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Call Now</span>
              </motion.a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-teal-700 hover:bg-teal-50 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleLinkClick}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed top-16 left-0 w-full bg-white shadow-2xl z-40 lg:hidden rounded-b-3xl border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="py-2.5 text-base font-semibold text-gray-700 hover:text-teal-600 transition-colors border-b border-gray-50 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-400">&rarr;</span>
                  </a>
                ))}

                {/* Mobile Call Button */}
                <div className="pt-4">
                  <a
                    href="tel:+91XXXXXXXXXX"
                    onClick={handleLinkClick}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center py-3 rounded-2xl font-bold text-sm shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2.5 transition-all"
                  >
                    <FaPhoneAlt className="text-xs" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
