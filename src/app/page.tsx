"use client";
import { ILHero2x } from "@/assets";
import { GetStarted, Project, Steps, Testimonial } from "@/components";

import Image from "next/image";

const Home = () => {
  return (
    <>
      <title>Crowdfunding</title>
      <main className="antiliased ">
        <section className="landing-hero pt-5 px-10">
          <div className="header__bg bg-auth-background"></div>
          <div className="container mx-auto relative">
            <div className="flex items-center pt-10 px-5 md:px-0">
              <div className="w-1/2">
                <h1 className="text-4xl text-white mb-5">
                  We helps <u className="hero-underline">startup</u> to <br />
                  getting started & <u className="hero-underline">
                    funding
                  </u>{" "}
                  <br />
                  their truly needs
                </h1>
                <p className="text-white text-xl font-light mb-8">
                  Fund the best idea to become <br />a real product and be the
                  contributor
                </p>
                <button className="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full">
                  Find a Project
                </button>
              </div>
              <div className="w-1/2 flex justify-center">
                <Image src={ILHero2x} alt="crowdfunding project" priority />
              </div>
            </div>
          </div>
        </section>
        <Steps />
        <Project />
        <Testimonial />
        <div className="cta-clip -mt-20"></div>
        <GetStarted />
      </main>
    </>
  );
};
export default Home;
