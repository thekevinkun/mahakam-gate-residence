import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaRegCopy, FaPrint } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { agentInfo } from "@/utilities/constant";
import { slideIn } from "@/utilities/motion";

const AgentCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(agentInfo.permitNumber);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <article>
      {/* Agent Profile */}
      <motion.div
        variants={slideIn("right", 0.5, 0.2)}
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
          <h3 className="font-semibold text-lg md:text-xl text-gray-800">
            {agentInfo.name}
          </h3>

          <div className="flex gap-2 mt-2 hide-print">
            <Link
              href={`tel:${agentInfo.phone}`}
              className="btn btn-outline !px-5 !py-1.5 !text-xs sm:!text-sm"
            >
              <BsTelephoneFill className="text-sm sm:text-base" /> Call
            </Link>
            <Link
              href={`mailto:${agentInfo.email}`}
              className="btn btn-outline !px-5 !py-1.5 !text-xs sm:!text-sm"
            >
              <MdEmail className="text-sm sm:text-base" /> Email
            </Link>
            <Link
              href={`https://wa.me/${agentInfo.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-5 !py-1.5 !text-xs sm:!text-sm"
            >
              <FaWhatsapp className="text-sm sm:text-base" /> WhatsApp
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", 0.5, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="border-t border-gray-200 my-6"
      />

      {/* Agent Details */}
      <motion.div
        variants={slideIn("up", 0.4, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-2 gap-4 text-sm"
      >
        {agentInfo.details.map((item) => (
          <dl key={item.name}>
            <dt className="text-gray-500">{item.name}:</dt>
            <dd className="font-medium">{item.value}</dd>
          </dl>
        ))}

        <motion.div
          variants={slideIn("up", 0.4, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="col-span-2 flex items-center justify-between mt-2 border p-3 rounded"
        >
          <div className="flex items-center gap-3">
            <QRCodeCanvas
              value={`https://wa.me/${agentInfo.phone}`}
              size={48}
              className="qr"
            />
            <div>
              <p className="font-medium text-xs md:text-sm">
                SMD Permit Number
              </p>
              <p className="font-light text-sm md:text-base">
                {agentInfo.permitNumber}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sky-800 text-base md:text-lg hide-print">
            <FaPrint title="Print" className="cursor-pointer" onClick={handlePrint} />
            <>
              {isCopied ? (
                <FaCheck />
              ) : (
                <FaRegCopy title="Copy Permit Number" className="cursor-pointer" onClick={handleCopy} />
              )}
            </>
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
};

export default AgentCard;
