import { ICTestiLine } from "@/assets";
import { TestimonialItem } from "@/components";
import React from "react";

const Testimonial = () => {
  return (
    <section className="container mx-auto pt-24 px-10">
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-3xl text-gray-900 mb-8">
            See What Our <br />
            Happy Clients Say
          </h2>
        </div>
      </div>
      <div className="flex mb-10">
        <div className="w-2/12 flex justify-center items-start">
          <ICTestiLine />
        </div>
        <TestimonialItem
          commentar="“Funding at Bucker is very easy and comfortable. Just need to find an
        idea, click and already funding.”"
          nameUser="Shopie Nicole"
          job="Project Manager"
        />
        <div className="w-2/12"></div>
      </div>
    </section>
  );
};

export default Testimonial;
