import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need an appointment before visiting the clinic?",
    answer:
      "Appointments are recommended to reduce waiting time, but walk-in patients are always welcome during operating hours.",
  },
  {
    question: "What treatments are available at R.S Clinic?",
    answer:
      "R.S Clinic provides Ayurvedic consultations, general health check-ups, chronic disease management, preventive healthcare guidance, and personalized treatment plans.",
  },
  {
    question: "Is Urban Clinic Laboratory part of R.S Clinic?",
    answer:
      "Yes. Urban Clinic Laboratory operates directly within R.S Clinic, allowing patients to get expert consultations and pathology testing under one roof.",
  },
  {
    question: "What laboratory tests are available?",
    answer:
      "Our laboratory performs routine blood investigations, urine analysis, health screening panels, and specialized diagnostic tests as recommended by the doctor.",
  },
  {
    question: "How long does it take to receive test reports?",
    answer:
      "Most routine laboratory reports are delivered promptly on the same day. Exact turnaround times depend on the complexity of the specific test.",
  },
  {
    question: "What are the clinic consultation timings?",
    answer:
      "The clinic is open Monday through Saturday with two daily shifts: Morning OPD from 09:00 AM to 01:00 PM and Evening OPD from 04:00 PM to 07:00 PM.",
  },
  {
    question: "Can I discuss my lab reports with the doctor?",
    answer:
      "Yes. Patients can discuss their diagnostic reports with the doctor during follow-up consultations for proper medical guidance and treatment plans.",
  },
  {
    question: "How can I reach or contact the clinic?",
    answer:
      "You can reach out via phone call, WhatsApp, or by directly visiting our clinic during working hours located on Begu Road, Sirsa.",
  },
];

const FAQItem = ({ item, active, onClick }) => {
  return (
    <motion.div
      layout
      className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
        active
          ? "bg-white shadow-xl shadow-teal-900/5 border-teal-500/40 ring-1 ring-teal-500/30"
          : "bg-white/80 hover:bg-white shadow-sm border-gray-100 hover:border-teal-200"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-3 sm:gap-4 focus:outline-none"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
              active ? "bg-teal-600 text-white" : "bg-teal-50 text-teal-600"
            }`}
          >
            <FaQuestionCircle className="text-base sm:text-xl" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-snug">
            {item.question}
          </h3>
        </div>

        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 text-sm sm:text-base ${
            active
              ? "rotate-180 bg-teal-50 text-teal-600"
              : "bg-gray-50 text-gray-400"
          }`}
        >
          <FaChevronDown />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
              <div className="sm:pl-16 border-t border-gray-100/80 pt-3 sm:pt-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-50/70 via-white to-teal-50/50 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-10 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-cyan-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-teal-200/50">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Have Questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              We're Here To Help
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Find answers to common questions about consultations at R.S Clinic
            and services at Urban Clinic Laboratory.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-10 sm:mt-14 space-y-3 sm:space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              active={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
