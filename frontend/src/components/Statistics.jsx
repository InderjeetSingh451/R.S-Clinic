import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaAward,
  FaClinicMedical,
  FaHeartbeat,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserFriends />,
    value: 5000,
    suffix: "+",
    title: "Happy Patients",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: <FaClinicMedical />,
    value: 10,
    suffix: "+",
    title: "Years of Experience",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaAward />,
    value: 100,
    suffix: "%",
    title: "Patient Satisfaction",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: <FaStar />,
    value: 4.7,
    suffix: "/5",
    title: "Average Rating",
    color: "from-amber-500 to-orange-500",
  },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref}>
      {end % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

const Statistics = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50/70 via-white to-teal-50/50">
      {/* Background Glows */}
      <div className="absolute left-0 top-10 w-80 h-80 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

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
            Our Achievements
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Trusted By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Thousands Of Patients
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Every patient who visits R.S Clinic is important to us. We strive to
            provide compassionate treatment, accurate diagnosis, and quality
            healthcare services through our clinic and Urban Clinic Laboratory.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${item.color}`}
              />

              <div className="p-6 sm:p-8">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-2xl sm:text-3xl shadow-md group-hover:rotate-6 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6 text-gray-900 tracking-tight">
                  <Counter end={item.value} suffix={item.suffix} />
                </h2>

                <p className="text-gray-600 mt-2 text-xs sm:text-sm font-semibold">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-xl shadow-teal-900/10 border border-teal-500/20">
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  Caring Beyond <br className="hidden sm:inline" />
                  Treatment
                </h2>

                <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                  At R.S Clinic, our mission is not only to treat illness but to
                  build healthier lives through personalized Ayurvedic care,
                  trusted laboratory services, and compassionate patient
                  support.
                </p>
              </div>

              {/* Right Column: Feature Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <FaHeartbeat className="text-2xl text-teal-200 mb-2" />
                  <h3 className="font-bold text-sm sm:text-base">
                    Personal Care
                  </h3>
                  <p className="mt-1 text-xs text-teal-100">
                    Every patient receives dedicated attention.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <FaClinicMedical className="text-2xl text-teal-200 mb-2" />
                  <h3 className="font-bold text-sm sm:text-base">
                    Modern Facility
                  </h3>
                  <p className="mt-1 text-xs text-teal-100">
                    Comfortable clinic and reliable diagnostics.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <FaAward className="text-2xl text-teal-200 mb-2" />
                  <h3 className="font-bold text-sm sm:text-base">
                    Trusted Care
                  </h3>
                  <p className="mt-1 text-xs text-teal-100">
                    Healthcare focused on quality and honesty.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <FaStar className="text-2xl text-amber-300 mb-2" />
                  <h3 className="font-bold text-sm sm:text-base">
                    Patient Reviews
                  </h3>
                  <p className="mt-1 text-xs text-teal-100">
                    Appreciated by families across the region.
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

export default Statistics;
