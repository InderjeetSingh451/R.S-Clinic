import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaFileMedical,
  FaFlask,
  FaHeartbeat,
  FaMicroscope,
  FaNotesMedical,
  FaPhoneAlt,
  FaTint,
  FaUserNurse,
} from "react-icons/fa";

const tests = [
  {
    icon: <FaTint />,
    title: "Blood Tests",
    desc: "Complete blood investigations with accurate and reliable reporting.",
  },
  {
    icon: <FaFlask />,
    title: "Urine Analysis",
    desc: "Routine and microscopic urine examination for better diagnosis.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Packages",
    desc: "Preventive health check-up packages for individuals and families.",
  },
  {
    icon: <FaNotesMedical />,
    title: "Routine Diagnostics",
    desc: "Essential diagnostic tests recommended during consultation.",
  },
];

const process = [
  {
    step: "01",
    icon: <FaUserNurse />,
    title: "Patient Registration",
    desc: "Quick and seamless check-in at reception.",
  },
  {
    step: "02",
    icon: <FaTint />,
    title: "Sample Collection",
    desc: "Hygienic and painless sample extraction.",
  },
  {
    step: "03",
    icon: <FaMicroscope />,
    title: "Laboratory Analysis",
    desc: "Tested using modern pathology equipment.",
  },
  {
    step: "04",
    icon: <FaFileMedical />,
    title: "Report Generation",
    desc: "Timely delivery of accurate diagnostic results.",
  },
];

const Laboratory = () => {
  return (
    <section
      id="laboratory"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-teal-50/60 via-white to-cyan-50/60 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -left-32 top-0 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-cyan-200/30 blur-3xl pointer-events-none" />

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
            <FaMicroscope className="text-teal-600" />
            <span>Urban Clinic Laboratory</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Trusted Diagnostic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Laboratory Services
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Urban Clinic Laboratory is an integral part of R.S Clinic, providing
            dependable diagnostic testing with accurate reporting, modern
            equipment, and patient-focused care.
          </p>
        </motion.div>

        {/* Test Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {tests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 sm:p-8 border border-gray-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 group-hover:bg-teal-600 text-teal-600 group-hover:text-white flex items-center justify-center text-2xl transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-6 text-gray-800 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simple Testing Process */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Simple Testing Process
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              Quick, hygienic, and hassle-free diagnostic experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-center h-full hover:shadow-md transition-shadow relative overflow-hidden">
                  <span className="absolute top-3 right-4 text-3xl font-black text-gray-100 select-none">
                    {item.step}
                  </span>

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white flex items-center justify-center text-2xl shadow-md shadow-teal-600/20 relative z-10">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-base sm:text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index !== process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 text-teal-400 text-xl z-20">
                    <FaArrowRight />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 p-6 sm:p-10 lg:p-12 text-white shadow-xl shadow-teal-900/10 border border-teal-500/20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Why Patients <br className="hidden sm:inline" />
                  Trust Our Lab
                </h2>

                <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                  We focus on high precision, sterile hygiene, and rapid
                  turnaround times so doctors can make informed decisions and
                  patients receive dependable healthcare.
                </p>
              </div>

              <div className="lg:col-span-7 grid xs:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Accurate & Reliable Reports",
                  "Modern Diagnostic Equipment",
                  "Experienced Laboratory Staff",
                  "Clean & Hygienic Environment",
                  "Quick Report Delivery",
                  "Patient-Friendly Service",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-white/10"
                  >
                    <FaCheckCircle className="text-teal-300 text-base sm:text-lg flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Report Time & Call Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-white rounded-3xl sm:rounded-[32px] shadow-sm border border-gray-100 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl sm:text-3xl text-teal-600 flex-shrink-0">
                <FaClock />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Fast & Reliable Reports
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
                  Most routine investigations are completed as quickly as
                  possible while adhering to strict pathology quality standards.
                </p>
              </div>
            </div>

            {/* CALL LABORATORY BUTTON */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+91XXXXXXXXXX"
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2.5 transition-all w-full sm:w-auto flex-shrink-0 cursor-pointer"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call Laboratory</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Laboratory;
