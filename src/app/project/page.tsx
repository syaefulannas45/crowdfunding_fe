import { ICTestimonial1 } from "@/assets";
import {
  DetailProjectCard,
  GetStarted,
  Navbar,
  ProjectSlider,
} from "@/components";
import Image from "next/image";
import React from "react";

const ProjectDetailPage = () => {
  return (
    <div className="antialiased">
      <div className="project-page">
        <section className="project-header">
          <div className="relative">
            <Navbar />
          </div>
        </section>
        <section className="container project-container mx-auto -mt-56 px-10">
          <div className="flex mt-3">
            <ProjectSlider />
            <DetailProjectCard
              imageUser={ICTestimonial1}
              nameUser="Julia Keeva"
              backer="2000"
            />
          </div>
        </section>
        <section className="container mx-auto pt-8 px-10">
          <div className="flex justify-between items-center">
            <div className="w-full md:w-3/4 mr-6">
              <h2 className="text-4xl text-gray-900 mb-2 font-medium">
                Wireboard Fortune
              </h2>
              <p className="font-light text-xl mb-5">
                The new era of mechanical keyboard for everyone
              </p>

              <div className="relative progress-bar">
                <div className="overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6">
                  <div
                    style={{ width: "80%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                  ></div>
                </div>
              </div>
              <div className="flex progress-info mb-6">
                <div className="text-2xl">80%</div>
                <div className="ml-auto font-semibold text-2xl">
                  Rp 40.000.000
                </div>
              </div>

              <p className="font-light text-xl mb-5">
                Designed to fit your dedicated typing experience. No matter what
                you like, linear, clicky or a little in between, we’ve got you
                covered with three Gateron switches options (Blue, Brown, Red).
                With a lifespan of 50 million keystroke lifespan we want to make
                sure that you experience same feedback for every keystroke.
              </p>
              <p className="font-light text-xl mb-5">
                With N-key rollover (NKRO on wired mode only) you can register
                as many keys as you can press at once without missing out
                characters. It allows to use all the same media keys as
                conventional macOS.
              </p>
              <p className="font-light text-xl mb-5">
                This keyboard can last up to 72 hours typing, or up to 9 days of
                normal use (8 hrs/day) with a 4000 mAh big battery.
              </p>
            </div>
            <div className="w-1/4 hidden md:block"></div>
          </div>
        </section>
      </div>
      <div className="cta-clip -mt-20" />
      <GetStarted />
    </div>
  );
};

export default ProjectDetailPage;
