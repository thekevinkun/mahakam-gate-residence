import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { FaPlay } from "react-icons/fa";

import { slideIn } from "@/utilities/motion";

const VideoCard = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      variants={slideIn("up", 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full aspect-video overflow-hidden shadow-lg mb-16"
    >
      <AnimatePresence mode="wait">
        {!showVideo ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/videos-bg.JPG"
              alt="Video thumbnail"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/40" />

            <button
              aria-label="Play property video"
              className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl focus:outline-none focus:ring-4 focus:ring-sky-500"
              onClick={() => setShowVideo(true)}
            >
              <FaPlay />
            </button>
          </motion.div>
        ) : (
          <motion.video
            key="video"
            controls
            autoPlay
            src="/videos/residence.mp4"
            title="Mahakam Residence Floor Plan Video"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VideoCard;
