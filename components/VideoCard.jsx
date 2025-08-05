import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaPlay } from "react-icons/fa";

import { slideIn } from "@/utilities/motion";

const VideoCard = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div 
      variants={slideIn("up", 0.4)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full aspect-video overflow-hidden shadow-lg mb-16"
    >
      {!showVideo ? (
        <>
          <Image 
            src="/images/videos-bg.JPG"
            alt="Video thumbnail"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/40" />

          <button
            className="absolute inset-0 flex items-center justify-center text-white text-4xl md:text-5xl"
            onClick={() => setShowVideo(true)}
          >
            <FaPlay />
          </button>
        </>
      ) : (
        <video
          controls
          autoPlay
          src="/mahakam-residence.mp4"
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  )
}

export default VideoCard;