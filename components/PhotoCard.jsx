import Image from "next/image";
import { motion } from "framer-motion";

import { scaleIn } from "@/utilities/motion";

const PhotoCard = ({ src, index }) => {
  return (
    <motion.div 
      variants={scaleIn(0.6, index * 0.35)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full aspect-square overflow-hidden shadow-md"
    >
      <Image
        src={src}
        alt={`Gallery image ${index + 1}`}
        fill
        className="object-cover"
      />
    </motion.div>
  )
}

export default PhotoCard;