import { DUProjectImg } from "@/assets";
import { GetStarted, Navbar, ProjectDashboard } from "@/components";
import Image from "next/image";
import React from "react";

const DashboardPage = () => {
  return (
    <section className="antialiased">
      <div className="project-page">
        <section className="bg-blue-700 pb-10">
          <Navbar />
        </section>
        <section className="container mx-auto pt-8 px-10">
          <div className="flex justify-between items-center mb-6 w-full">
            <div className="w-3/4 mr-6">
              <h2 className="text-4xl text-gray-900 mb-2 font-medium">
                Dashboard
              </h2>
              <ul className="flex mt-2">
                <li className="mr-6">
                  <a className="text-gray-800 font-bold" href="#">
                    {" "}
                    Your Projects{" "}
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-gray-500 hover:text-gray-800"
                    href="/dashboard/transactions.html"
                  >
                    Your Transactions
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/4 text-right">
              <a
                href="/dashboard/create.html"
                className="bg-orange-button hover:bg-green-button text-white font-bold py-4 px-4 rounded inline-flex items-center"
              >
                + Create Campaign
              </a>
            </div>
          </div>
          <hr />
          <ProjectDashboard
            image={DUProjectImg}
            title="Cari Uang Buat Gunpla"
            amount={"200.000.000"}
            progress={80}
            shortDescription="With N-key rollover (NKRO on wired mode only) you can register as
              many keys as you can press at once without missing out characters.
              It allows to use all the same media keys as conventional macOS."
          />
        </section>
        <div className="cta-clip -mt-20"></div>
        <GetStarted />
      </div>
    </section>
  );
};

export default DashboardPage;
