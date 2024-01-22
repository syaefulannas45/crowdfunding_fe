import {
  ICLogo,
  ICTestiLine,
  ICTestimonial1,
  ICTestimonial2,
  ICTestimonial3,
  ILHero2x,
} from "@/assets";
import { GetStarted, Project, Steps, Testimonial } from "@/components";
import Image from "next/image";

const Home = () => {
  return (
    <main className="antiliased ">
      <section className="landing-hero pt-5 px-10">
        <div className="header__bg"></div>
        <div className="container mx-auto relative">
          <header className="flex items-center">
            <div style={{ height: 54 }} className="pr-5 h-full">
              <ICLogo />
            </div>
            <ul className="flex items-center">
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/projects.html"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/features.html"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/story.html"
                >
                  Success Stories
                </a>
              </li>
            </ul>
            <ul className="flex ml-auto items-center mt-2">
              <li>
                <a
                  href="/register.html"
                  className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/login.html"
                  className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
                >
                  My Account
                </a>
              </li>
            </ul>
          </header>
          <div className="flex items-center pt-10 px-5 md:px-0">
            <div className="w-1/2">
              <h1 className="text-4xl text-white mb-5">
                We helps <u className="hero-underline">startup</u> to <br />
                getting started & <u className="hero-underline">funding</u>{" "}
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
  );
};
export default Home;
