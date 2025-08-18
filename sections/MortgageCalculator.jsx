import { useState, useMemo } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import { Calculator } from "@/components";

import { slideIn, fadeIn } from "@/utilities/motion";

const MortgageCalculator = () => {
  const [activeType, setActiveType] = useState("konvensional");

  const formik = useFormik({
    initialValues: {
      price: "",
      downPayment: "",
      loanDuration: "10",
      interestRate: 0.05
    },
    validationSchema: Yup.object({
      price: Yup.number().required("Required").min(10000000, "Min 10 juta"),
      downPayment: Yup.number().required("Required"),
      loanDuration: Yup.number().required("Required"),
      interestRate: Yup.number().required("Required").min(0),
    }),
    onSubmit: () => {},
  });

  const { values, errors, touched, setFieldValue } = formik;

  const result = useMemo(() => {
    const price = Number(values.price || 0);
    const down = Number(values.downPayment || 0);

    if (price <= 0 || down <= 0) return null;

    const loanAmount = price - down;
    const durationMonths = values.loanDuration * 12;

    if (loanAmount <= 0 || durationMonths <= 0) return null;

    let monthlyInstallment = 0;
    let displayRate = values.interestRate;  

    if (activeType === "syariah") {
      // Fixed margin (Murabahah) 8.75% per year over the whole loan amount
      const annualMarginRate = 0.0875; 
      const totalMargin = loanAmount * annualMarginRate * values.loanDuration; 
      monthlyInstallment = (loanAmount + totalMargin) / durationMonths;
      displayRate = annualMarginRate * 100;
    } else {
      // Konvensional & Subsidi use existing annuity formula
      const annualRate = Number(values.interestRate);
      const monthlyRate = annualRate / 12;
      const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, durationMonths);
      const denominator = Math.pow(1 + monthlyRate, durationMonths) - 1;
      monthlyInstallment = numerator / denominator;
      displayRate = annualRate * 100;
    }

    return {
      monthlyPayment: Math.round(monthlyInstallment),
      interestRate: displayRate.toFixed(),
    };
  }, [values.price, values.downPayment, values.loanDuration, values.interestRate]);

  return (
    <section id="mortgage" className="padding max-w-screen-xl mx-auto overflow-hidden">
      <motion.h2 
        variants={slideIn("up", 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center text-2xl md:text-3xl font-bold text-black tracking-[0.35em] uppercase mb-4"
      >
        Mortgage Calculator
      </motion.h2>


      <motion.div 
        variants={fadeIn(1, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
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
          variants={slideIn("left", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Mortgage Simulation (KPR)</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">Estimate what your monthly mortgage payments will be</p>
          </div>

          <Calculator 
            activeType={activeType}
            setActiveType={setActiveType}
            price={values.price}
            downPayment={values.downPayment}
            loanDuration={values.loanDuration}
            interestRate={values.interestRate}
            setFieldValue={setFieldValue}
          />
        </motion.div>
        
        {/* Right Side - Result Box */}
        <motion.div 
          variants={slideIn("right", 0.9, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full max-w-full lg:max-w-sm justify-self-end bg-white border border-blue-200 shadow-sm rounded-xl p-8 flex flex-col gap-6"
        >
          <div>
            <h3 className="text-sm md:text-base font-semibold text-gray-500 mb-1">Monthly Cost</h3>
            <p className="text-3xl font-bold text-sky-900">
              Rp {result?.monthlyPayment?.toLocaleString("id-ID") || 0}
            </p>
          </div>

          <div className="text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Mortgage Payment</span>
              <span className="font-semibold">
                Rp {result?.monthlyPayment?.toLocaleString("id-ID") || 0}
              </span>
            </div>
            <div className="flex justify-between">
              <span>
                {activeType === "syariah" ?
                  "Fixed Margin"
                : "Interest Rate"
                }
              </span>
              <span className="font-semibold">
                {result?.interestRate || 0}%
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MortgageCalculator;