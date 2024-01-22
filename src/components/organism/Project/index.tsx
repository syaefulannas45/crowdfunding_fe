import {
  DUProjectThumb1,
  DUProjectThumb2,
  DUProjectThumb3,
} from "@/assets/dummy";
import { ProjectCard } from "@/components";
import React from "react";

const Project = () => {
  return (
    <section className="container mx-auto pt-24 px-10">
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-3xl text-gray-900 mb-8">
            New projects you can <br />
            taken care of
          </h2>
        </div>
        <div className="w-auto mt-5">
          <a
            className="text-gray-900 hover:underline text-md font-medium"
            href=""
          >
            View All
          </a>
        </div>
      </div>
      <div className="flex mt-3 justify-between flex-wrap">
        <ProjectCard
          image={DUProjectThumb1}
          title="Robotic Hand"
          shortDesc="Creating robotic hand for better movement"
          progressBar="20%"
          progressVal="20%"
          nominal="100.000.000"
        />
        <ProjectCard
          image={DUProjectThumb2}
          title="Auto Pilot Drone"
          shortDesc="Self driving drone, no worry to drive again"
          progressBar="45%"
          progressVal="45%"
          nominal="80.000.000"
        />
        <ProjectCard
          image={DUProjectThumb3}
          title="Wireboard"
          shortDesc="The new era of mechanical keyboard"
          progressBar="80%"
          progressVal="30%"
          nominal="40.000.000"
        />
        <ProjectCard
          image={DUProjectThumb1}
          title="Robotic Hand"
          shortDesc="Creating robotic hand for better movement"
          progressBar="20%"
          progressVal="20%"
          nominal="100.000.000"
        />
        <ProjectCard
          image={DUProjectThumb2}
          title="Auto Pilot Drone"
          shortDesc="Self driving drone, no worry to drive again"
          progressBar="45%"
          progressVal="45%"
          nominal="80.000.000"
        />
        <ProjectCard
          image={DUProjectThumb3}
          title="Wireboard"
          shortDesc="The new era of mechanical keyboard"
          progressBar="80%"
          progressVal="30%"
          nominal="40.000.000"
        />
      </div>
    </section>
  );
};

export default Project;
