import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Sirsa",
    rating: 5,
    review:
      "The doctor listened carefully to my health concerns and explained everything in a simple way. The treatment was effective and the clinic staff were very polite.",
  },
  {
    name: "Sunita Devi",
    location: "Sirsa",
    rating: 5,
    review:
      "Urban Clinic Laboratory provided quick and accurate reports. The entire process was smooth and the staff maintained proper hygiene.",
  },
  {
    name: "Amit Sharma",
    location: "Haryana",
    rating: 5,
    review:
      "A clean clinic with a peaceful environment. The Ayurvedic consultation was excellent and I am satisfied with the overall experience.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-50/70 via-white to-teal-50/50 overflow-hidden relative"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-10 w-80 h-80 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

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
            Patient Reviews
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            What Our Patients{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Say About Us
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Patient trust is our biggest achievement. We strive to provide
            compassionate healthcare, reliable diagnosis, and a comfortable
            experience for every patient visiting R.S Clinic.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-teal-100 text-4xl sm:text-5xl pointer-events-none select-none">
                <FaQuoteLeft />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 text-xs sm:text-sm relative z-10">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="mt-5 text-xs sm:text-sm text-gray-600 leading-relaxed italic relative z-10">
                  "{item.review}"
                </p>
              </div>

              {/* Patient Profile */}
              <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-gray-50">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl flex-shrink-0">
                  <FaUserCircle />
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-teal-900/10 border border-teal-500/20">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Your Health <br className="hidden sm:inline" />
                  Matters To Us
                </h2>

                <p className="text-xs sm:text-sm text-teal-100 leading-relaxed max-w-xl">
                  We are committed to providing personalized care, professional
                  consultations, and dependable laboratory services for every
                  patient.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center border border-white/10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    4.7★
                  </h3>
                  <p className="mt-1 text-xs text-teal-100 font-semibold">
                    Patient Rating
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center border border-white/10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    5,000+
                  </h3>
                  <p className="mt-1 text-xs text-teal-100 font-semibold">
                    Happy Patients
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

export default Testimonials;
