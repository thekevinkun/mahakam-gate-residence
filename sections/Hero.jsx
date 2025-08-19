import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { TbWorld } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { slideIn, fadeIn } from "@/utilities/motion";

const Hero = () => {
  return (
    <header id="home" className="hero">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.JPG"
            alt="Aerial view of Mahakam Gate Residence housing complex"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        </div>

        {/* OWNER */}
        <motion.div
          variants={slideIn("down", 0.5)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 z-10 flex flex-col items-center text-white pt-4 px-4"
        >
          <span className="text-sm md:text-base font-bold uppercase tracking-widest">
            Kevinkun
          </span>
          <div className="flex items-center gap-1.5">
            <div className="border border-t border-white w-5.5" />
            <span className="text-xs md:text-sm font-light uppercase tracking-[0.25em]">
              homes
            </span>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-28 md:pt-36">
          <motion.h1
            variants={slideIn("down", 0.5, 0.4)}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold mb-2"
          >
            Mahakam Gate Residence 3
          </motion.h1>

          <motion.p
            variants={fadeIn(0.8, 0.25)}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl font-light mb-8"
          >
            Mahakam Gate Residences, Tepian, Samarinda
          </motion.p>

          <motion.div
            variants={slideIn("left", 0.5, 0.2)}
            initial="hidden"
            animate="visible"
            className="flex items-center space-x-2 mb-10"
          >
            <span className="text-xl md:text-2xl font-light">
              {new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(
                1800000000
              )}{" "}
              IDR
            </span>
            <span className="bg-sky-800 text-white text-xs tracking-widest px-2 py-0.5">
              FOR SALE
            </span>
          </motion.div>

          <motion.a
            href="#agent"
            variants={slideIn("up", 0.5, 0.4)}
            initial="hidden"
            animate="visible"
            className="btn btn-outline !text-white mb-12 hide-print"
          >
            Contact Agent
          </motion.a>

          <motion.div
            variants={slideIn("up", 0.5, 0.7)}
            initial="hidden"
            animate="visible"
            className="flex items-center space-x-3 text-sky-900 text-2xl md:text-3xl hide-print"
          >
            <Link
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href="https://www.mahakam-gate-residence.com"
              target="_blank"
              aria-label="Official Website"
            >
              <TbWorld />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
