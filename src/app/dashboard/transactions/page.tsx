import { GetStarted, Navbar } from "@/components";
import React from "react";

const TransactionDashboardPage = () => {
  return (
    <section className="antialiased">
      <div className="project-page">
        <section className="bg-blue-700 pb-10">
          <Navbar />
        </section>
        <section className="container mx-auto pt-8 px-10">
          <div className="flex justify-between items-center mb-6">
            <div className="w-3/4 mr-6">
              <h2 className="text-4xl text-gray-900 mb-2 font-medium">
                Dashboard
              </h2>
              <ul className="flex mt-2">
                <li className="mr-6">
                  <a
                    className="text-gray-500 hover:text-gray-800"
                    href="/dashboard/index.html"
                  >
                    Your Projects
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    className="text-gray-800 font-bold"
                    href="/dashboard/transactions.html"
                  >
                    Your Transactions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="block mb-2">
            <div className="w-full lg:max-w-full lg:flex mb-4">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundColor: "#bbb" }}
              ></div>
              <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal">
                <div>
                  <div className="text-gray-900 font-bold text-xl mb-1">
                    Cari Uang Buat Gunpla
                  </div>
                  <p className="text-sm text-gray-600 flex items-center mb-2">
                    Rp. 200.000.000 &middot; 12 September 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="cta-clip -mt-20"></div>
        <GetStarted />
      </div>
    </section>
  );
};

export default TransactionDashboardPage;
