import React from "react";
import Step from "./Step.jsx";

const Steps = ({ step, setStep }) => {
  const steps = ["Address", "Summary", "Payment"];
  return (
    <div className="flex justify-center">
      <div className="flex justify-between p-4 mx-4 lg:max-w-[50vw]">
        {steps.map((stepText, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            stepText={stepText}
            step={step}
            setStep={setStep}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
