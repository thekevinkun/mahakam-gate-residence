import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import { mortgageTypes } from "@/utilities/constant";
import { slideIn, fadeIn } from "@/utilities/motion";

const MortgageCalculator = () => {
  const [loanDuration, setLoanDuration] = useState(10);
  const [activeType, setActiveType] = useState("konvensional");

  return (
    <section id="mortgage" className="padding max-w-screen-xl mx-auto overflow-hidden">
      <motion.h2 
        variants={slideIn("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center text-2xl md:text-3xl font-bold text-black tracking-[0.35em] uppercase mb-4"
      >
        Mortgage Calculator
      </motion.h2>


      <motion.div 
        variants={fadeIn()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-full mx-auto text-center"
      >
        <Link href="#" className="group inline-flex justify-center mb-14">
          <span
            className="inline-flex items-center gap-2 text-sm md:text-base 
            text-sky-600 font-medium uppercase tracking-widest 
            border-b-2 border-transparent group-hover:border-current transition-all"
          >
            Get Started
            <IoIosArrowForward className="text-lg md:text-xl" />
          </span>
        </Link>
      </motion.div>

      {/* CONTENTS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - form */}
        <motion.div 
          variants={slideIn("left", 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Mortgage Simulation (KPR)</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">Estimate what your monthly mortgage payments will be</p>
          </div>

          {/* Mortgage type */}
          <div className="flex">
            {mortgageTypes.map((type) => (
              <button 
                key={type.id}
                className={`px-4 py-2 transition ${
                  activeType === type.id
                    ? "bg-white shadow-lg text-gray-700 font-semibold"
                    : "bg-black/5 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
                onClick={() => setActiveType(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Form inputs */}
          <div className="space-y-6">
            {/* Property price */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Property Priced</label>
              <div className="flex items-center gap-2">
                <input 
                  type="number"
                  placeholder="2.500.000.000"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <span className="text-gray-600 font-semibold">Rp</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Down Payment</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="200.000.000"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
                <span className="text-gray-600 font-semibold">Rp</span>
              </div>
            </div>

            {/* Loan Duration */}
            <div>
              <label className="block text-gray-700 mb-1 font-medium">Loan Duration</label>
              <div className="flex items-center justify-between mb-1 text-sm text-gray-600">
                <span>5 tahun</span>
                <span className="font-semibold">{loanDuration} tahun</span>
                <span>25 tahun</span>
              </div>
              <input
                type="range"
                min={5}
                max={25}
                value={loanDuration}
                onChange={(e) => setLoanDuration(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Note */}
            <p className="text-xs sm:text-sm text-gray-500">
              Please note that the calculation provided is for estimation purposes
              only and may not reflect the final terms of your mortgage
            </p>
          </div>
        </motion.div>
        
        {/* Right Side - Result Box */}
        <motion.div 
          variants={slideIn("right", 0.5, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-full lg:max-w-sm justify-self-end bg-white border border-blue-200 shadow-sm rounded-xl p-8 flex flex-col gap-6"
        >
          <div>
            <h3 className="text-sm md:text-base font-semibold text-gray-500 mb-1">Monthly Cost</h3>
            <p className="text-3xl font-bold text-sky-900">Rp 0</p>
          </div>

          <div className="text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Mortgage Payment</span>
              <span className="font-semibold">Rp 0</span>
            </div>
            <div className="flex justify-between">
              <span>Interest Rate</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MortgageCalculator;