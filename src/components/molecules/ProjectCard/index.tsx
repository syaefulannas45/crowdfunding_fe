import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title?: string;
  shortDesc?: string;
  progressBar?: string | number;
  progressVal?: string | number;
  nominal?: string | number;
  image?: string | StaticImport;
}
const ProjectCard = ({
  title,
  shortDesc,
  progressBar,
  progressVal,
  nominal,
  image,
}: ProjectCardProps) => {
  return (
    <div className="card-project w-[29%] mx-6 my-4 p-5 border border-gray-500 rounded-20 pb-5">
      <div className="item">
        <figure className="item-image">
          <Image src={image!} alt="" className="rounded-20 w-full" />
        </figure>
        <div className="item-meta">
          <h4 className="text-3xl font-medium text-gray-900 mt-5">{title}</h4>
          <p className="text-md font-light text-gray-900">{shortDesc}</p>
          <div className="relative pt-4 progress-bar">
            <div className="overflow-hidden mb-4 text-xs flex  bg-gray-200 h-3 rounded-lg">
              <div
                style={{ width: progressBar }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
              ></div>
            </div>
          </div>
          <div className="flex progress-info">
            <div>{progressVal}</div>
            <div className="ml-auto font-semibold">Rp {nominal}</div>
          </div>
        </div>
        <a
          href="/projects.html"
          className="text-center mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
        >
          Fund Now
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
