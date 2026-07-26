import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClinicMedical,
  FaFlask,
  FaHeartbeat,
  FaLeaf,
  FaNotesMedical,
  FaUserMd,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLeaf />,
    title: "Ayurvedic Consultation",
    description:
      "Personalized Ayurvedic consultation focused on identifying the root cause and improving long-term health naturally.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <FaHeartbeat />,
    title: "General Health Check-Up",
    description:
      "Routine health examinations to monitor your well-being and detect health concerns at an early stage.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: <FaUserMd />,
    title: "Follow-up Consultation",
    description:
      "Continuous monitoring and guidance to ensure effective treatment and faster recovery.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaFlask />,
    title: "Laboratory Testing",
    description:
      "Blood tests, urine tests, and diagnostic investigations through Urban Clinic Laboratory.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <FaNotesMedical />,
    title: "Health Screening",
    description:
      "Preventive health screening packages for individuals and families to maintain better health.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <FaClinicMedical />,
    title: "Patient Care",
    description:
      "Friendly staff and a comfortable environment dedicated to providing quality healthcare for every patient.",
    color: "from-teal-500 to-cyan-600",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 overflow-hidden relative"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

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
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Complete Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Under One Roof
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            R.S Clinic provides quality Ayurvedic consultation together with
            reliable laboratory services through Urban Clinic Laboratory,
            ensuring patients receive comprehensive healthcare in one place.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Gradient Stripe */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />

              <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center text-2xl sm:text-3xl shadow-md`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Laboratory Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 overflow-hidden shadow-xl shadow-teal-900/10 border border-teal-500/20"
        >
          <div className="grid lg:grid-cols-12 items-center">
            {/* Banner Left Info */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold border border-white/20">
                <FaFlask className="text-teal-200" />
                <span>Urban Clinic Laboratory</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
                Reliable Laboratory & <br className="hidden sm:inline" />
                Diagnostic Services
              </h2>

              <p className="text-xs sm:text-sm text-teal-100 leading-relaxed max-w-xl">
                Urban Clinic Laboratory operates within R.S Clinic to provide
                accurate and timely diagnostic testing. Our goal is to support
                doctors and patients with dependable reports for better medical
                decisions.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                {[
                  "Blood Tests",
                  "Urine Tests",
                  "Health Screening",
                  "Fast Reports",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border border-white/10"
                  >
                    <span className="text-teal-300 font-bold">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Banner Right Card */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl sm:text-4xl text-teal-600 mx-auto shadow-inner">
                  <FaFlask />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">
                  Urban Clinic Lab
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Modern diagnostic laboratory committed to delivering reliable
                  reports with professionalism and care.
                </p>

                <div className="space-y-2.5 mt-6 text-left">
                  {[
                    "Blood Investigation",
                    "Routine Health Tests",
                    "Diagnostic Reports",
                    "Professional Staff",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-gray-50/80 rounded-xl p-3 border border-gray-100 text-xs sm:text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        <FaCheckCircle />
                      </div>
                      <span className="font-semibold text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
