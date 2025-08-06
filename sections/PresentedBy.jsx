import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import { AgentCard } from "@/components";
import { fadeIn, slideIn } from "@/utilities/motion";

const AgentMap = dynamic(() => import("@/components/AgentMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const PresentedBy = () => {
  return (
    <section id="agent" className="pt-10 lg:pt-16 overflow-hidden">
      <div className="lg:h-[548px] flex flex-col-reverse lg:flex-row gap-y-7 lg:gap-x-28 shadow-md">
        <motion.div 
          variants={fadeIn(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 aspect-video lg:aspect-auto"
        >
          <AgentMap />
        </motion.div>

        <div className="flex-1 flex flex-col justify-center px-4 md:px-10 lg:pl-0 lg:pr-14">
          <motion.h2 
            variants={slideIn("right", 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-black text-xl md:text-2xl font-bold tracking-[0.35em] uppercase mb-8"
          >
            Presented By
          </motion.h2>

          <AgentCard />
        </div>
      </div>
    </section>
  )
}

export default PresentedBy;