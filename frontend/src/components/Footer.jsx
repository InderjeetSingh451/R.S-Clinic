import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white overflow-hidden border-t border-slate-900">
      {/* Top Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={Logo}
                alt="R.S Clinic Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain p-1 bg-white/5 rounded-2xl border border-white/10"
              />
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  R.S Clinic
                </h2>
                <p className="text-teal-400 font-medium text-xs sm:text-sm">
                  Ayurvedic Clinic & Diagnostic Lab
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Committed to providing compassionate Ayurvedic healthcare
              alongside reliable diagnostic services through
              <strong className="text-gray-300 font-semibold">
                {" "}
                Urban Clinic Laboratory
              </strong>
              . Quality care built on trust and patient satisfaction.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-teal-600 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-800"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-600 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-800"
              >
                <FaWhatsapp className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-600 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-800"
              >
                <FaInstagram className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-teal-500 after:mt-1 after:rounded-full">
              Quick Links
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Our Doctor", href: "#doctor" },
                { name: "Urban Clinic Lab", href: "#contact" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact Us", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Healthcare Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-teal-500 after:mt-1 after:rounded-full">
              Our Services
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              {[
                "Ayurvedic Consultation",
                "General Health Check-up",
                "Urban Clinic Laboratory",
                "Blood & Pathology Tests",
                "Urine & Health Screening",
                "Follow-up Consultation",
              ].map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-teal-500 after:mt-1 after:rounded-full">
              Contact Info
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-gray-400">
              <a
                href="https://maps.google.com/?q=Begu+Road+Sirsa+Haryana"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-teal-400 transition-colors group"
              >
                <FaMapMarkerAlt className="text-teal-400 text-base mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="leading-relaxed">
                  Opposite Rati Ram Petrol Pump,
                  <br />
                  Begu Road, Sirsa, Haryana
                </p>
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 hover:text-teal-400 transition-colors"
              >
                <FaPhoneAlt className="text-teal-400 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </a>

              <a
                href="mailto:rsclinic@email.com"
                className="flex items-center gap-3 hover:text-teal-400 transition-colors break-all"
              >
                <FaEnvelope className="text-teal-400 flex-shrink-0" />
                <span>rsclinic@email.com</span>
              </a>

              <div className="flex items-start gap-3 pt-1 border-t border-slate-900">
                <FaClock className="text-teal-400 text-sm mt-1 flex-shrink-0" />
                <div className="text-xs space-y-0.5">
                  <p className="text-gray-300 font-semibold">
                    Mon - Sat OPD Hours:
                  </p>
                  <p>09:00 AM – 01:00 PM</p>
                  <p>04:00 PM – 07:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()}{" "}
              <strong className="text-gray-400 font-medium">
                R.S Clinic & Urban Clinic Laboratory
              </strong>
              . All Rights Reserved.
            </p>

            <p className="flex items-center gap-1.5 justify-center">
              Made with <FaHeart className="text-rose-500 text-xs" /> for Better
              Healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
