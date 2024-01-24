import { GetStarted, InputProject, Navbar } from "@/components";
import React from "react";

const CreateProjectPage = () => {
  return (
    <section className="antialiased">
      <div className="project-page">
        <section className="bg-blue-700 pb-10">
          <Navbar />
        </section>
        <section className="container mx-auto pt-8 px-10">
          <div className="flex justify-between items-center">
            <div className="w-full mr-6">
              <h2 className="text-4xl text-gray-900 mb-2 font-medium">
                Dashboard
              </h2>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-3/4 mr-6">
              <h3 className="text-2xl text-gray-900 mb-4">
                Create New Projects
              </h3>
            </div>
            <div className="w-1/4 text-right">
              <a
                href="/dashboard/detail.html"
                className="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
              >
                Save
              </a>
            </div>
          </div>
          <div className="block mb-2">
            <div className="w-full lg:max-w-full lg:flex mb-4">
              <div className="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal">
                <form className="w-full">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <InputProject
                        placeholder="Contoh: Demi Gunpla Demi Istri"
                        label="Campaign Name"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-1">
                      <InputProject
                        placeholder="Contoh 200.000"
                        label="Price"
                      />
                    </div>
                    <div className="w-full px-3 mb-1">
                      <InputProject
                        placeholder="Deskripsi singkat mengenai projectmu"
                        label="Short Description"
                      />
                    </div>
                    <div className="w-full px-3 mb-1">
                      <InputProject
                        label="What will backer get"
                        placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                      />
                    </div>
                    <div className="w-full px-3 mb-1">
                     
                      <InputProject
                        label="Description"
                        placeholder="Isi deskripsi panjang untuk projectmu"
                        className="h-[150px]"
                      />
                    </div>
                  </div>
                </form>
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

export default CreateProjectPage;
