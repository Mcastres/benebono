import React, { useState } from "react";
import { useRouter } from "next/navigation";

import fetchContentType from "../../../src/lib/Strapi/fetchContentType";

import User from "@/components/shared/User";
import Basket from "@/components/shared/Basket";
import Success from "@/components/shared/Success";

const Checkout = ({ baskets, initialStep }) => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(initialStep);
  const [stepHistory, setStepHistory] = useState([initialStep]);

  const goToNextStep = () => {
    let nextStep;
    if (currentStep === "user") {
      nextStep = stepHistory.includes("basket") ? "success" : "basket";
    } else if (currentStep === "basket") {
      nextStep = stepHistory.includes("user") ? "success" : "user";
    }
    if (nextStep) {
      setCurrentStep(nextStep);
      setStepHistory([...stepHistory, nextStep]);
    }
    router.replace(`/checkout/${nextStep}`);
  };

  const goToPreviousStep = () => {
    const newHistory = [...stepHistory];
    newHistory.pop();
    const previousStep = newHistory[newHistory.length - 1];

    if (previousStep) {
      setCurrentStep(previousStep);
      setStepHistory(newHistory);
      router.replace(`/checkout/${previousStep}`);
    } else {
      router.push("/");
    }
  };

  switch (currentStep) {
    case "user":
      return <User onNext={goToNextStep} onPrevious={goToPreviousStep} />;
    case "basket":
      return (
        <Basket
          baskets={baskets}
          onNext={goToNextStep}
          onPrevious={goToPreviousStep}
        />
      );
    case "success":
      // IDEA: Call Strapi page to increment the conversion number of A/B pages
      return <Success onPrevious={goToPreviousStep} />;
    default:
      return <div>Invalid step</div>;
  }
};

export async function getServerSideProps({ params }) {
  let data = [];
  if (params?.slug === "basket") {
    data = await fetchContentType("baskets");
  }

  return {
    props: {
      baskets: data,
      initialStep: params?.slug,
    },
  };
}

export default Checkout;
