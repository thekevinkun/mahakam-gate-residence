import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaQrcode, FaRegCopy, FaPrint } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { agentInfo } from "@/utilities/constant";
import { slideIn } from "@/utilities/motion";

const AgentCard = () => {
  return (
    <div>
      {/* Agent Profile */}
      <motion.div 
        variants={slideIn("right", 0.5, 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center gap-5"
      >
        <Image 
          src={agentInfo.photo}
          alt={agentInfo.name}
          width={256}
          height={256}
          className="w-17 h-17 sm:w-19 sm:h-19 aspect-square rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-lg md:text-xl text-gray-800">{agentInfo.name}</h3>

          <div className="flex gap-2 mt-2">
            <button className="btn btn-outline !px-5 !py-1.5 !text-xs sm:!text-sm">
              <BsTelephoneFill className="text-sm sm:text-base" /> Call
            </button>
            <button className="btn btn-outline !px-5 !py-1.5 !text-xs sm:!text-sm">
              <MdEmail className="text-sm sm:text-base" /> Email
            </button>
            <button className="btn btn-primary !px-5 !py-1.5 !text-xs sm:!text-sm">
              <FaWhatsapp className="text-sm sm:text-base" /> WhatsApp
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={slideIn("right", 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="border-t border-gray-200 my-6" 
      />
      
      {/* Agent Details */}
      <motion.div 
        variants={slideIn("up", 0.6, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-4 text-sm"
      >
        {agentInfo.details.map((item, i) => (
          <div>
            <p className="text-gray-500">{item.name}:</p>
            <p className="font-medium">{item.value}</p>
          </div>
        ))}

        <motion.div 
          variants={slideIn("up", 0.6, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="col-span-2 flex items-center justify-between mt-2 border p-3 rounded"
        >
          <div className="flex items-center gap-3">
            <FaQrcode className="text-3xl md:text-4xl" />
            <div>
              <p className="font-medium text-xs md:text-sm">DLD Permit Number</p>
              <p className="font-light text-sm md:text-base">12345678</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sky-800 text-base md:text-lg">
            <FaPrint className="cursor-pointer" />
            <FaRegCopy className="cursor-pointer" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AgentCard;