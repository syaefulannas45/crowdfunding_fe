import {
  DUProjectImg,
  DUProjectImg1,
  DUProjectImg2,
  DUProjectImg3,
  DUProjectImg4,
} from "@/assets";
import { ImageCard } from "@/components";
import Image from "next/image";
import React from "react";

const ProjectSlider = () => {
  return (
    <div className="w-3/4 mr-6">
      <div className="bg-white p-3 mb-3 border border-gray-400 rounded-20">
        <figure className="item-image">
          <Image src={DUProjectImg} alt="" className="rounded-20 w-full" />
        </figure>
      </div>
      <div className="flex -mx-2">
        <ImageCard image={DUProjectImg1} />
        <ImageCard image={DUProjectImg2} />
        <ImageCard image={DUProjectImg3} />
        <ImageCard image={DUProjectImg4} />
      </div>
    </div>
  );
};

export default ProjectSlider;
