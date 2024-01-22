import { ICTestimonial1, ICTestimonial2, ICTestimonial3 } from "@/assets";
import Image from "next/image";
import React from "react";

interface TestimonialItemProps {
  commentar?: string;
  nameUser?: string;
  job?: string;
}
const TestimonialItem = ({
  commentar,
  nameUser,
  job,
}: TestimonialItemProps) => {
  return (
    <div className="w-8/12 mt-16">
      <h2 className="text-3xl text-gray-900 font-light w-[80%]">{commentar}</h2>
      <div className="testimonial-info mt-8">
        <div className="name text-xl font-semibold">{nameUser}</div>
        <div className="title text-xl font-light text-gray-400">{job}</div>
      </div>
      <div className="testimonial-icon mt-10">
        <Image
          src={ICTestimonial1}
          alt=""
          className="w-20 mr-5 inline-block testimonial-user rounded-full"
        />
        <Image
          src={ICTestimonial2}
          alt=""
          className="w-20 mr-5 inline-block testimonial-user rounded-full"
        />
        <Image
          src={ICTestimonial3}
          alt=""
          className="w-20 mr-5 inline-block testimonial-user active rounded-full"
        />
      </div>
    </div>
  );
};

export default TestimonialItem;
