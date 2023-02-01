import React from "react";

import { PencilAltIcon, PhotographIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

const StageFour = ({ handleSetStage }) => {
  return (
    <>
      <div className="flex flex-col shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white mt-5">
        <div className="inline-block min-w-full py-2 align-middle md:px-3 overflow-x-auto">
          <div className="flex items-center mb-3">
            <h2 className="font-semibold ">Ready to go</h2>
            <span className="text-sm text-gray-400 ml-5">(Step 4 of 4)</span>
          </div>
          <div className="min-w-full border-t py-5">
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {people.map((person) => (
                <li key={person.email} className="col-span-1 bg-white shadow divide-y divide-gray-200">
                  <button className="cursor:pointer hover:border-gray-400 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <div className="w-full flex items-center p-3 space-x-6 border-b">
                      <img className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src={person.imageUrl} alt="" />
                      <div className="flex-1 flex flex-col items-start truncate">
                        <h3 className="text-blue-800 text-lg font-bold truncate">{person.name}</h3>
                        <p className="text-gray-500 text-sm truncate">Sponsored</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col p-2">
                      <span className="text-justify mb-2">
                        We are the best bakery around you. Please like my page to get updates on existing offers and discounts.
                      </span>
                      <img src="/campaigns/campaignPhoto2.png" />
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                          <button className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                            <PhotographIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">Change Photo</span>
                          </button>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                          <button className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                            <PencilAltIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                            <span className="ml-3">Change Text</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleSetStage()}
        type="button"
        className="ml-[75vw] mt-5 py-2 px-8 order border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Start Campaign
      </button>
    </>
  );
};

export default StageFour;
