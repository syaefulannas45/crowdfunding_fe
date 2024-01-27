import { ListDetailProject } from "@/components";
import React from "react";
import { ProjectDashboardProps } from "../ProjectDashboard";

interface DetailProjectDashboard extends ProjectDashboardProps {
  description?: string;
  perks?: string[];
}
const DetailProjectDashboard = ({
  title,
  description,
  perks,
  amount,
}: DetailProjectDashboard) => {
  return (
    <div className="mb-2 w-full">
      <div className="w-full lg:max-w-full lg:flex mb-4">
        <div className="border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal w-full">
          <div>
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-sm font-bold flex items-center mb-1">
              Description
            </p>
            <p className="text-gray-700 text-base">{description}</p>

            <p className="text-sm font-bold flex items-center mb-1 mt-4">
              What Will Funders Get
            </p>
            {perks?.map((perk, i) => (
              <ListDetailProject key={i} list={perk} />
            ))}
            <p className="text-sm font-bold flex items-center mb-1 mt-4">
              Price
            </p>
            <p className=" text-gray-700 text-base">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProjectDashboard;
