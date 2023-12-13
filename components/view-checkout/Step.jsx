// Steps.js
import React from "react";

const Step = ({ stepNumber, stepText, step, setStep }) => {
  return (
    <div className="text-left">
      <div className="flex items-center" onClick={() => setStep(stepNumber)}>
        <h4
          className={`border-2 ${
            step >= stepNumber ? "border-green-600" : "border-slate-500"
          } border-dashed rounded-full py-6 px-8 font-bold`}
        >
          {stepNumber}
        </h4>
        <span
          className={`border-2 ${
            step >= stepNumber ? "border-green-600" : "border-slate-500"
          } w-[17vw] h-0 ${stepNumber === 3 && "hidden"}`}
        />
      </div>
      <h3 className={`py-2 font-bold ${
        step >= stepNumber ? "text-green-600" : "text-slate-500"
      }`}>{stepText}</h3>
    </div>
  );
};

export default Step;
