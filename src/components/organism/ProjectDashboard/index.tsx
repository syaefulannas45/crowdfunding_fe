import { DUProjectImg } from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ProjectDashboardProps {
  image?: string | StaticImport;
  title?: string;
  amount?: number | string;
  progress?: number | string;
  shortDescription?: string;
}
const ProjectDashboard = ({
  image,
  title,
  progress,
  shortDescription,
  amount,
}: ProjectDashboardProps) => {
  return (
    <div className="mb-2">
      <div className="w-full lg:max-w-full lg:flex mb-4 h-[250px] border-t-2 border-2 space-x-4 py-2">
        <div className="w-[30%] flex justify-start">
          <Image
            className="h-full lg:h-full lg:w-full object-contain"
            src={image!}
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-1">{title}</div>
            <p className="text-sm text-gray-600 flex items-center mb-2">
              Rp. {amount} &middot; {progress}%
            </p>
            <p className="text-gray-700 text-base">{shortDescription}</p>
          </div>
          <div className="flex items-center">
            <Link
              href="/dashboard/detail"
              className="bg-green-button text-white py-2 px-4 rounded"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
