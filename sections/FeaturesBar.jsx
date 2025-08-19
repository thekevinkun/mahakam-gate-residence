import { motion } from "framer-motion";

import { FeatureList } from "@/components";

import { features } from "@/utilities/constant";
import { slideIn } from "@/utilities/motion";

const FeaturesBar = () => {
  return (
    <section
      id="features"
      className="w-full bg-sky-900 text-white"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Our Features
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-2 md:gap-x-5 lg:gap-x-16 py-7 px-4">
        {features.map((item, index) => (
          <motion.div
            key={item.name}
            variants={slideIn("up", 0.4, index * 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            <FeatureList key={item.name} name={item.name} value={item.value} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBar;
