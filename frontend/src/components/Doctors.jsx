import { motion } from "framer-motion";
import {
  FaAward,
  FaCalendarAlt,
  FaCheckCircle,
  FaClinicMedical,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";

const specializations = [
  "Ayurvedic Consultation",
  "General Health Check-up",
  "Chronic Disease Management",
  "Lifestyle & Wellness Guidance",
  "Natural Healing Therapies",
  "Patient Follow-up Care",
];

const Doctors = () => {
  return (
    <section
      id="doctor"
      className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden relative"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-teal-200/50">
            Meet Our Doctor
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Dedicated To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Your Better Health
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Compassionate healthcare begins with listening, understanding, and
            providing the right treatment tailored for every patient.
          </p>
        </motion.div>

        {/* Doctor Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl shadow-teal-900/15 border border-teal-500/20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
              {/* Doctor Avatar & Floating Badge */}
              <div className="lg:col-span-5 flex justify-center py-4">
                <div className="relative">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-4 sm:border-8 border-white/20 shadow-inner">
                    <FaUserMd className="text-white text-7xl sm:text-8xl lg:text-9xl" />
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-2 top-2 sm:-right-4 sm:top-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100 flex items-center gap-3 z-10"
                  >
                    <div className="bg-amber-50 p-2 sm:p-2.5 rounded-xl text-amber-500">
                      <FaAward className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight">
                        Trusted Care
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-500">
                        Patient Focused
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="lg:col-span-7 text-white space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    Dr. ____________
                  </h2>
                  <p className="text-teal-200 font-medium text-sm sm:text-base mt-1">
                    Ayurvedic Physician & Healthcare Specialist
                  </p>
                </div>

                <p className="text-teal-50/90 text-sm sm:text-base leading-relaxed">
                  Our clinic is committed to providing personalized Ayurvedic
                  healthcare with compassion, professionalism, and a
                  patient-first approach. Every treatment plan is designed to
                  improve overall wellness while addressing the root cause of
                  health concerns.
                </p>

                {/* Details Pills */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <FaClinicMedical className="text-2xl text-teal-200 mb-2" />
                    <h3 className="font-bold text-sm sm:text-base">
                      Experience
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-100 mt-0.5">
                      10+ Years Care
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                    <FaHeartbeat className="text-2xl text-teal-200 mb-2" />
                    <h3 className="font-bold text-sm sm:text-base">
                      Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-100 mt-0.5">
                      Personalized Care
                    </p>
                  </div>
                </div>

                {/* Specializations List */}
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                    Specializations & Services
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {specializations.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2 border border-white/10 text-xs sm:text-sm text-teal-50"
                      >
                        <FaCheckCircle className="text-teal-300 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timings Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-teal-50/80 to-cyan-50/80 rounded-3xl p-6 sm:p-10 border border-teal-100/60 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-md shadow-teal-900/5 flex items-center justify-center text-teal-600 text-2xl sm:text-3xl flex-shrink-0">
                  <FaCalendarAlt />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    Consultation Hours
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Monday to Saturday OPD Timings
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:w-auto">
                <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-800 text-xs sm:text-sm">
                    Morning Shift
                  </h3>
                  <p className="mt-1 text-teal-600 font-bold text-xs sm:text-sm">
                    09:00 AM – 01:00 PM
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-800 text-xs sm:text-sm">
                    Evening Shift
                  </h3>
                  <p className="mt-1 text-teal-600 font-bold text-xs sm:text-sm">
                    04:00 PM – 07:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
