import Link from "next/link";
import { motion } from "framer-motion";

import { VideoCard, PhotoCard } from "@/components";

import { photos } from "@/utilities/constant";
import { slideContainer, slideIn, fadeIn } from "@/utilities/motion";

const MediaGallery = () => {
  return (
    <section
      id="media"
      aria-labelledby="media-heading"
      className="relative bg-media text-white overflow-hidden"
    >
      <div className="padding-y media-print">
        <div id="video-section" className="padding-x max-w-5xl mx-auto">
          {/* VIDEO SECTION */}
          <motion.h2
            id="media-heading"
            variants={fadeIn(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-center justify-center gap-x-5 text-base md:text-xl font-bold tracking-[0.35em] uppercase mb-12"
          >
            videos
            <span className="font-light text-gray-400">floor plans</span>
          </motion.h2>

          <VideoCard />
        </div>

        <div className="padding-x max-w-6xl mx-auto pt-12 md:pt-16">
          {/* PHOTO SECTION */}
          <motion.h2
            id="photo-gallery"
            variants={fadeIn(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center text-xl md:text-3xl font-bold tracking-[0.35em] uppercase mb-12 hide-print"
          >
            PHOTOS
          </motion.h2>

          <motion.div 
            variants={slideContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 photo-grid-print"
          >
            {photos.map((item, i) => (
              <PhotoCard 
                key={item.altText} 
                src={item.src} 
                altText={item.altText}
                index={i} 
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("left", 0.5, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/gallery" className="btn btn-outline !text-white !text-xs md:!text-sm hide-print">
            VIEW MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaGallery;
