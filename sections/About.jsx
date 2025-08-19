import { motion } from "framer-motion";

import { AmenitiesList } from "@/components";

import { amenities } from "@/utilities/constant";
import { slideIn, fadeIn } from "@/utilities/motion";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="padding max-w-screen-xl mx-auto overflow-hidden"
    >
      <motion.div
        variants={slideIn("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full flex flex-col items-center"
      >
        <h2
          id="about-heading" 
          className="text-center text-4xl md:text-5xl font-bold text-gray-400 tracking-[0.35em] mb-4 inline-block relative left-[1.5%] md:left-[1%] lg:left-[0.95%]"
        >
          ABOUT
        </h2>
      </motion.div>

      <motion.h3
        variants={fadeIn(0.8, 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className="text-center text-xl md:text-2xl font-semibold text-black mb-2"
      >
        The Mahakam River
      </motion.h3>

      <motion.p
        variants={fadeIn(0.9, 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        className="text-center text-sm md:text-base text-black font-light mb-4"
      >
        Samarinda, Kalimantan Timur
      </motion.p>

      <motion.div
        variants={slideIn("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-8 hide-print"
      >
        <a
          href="/files/residences-brochure-sample.pdf"
          download
          className="text-sm md:text-base text-sky-600 font-medium hover:underline underline-offset-4"
        >
          DOWNLOAD BROCHURE ↓
        </a>
      </motion.div>

      <motion.p
        variants={slideIn("right", 0.5, 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 px-6"
      >
        A perfect blend of contemporary and warmth. This 3 bdrm/3.75 bath,
        exquisite townhouse features soaring ceilings, incredible wall of
        windows to enjoy west facing views overlooking Kitchi Passage and
        surrounding village. The home was recently enhanced with many
        exceptional details including a private, well-appointed exterior.
        Endless hours are to be enjoyed on your expansive, covered deck.
        Convenient access to all Lynwood Center has to offer: Restaurants,
        Bakery, Movie Theatre, Trails and Beach.
      </motion.p>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-3 lg:gap-x-24 gap-y-6 justify-self-center max-w-5xl mx-auto px-4">
        {amenities.map((item, i) => (
          <motion.li
            key={i + 1 + "-" + item}
            variants={slideIn("left", 0.4, i * 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-center gap-3 text-gray-700 text-sm sm:text-base capitalize transition-colors duration-200 hover:text-sky-700"
          >
            <AmenitiesList name={item} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default About;
