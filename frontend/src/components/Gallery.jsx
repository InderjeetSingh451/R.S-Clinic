import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClinicMedical, FaExpand, FaTimes } from "react-icons/fa";

import clinic1 from "../assets/gallery/clinic1.png";
import clinic2 from "../assets/gallery/clinic2.png";
import clinic3 from "../assets/gallery/clinic3.png";
import clinic4 from "../assets/gallery/clinic4.png";
import clinic5 from "../assets/gallery/clinic5.png";
import clinic6 from "../assets/gallery/clinic6.png";

const gallery = [
  { image: clinic1, title: "Clinic Reception", category: "Facilities" },
  { image: clinic2, title: "Consultation Room", category: "Ayurvedic Care" },
  { image: clinic3, title: "Urban Clinic Laboratory", category: "Diagnostics" },
  { image: clinic4, title: "Patient Waiting Area", category: "Comfort" },
  { image: clinic5, title: "Diagnostic Equipment", category: "Modern Tech" },
  { image: clinic6, title: "Healthcare Services", category: "Patient Care" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute -left-20 top-20 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-0 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

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
            <FaClinicMedical className="text-teal-600" />
            <span>Gallery</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-4 leading-[1.15] tracking-tight">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block sm:inline lg:block">
              Clinic Environment
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Take a look inside R.S Clinic and Urban Clinic Laboratory. We
            believe a clean, comfortable, and modern environment is integral to
            high-quality healthcare.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 cursor-pointer bg-gray-100 transition-all duration-300"
            >
              {/* Gallery Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover duration-500 group-hover:scale-105"
              />

              {/* Overlay (Touch-friendly: visible on mobile, hover-activated on desktop) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
                <div className="flex justify-between items-end gap-3">
                  <div>
                    <span className="text-[10px] sm:text-xs font-semibold text-teal-300 uppercase tracking-wider bg-teal-900/60 px-2.5 py-1 rounded-full border border-teal-500/30">
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5">
                      R.S Clinic & Lab
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-sm border border-white/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaExpand />
                  </div>
                </div>
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
          className="mt-16 sm:mt-20"
        >
          <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 text-white overflow-hidden shadow-xl shadow-teal-900/10 border border-teal-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  Clean
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-teal-100 leading-relaxed">
                  Hygienic, sanitized, and well-maintained clinic space ensuring
                  safety and comfort for every patient.
                </p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  Modern
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-teal-100 leading-relaxed">
                  Urban Clinic Laboratory equipped with advanced diagnostic
                  systems for dependable results.
                </p>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  Caring
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-teal-100 leading-relaxed">
                  Every patient is welcomed with genuine compassion, respect,
                  and personalized attention.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-teal-600 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close image preview"
              >
                <FaTimes />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain bg-black/40"
              />

              <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-teal-400 mt-0.5">
                    R.S Clinic & Urban Clinic Laboratory
                  </p>
                </div>
                <span className="text-xs bg-slate-800 px-3 py-1.5 rounded-full text-gray-300 font-medium">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
