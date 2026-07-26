import { motion } from "framer-motion";
import {
  FaAward,
  FaCheckCircle,
  FaClinicMedical,
  FaFlask,
  FaHeartbeat,
  FaLeaf,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd />,
    title: "Experienced Healthcare",
    description:
      "Quality Ayurvedic consultation focused on understanding every patient's unique health condition.",
  },
  {
    icon: <FaFlask />,
    title: "Urban Clinic Laboratory",
    description:
      "Reliable diagnostic laboratory providing accurate pathology reports with modern testing methods.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Patient First",
    description:
      "Every patient receives personal attention, proper medical guidance, and compassionate care.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Hygienic",
    description:
      "Clean consultation rooms and laboratory maintaining strict clinical hygiene standards.",
  },
  {
    icon: <FaLeaf />,
    title: "Natural Healing",
    description:
      "Ayurvedic treatments that focus on long-term wellness rather than temporary symptom relief.",
  },
  {
    icon: <FaAward />,
    title: "Trusted Clinic",
    description:
      "Dedicated to providing dependable healthcare services with complete honesty and professionalism.",
  },
];

const stats = [
  { value: "5000+", title: "Happy Patients" },
  { value: "10+", title: "Years Experience" },
  { value: "4.7★", title: "Patient Rating" },
  { value: "100%", title: "Patient Care" },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute left-0 top-20 w-80 h-80 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

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
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Healthcare Built On{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Trust & Care
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            At R.S Clinic, we combine traditional Ayurvedic care with dependable
            laboratory services to provide complete healthcare in a comfortable
            and patient-friendly environment.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl p-6 sm:p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white text-2xl sm:text-3xl shadow-md shadow-teal-600/20 group-hover:rotate-6 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-6 text-gray-800 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner with Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 overflow-hidden shadow-xl shadow-teal-900/10 border border-teal-500/20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
              {/* Banner Left Info */}
              <div className="lg:col-span-7 text-white space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  Caring For Your <br className="hidden sm:inline" />
                  Health Every Day
                </h2>

                <p className="text-xs sm:text-sm text-teal-100 leading-relaxed max-w-xl">
                  Whether you visit us for Ayurvedic consultation or diagnostic
                  testing, our priority is to provide quality healthcare with
                  compassion, accuracy, and complete patient satisfaction.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Experienced Healthcare Team",
                    "Reliable Laboratory Reports",
                    "Patient-Centered Treatment",
                    "Friendly Clinic Environment",
                  ].map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 text-xs sm:text-sm"
                    >
                      <FaCheckCircle className="text-teal-300 flex-shrink-0" />
                      <span className="font-medium text-white">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner Right Stats */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-center border border-white/10"
                  >
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {item.value}
                    </h3>
                    <p className="text-teal-100 text-xs sm:text-sm font-semibold mt-1">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-teal-50/80 rounded-3xl p-6 sm:p-8 border border-teal-100/60 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { title: "Qualified Care", icon: <FaUserMd /> },
                { title: "Modern Diagnostics", icon: <FaFlask /> },
                { title: "Natural Treatment", icon: <FaLeaf /> },
                { title: "Trusted Service", icon: <FaClinicMedical /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-teal-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-800">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
