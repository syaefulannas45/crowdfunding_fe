import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { ListDetailProject } from "..";
import { Input } from "@/components";

interface DetailProjectProps {
  nameUser?: string;
  imageUser?: string | StaticImport;
  backer?: string;
}
const DetailProjectCard = ({
  imageUser,
  nameUser,
  backer,
}: DetailProjectProps) => {
  return (
    <div className="w-1/4">
      <div
        className="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
        style={{ top: 15 }}
      >
        <h3>Project Leader:</h3>

        <div className="flex mt-3">
          <div className="w-1/4">
            <Image
              src={imageUser!}
              alt=""
              className="w-full inline-block rounded-full"
            />
          </div>
          <div className="w-3/4 ml-5 mt-1">
            <div className="font-semibold text-xl text-gray-800">
              {nameUser}
            </div>
            <div className="font-light text-md text-gray-400">
              {backer} backer
            </div>
          </div>
        </div>

        <h4 className="mt-5 font-semibold">What will you get:</h4>
        <ListDetailProject list="Equity of the startup directly from the founder" />
        <ListDetailProject list="Special service or product that startup has" />
        <ListDetailProject list="You can also sell your equity once the startup going IPO" />

        <Input
          type="number"
          placeholder="Amount in Rp"
          className="border-2 focus:bg-white focus:text-black"
        />
        <a
          href="/fund-success.html"
          className="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
        >
          Fund Now
        </a>
      </div>
    </div>
  );
};

export default DetailProjectCard;
