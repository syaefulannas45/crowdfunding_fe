import React from "react";

export interface StepDetail {
  id?: number;
  image?: React.ReactNode;
  title?: string;
  description?: React.ReactNode;
  classStep?: string;
}
const StepDetails = ({ image, title, description, classStep }: StepDetail) => {
  return (
    <>
      <figure className={`flex justify-center items-center ${classStep}`}>
        <div className="h-30 mb-8">{image}</div>
      </figure>
      <div className="step-content">
        <h3 className="font-medium">{title}</h3>
        <p className="font-light">{description}</p>
      </div>
    </>
  );
};

export default StepDetails;
