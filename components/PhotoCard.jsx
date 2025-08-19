import Image from "next/image";
import { motion } from "framer-motion";

import { scaleIn } from "@/utilities/motion";

const PhotoCard = ({ src, altText, index }) => {
  return (
    <motion.div
      variants={scaleIn(0.5, index * 0.20)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative w-full h-full aspect-square overflow-hidden shadow-md group"
    >
      <Image
        src={src}
        alt={altText}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default PhotoCard;
