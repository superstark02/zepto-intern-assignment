import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const CampaignsList = () => {
  return (
    <div className="flex flex-col shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      {/* <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 p-3"> */}
      <div className="inline-block min-w-full py-2 align-middle md:px-3 overflow-x-auto ">
        <div className="my-4 w-full flex justify-between items-center">
          <div className="w-1/4 rounded-lg border">
            <div className="w-full flex items-center pl-2 text-gray-400 focus-within:text-gray-600">
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
              <input
                id="search-field"
                className="block w-full h-full pl-2 pr-3 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search for the campaign"
                type="search"
                name="search"
              />
            </div>
          </div>
          <div className="flex w-3/4 justify-end">
            <div className="flex items-center ml-2">
              <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mr-1">
                Platform
              </label>
              <select
                id="platform"
                name="platform"
                className="block w-full pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="All Platform"
              >
                <option>All Platform</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Youtube</option>
              </select>
            </div>
            <div className="flex items-center ml-4">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mr-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="block w-full pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="All Status"
              >
                <option>All Status</option>
                <option>Live</option>
                <option>Paused</option>
                <option>Exhausted</option>
              </select>
            </div>
            <div className="flex items-center ml-4">
              <select
                id="duration"
                name="duration"
                className="block w-full pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                defaultValue="Last 30 days"
              >
                <option>Last 30 days</option>
                <option>Last 1 week</option>
                <option>Last 24 hours</option>
                <option>Last hour</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-auto max-h-80">
          <table className="min-w-full divide-y divide-gray-600">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Title
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Role
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {people.map((person) => (
                <tr key={person.email}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{person.name}</div>
                        <div className="text-gray-500">{person.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">{person.title}</div>
                    <div className="text-gray-500">{person.department}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Active</span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CampaignsList;
