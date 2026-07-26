import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFlask,
  FaHeartbeat,
  FaLeaf,
  FaPhoneAlt,
  FaStar,
  FaUserMd,
} from "react-icons/fa";

import Logo from "../assets/Logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-50/50 via-white to-teal-50/60 pt-24 md:pt-32 pb-16 md:pb-24"
    >
      {/* Background Glows */}
      <div className="absolute -top-10 -left-10 w-72 md:w-96 h-72 md:h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 md:w-96 h-72 md:h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 rounded-full px-4 py-2 text-sm sm:text-base font-semibold mb-6 shadow-sm border border-teal-200/50">
              <FaLeaf className="text-teal-600" />
              <span>Trusted Ayurvedic Healthcare</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
              Your Health,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
                Our Priority
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Welcome to <strong className="text-gray-900">R.S Clinic</strong>,
              combining compassionate Ayurvedic treatment with reliable
              diagnostic services through{" "}
              <strong className="text-gray-900">Urban Clinic Laboratory</strong>
              . We focus on personalized care, accurate testing, and better
              health for every patient.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
              {[
                "Ayurvedic Consultation",
                "Modern Laboratory",
                "Health Check-Ups",
                "Friendly Patient Care",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-teal-500 text-lg flex-shrink-0" />
                  <span className="font-medium text-gray-700 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+91XXXXXXXXXX"
                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 font-semibold shadow-lg shadow-teal-600/20 transition-all w-full sm:w-auto"
              >
                <FaPhoneAlt />
                <span>Call Now</span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Main Card */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[35px] shadow-2xl shadow-teal-900/10 p-6 sm:p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-teal-100/50 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-center">
                  <img
                    src={Logo}
                    alt="R.S Clinic"
                    className="h-20 sm:h-24 object-contain"
                  />
                </div>

                <h2 className="text-center text-2xl sm:text-3xl font-bold mt-4 text-gray-800">
                  R.S Clinic
                </h2>
                <p className="text-center text-teal-600 font-medium text-sm sm:text-base mt-1">
                  Ayurvedic Healthcare & Diagnostics
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 bg-teal-50/80 rounded-2xl p-4 sm:p-5 border border-teal-100/50">
                    <div className="bg-teal-600 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                      <FaUserMd className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                        Expert Consultation
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Personalized Ayurvedic treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-cyan-50/80 rounded-2xl p-4 sm:p-5 border border-cyan-100/50">
                    <div className="bg-cyan-600 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                      <FaFlask className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                        Urban Clinic Laboratory
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Accurate pathology & diagnostic testing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-emerald-50/80 rounded-2xl p-4 sm:p-5 border border-emerald-100/50">
                    <div className="bg-emerald-600 text-white p-3 sm:p-4 rounded-xl flex-shrink-0">
                      <FaHeartbeat className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                        Complete Healthcare
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Care for you and your family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden md:flex absolute -left-6 top-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 border border-gray-100 items-center gap-3 z-20"
            >
              <FaStar className="text-yellow-400 text-xl" />
              <div>
                <h3 className="font-bold text-gray-800 text-sm leading-tight">
                  4.7 / 5
                </h3>
                <p className="text-xs text-gray-500">Patient Rating</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="hidden md:flex absolute -right-6 bottom-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-gray-100 items-center gap-3 z-20"
            >
              <div className="bg-teal-600 text-white p-2.5 rounded-full">
                <FaFlask className="text-sm" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm leading-tight">
                  Urban Clinic Lab
                </h3>
                <p className="text-xs text-gray-500">Trusted Diagnostics</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
              }}
              className="hidden sm:flex absolute left-8 -bottom-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl shadow-xl px-5 py-3.5 border border-teal-500/30 items-center gap-3 z-20"
            >
              <div>
                <h3 className="text-2xl font-black leading-tight">5,000+</h3>
                <p className="text-xs text-teal-100 font-medium">
                  Happy Patients
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24">
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 sm:p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
              <FaUserMd className="text-2xl text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-xl text-gray-800">
              Experienced Care
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Professional Ayurvedic consultation focused on long-term health
              and holistic wellness.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 sm:p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="bg-cyan-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
              <FaFlask className="text-2xl text-cyan-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-xl text-gray-800">
              Urban Clinic Lab
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Accurate laboratory testing with modern equipment and reliable,
              timely report deliveries.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 sm:p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 group sm:col-span-2 lg:col-span-1">
            <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <FaArrowRight className="text-2xl text-emerald-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-xl text-gray-800">
              Better Healthcare
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Dedicated to quality medical treatment, complete patient
              satisfaction, and healthier lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
