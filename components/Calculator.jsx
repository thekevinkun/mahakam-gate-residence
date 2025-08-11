import { useEffect } from "react";

import { formatToIDR, unformatIDR, parseNumber, formatNumber } from "@/utilities/helpers";
import { mortgageTypes } from "@/utilities/constant";

const Calculator = ({ activeType, setActiveType, price, downPayment, loanDuration, interestRate, setFieldValue }) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (downPayment < price * 0.1) {
        setFieldValue("downPayment", price * 0.1);
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [downPayment]);
  
  return (
    <>
      {/* mortgage types */}
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

                    const minDownPayment = Math.floor(raw * 0.1);
                    setFieldValue("downPayment", minDownPayment);
                }
              }}
              placeholder="0"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <span className="text-gray-600 font-semibold">Rp</span>
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <span className="text-gray-600 font-semibold">Rp</span>
          </div>
          <p className="text-xs text-gray-500">Minimum 10% of Property Price</p>
        </div>

        {/* Loan Duration */}
        <div>
          <label className="block text-gray-700 mb-1 font-medium">
            Loan Duration
          </label>
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
            onChange={(e) => setFieldValue("loanDuration", Number(e.target.value))}
            className="w-full"
          />
        </div>
        
        {/* Interest Types */}
        <div>
            <label className="block text-gray-700 mb-1 font-medium">
                Interest Type
            </label>
            <select
                name="interestRate"
                value={interestRate}
                onChange={(e) => setFieldValue("interestRate", parseFloat(e.target.value))}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            >
                <option value={0.05}>Fixed Estimate (5%)</option>
                <option value={0.07}>Floating Rate (7%)</option>
                <option value={0.1}>High Risk (10%)</option>
            </select>
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
