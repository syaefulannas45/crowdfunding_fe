import { DUProjectImg } from "@/assets";
import { GetStarted, Navbar, ProjectDashboard } from "@/components";
import { getCampaignByUser } from "@/services";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const data = await getCampaignByUser();
  const campaigns = data.data;
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
                  <Link className="text-gray-800 font-bold" href="/dashboard">
                    {" "}
                    Your Projects{" "}
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    className="text-gray-500 hover:text-gray-800"
                    href="/dashboard/transactions"
                  >
                    Your Transactions
                  </Link>
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

          {campaigns.length !== 0 &&
            campaigns.map((campaign: any, index: number) => (
              <div key={index}>
                <ProjectDashboard
                  image={DUProjectImg}
                  title={campaign.name}
                  amount={campaign.goal_amount}
                  progress={80}
                  shortDescription={campaign.short_description}
                />
              </div>
            ))}
        </section>
        <div className="cta-clip -mt-20"></div>
        <GetStarted />
      </div>
    </section>
  );
};

export default DashboardPage;
