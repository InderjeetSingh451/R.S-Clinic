import { motion } from "framer-motion";
import {
  FaAward,
  FaCheckCircle,
  FaClinicMedical,
  FaFlask,
  FaHeartbeat,
  FaLeaf,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Ayurvedic Treatment",
    desc: "Natural and personalized healthcare focused on long-term wellness.",
    color: "teal",
  },
  {
    icon: <FaFlask />,
    title: "Urban Clinic Laboratory",
    desc: "Reliable pathology and diagnostic testing under one roof.",
    color: "cyan",
  },
  {
    icon: <FaHeartbeat />,
    title: "Patient First",
    desc: "Compassionate care with complete attention to every patient.",
    color: "emerald",
  },
  {
    icon: <FaAward />,
    title: "Trusted Healthcare",
    desc: "Quality treatment with a commitment to patient satisfaction.",
    color: "teal",
  },
];

const stats = [
  { value: "5000+", label: "Happy Patients" },
  { value: "10+", label: "Years of Care" },
  {
    value: "4.7",
    label: "Patient Rating",
    icon: <FaStar className="text-yellow-300 text-sm inline ml-1 -mt-1" />,
  },
  { value: "100%", label: "Dedicated Care" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 w-80 h-80 bg-cyan-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 rounded-3xl sm:rounded-[36px] p-6 sm:p-10 text-white shadow-2xl shadow-teal-900/20 border border-teal-500/20 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-center mb-6">
                <div className="bg-white/15 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/20 shadow-inner">
                  <FaClinicMedical className="text-4xl sm:text-6xl text-white" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight">
                R.S Clinic
              </h2>

              <p className="text-center mt-2 text-teal-100 font-medium text-xs sm:text-sm tracking-wide">
                Ayurvedic Clinic & Urban Clinic Laboratory
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-center border border-white/10"
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                      {stat.value}
                      {stat.icon}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-teal-100 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-teal-100">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.2] tracking-tight">
              Compassionate Healthcare{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block">
                For Every Family
              </span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              At <strong className="text-gray-900">R.S Clinic</strong>, we
              believe healthcare is built on trust, compassion, and accurate
              diagnosis. Our clinic provides personalized Ayurvedic consultation
              while{" "}
              <strong className="text-gray-900">Urban Clinic Laboratory</strong>{" "}
              offers reliable diagnostic services to help patients receive
              complete healthcare under one roof.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Our goal is to improve your health through natural treatment,
              modern laboratory support, and a patient-first approach focused on
              long-term wellness.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-3.5">
              {[
                "Personalized Ayurvedic consultation",
                "Advanced pathology & laboratory testing",
                "Friendly and comfortable clinic environment",
                "Dedicated patient support and follow-up care",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-teal-500 text-lg flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-24">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 sm:p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center text-2xl text-teal-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mt-6 text-gray-800 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
