import { ListDetailProject } from "@/components";
import React from "react";
import { ProjectDashboardProps } from "../ProjectDashboard";

interface DetailProjectDashboard extends ProjectDashboardProps {
  description?: string;
  perks?: string | string[];
}
const DetailProjectDashboard = ({
  title,
  description,
  perks,
  amount
}: DetailProjectDashboard) => {
  return (
    <div className="block mb-2">
      <div className="w-full lg:max-w-full lg:flex mb-4">
        <div className="border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal">
          <div>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {title}
            </div>
            <p className="text-sm font-bold flex items-center mb-1">
              Description
            </p>
            <p className="text-gray-700 text-base">
              {description}
            </p>

            <p className="text-sm font-bold flex items-center mb-1 mt-4">
              What Will Funders Get
            </p>
            <ListDetailProject list="Equity of the startup directly from the founder" />
            <ListDetailProject list="Special service or product that startup has" />
            <ListDetailProject list="You can also sell your equity once the startup going IPO" />
            <ListDetailProject list={perks} />
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
