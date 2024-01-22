import { ILStep1, ILStep2, ILStep3, ILStepLine } from "@/assets";
import { StepDetails } from "@/components";
import { StepDetail } from "@/components/molecules/StepDetails";
import React from "react";

const Steps = () => {
  const steps: StepDetail[] = [
    {
      id: 1,
      image: <ILStep1 />,
      title: "Sign Up",
      description: (
        <>
          Sign Up account and start <br />
          funding project
        </>
      ),
    },
    {
      id: 2,
      image: <ILStep2 />,
      title: "Open Project",
      classStep: "-mt-24",
      description: (
        <>
          Choose some project idea, <br />
          and start funding
        </>
      ),
    },
    {
      id: 3,
      image: <ILStep3 />,
      title: "Execute",
      classStep: "-mt-48",
      description: (
        <>
          Time to makes dream <br />
          comes true
        </>
      ),
    },
  ];
  return (
    <section className="container mx-auto pt-24 px-10">
      <div className="flex justify-between items-center mb-10">
        <div className="w-auto">
          <h2 className="text-3xl text-gray-900 mb-8">
            Only 3 steps to execute <br />
            your bright ideas
          </h2>
        </div>
      </div>
      <div className="flex">
        <div className="w-full px-56 mb-5">
          <div className="w-full">
            <ILStepLine />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-center">
        {steps.map((step) => (
          <div className="w-1/3" key={step.id}>
            <StepDetails
              image={step.image}
              title={step.title}
              description={step.description}
              classStep={step.classStep}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
