import { useEffect } from "react";

import {
  formatToIDR,
  unformatIDR,
  parseNumber,
  formatNumber,
} from "@/utilities/helpers";
import { mortgageTypes } from "@/utilities/constant";

const Calculator = ({
  activeType,
  setActiveType,
  price,
  downPayment,
  loanDuration,
  interestRate,
  setFieldValue,
}) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (price > 10000000) {
        if (activeType === "subsidi") {
          // KPR Subsidi: fixed min DP = 4,000,000
          if (downPayment < 4000000) {
            setFieldValue("downPayment", 4000000);
          }
        } else if (activeType === "konvensional") {
          // Konvensional: min DP = 10% of price
          if (downPayment < price * 0.1) {
            setFieldValue("downPayment", price * 0.1);
          }
        } else if (activeType === "syariah") {
          // Syariah: min DP = 20% of price
          if (downPayment < price * 0.2) {
            setFieldValue("downPayment", price * 0.2);
          }
        }
      } else {
        setFieldValue("downPayment", "");
      }
    }, 800);

    return () => clearTimeout(handler);
  }, [activeType, downPayment, price, setFieldValue]);

  useEffect(() => {
    if (activeType === "subsidi") {
      setFieldValue("interestRate", 0.05); // fixed 5%
      setFieldValue("loanDuration", 15); // fixed 15 years
    } else if (activeType === "konvensional") {
      setFieldValue("interestRate", 0.05); // start from 5%
      setFieldValue("loanDuration", 10); // flexible years
    } else if (activeType === "syariah") {
      setFieldValue("interestRate", 0); // no interest
      setFieldValue("loanDuration", 10); // flexible years
    }
  }, [activeType, setFieldValue]);

  return (
    <>
      {/* mortgage types */}
      <div className="w-fit flex rounded-lg overflow-hidden border border-gray-300">
        {mortgageTypes.map((type) => (
          <button
            key={type.id}
            className={`px-4 py-2 text-sm md:text-base transition ${
              activeType === type.id
                ? "bg-sky-800 text-white font-semibold"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveType(type.id);
              setFieldValue("price", "");
              setFieldValue("downPayment", "");
            }}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Form inputs */}
      <div className="space-y-6">
        {/* Property price */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Property Priced
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              autoComplete="off"
              name="price"
              value={formatToIDR(price)}
              onChange={(e) => {
                const raw = unformatIDR(e.target.value);
                if (!isNaN(raw)) {
                  setFieldValue("price", raw);
                }
              }}
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <span className="text-gray-600 font-semibold">IDR</span>
          </div>
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Down Payment
          </label>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="text"
              autoComplete="off"
              name="downPayment"
              value={formatToIDR(downPayment)}
              onChange={(e) => {
                const raw = unformatIDR(e.target.value);

                if (!isNaN(raw)) {
                  setFieldValue("downPayment", raw);
                }
              }}
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <span className="text-gray-600 font-semibold">IDR</span>
          </div>
          <p className="text-xs text-gray-500">
            {activeType === "konvensional"
              ? "Minimum 10% of Property Price"
              : activeType === "subsidi"
              ? "Minimum Rp 4.000.000 (Government Subsidized Program)"
              : "Minimum 20% of Property Price (Syariah Financing)"}
          </p>
        </div>

        {/* Loan Duration */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Loan Duration
          </label>
          <div className="flex items-center justify-between mb-1 text-sm text-gray-600">
            <span className="hide-print">{activeType === "subsidi" ? "15" : "5"}</span>
            <span className="font-semibold">{loanDuration} year</span>
            <span className="hide-print">20</span>
          </div>
          <input
            type="range"
            aria-label="Loan Duration in years"
            min={activeType === "subsidi" ? 15 : 5}
            max={20}
            value={loanDuration}
            onChange={(e) =>
              setFieldValue("loanDuration", Number(e.target.value))
            }
            className="w-full hide-print"
          />
        </div>

        {/* Interest Types */}
        <div className="hide-print">
          <label className="block text-gray-700 mb-1 font-medium">
            Interest Type
          </label>
          <select
            name="interestRate"
            value={interestRate}
            onChange={(e) =>
              setFieldValue("interestRate", parseFloat(e.target.value))
            }
            disabled={activeType === "subsidi" || activeType === "syariah"}
            className={`w-full px-4 py-2 border 
                  rounded-md focus:outline-none focus:ring focus:ring-blue-200
                  ${
                    (activeType === "subsidi" || activeType === "syariah") &&
                    "opacity-45"
                  }`}
          >
            {activeType === "syariah" && (
              <option value={0}>No interest (0%)</option>
            )}
            <option value={0.05}>Fixed Estimate (5%)</option>
            <option value={0.07}>Floating Rate (7%)</option>
            <option value={0.1}>High Risk (10%)</option>
          </select>
          {activeType === "subsidi" && (
            <p className="text-xs text-gray-500 mt-1">
              Fixed government rate of 5% applied
            </p>
          )}
        </div>

        {/* Note */}
        <p className="text-xs sm:text-sm text-gray-500">
          Please note that the calculation provided is for estimation purposes
          only and may not reflect the final terms of your mortgage
        </p>
      </div>
    </>
  );
};

export default Calculator;
