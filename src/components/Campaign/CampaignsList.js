import React, { useState } from "react";
import { SearchIcon, PencilIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import { Switch } from "@headlessui/react";

const dummyCampaigns = [
  {
    id: 1,
    on: false,
    date: "25 Jul 2020 - 01 Aug 2020",
    name: "Blueberry Cake Campaign",
    image: "/campaigns/photo1.png",
    createdAt: "14 July",
    clicks: 300,
    budget: 3400,
    location: "Chennai",
    platform: "/campaigns/facebook-logo.svg",
    status: "Live Now",
    platform_name: "Facebook"
  },
  {
    id: 2,
    on: false,
    date: "25 Jul 2020 - 01 Aug 2020",
    name: "Chocolate Cake Campaign",
    image: "/campaigns/photo2.png",
    createdAt: "20 Jan",
    clicks: 210,
    budget: 3400,
    location: "Coimbatore",
    platform: "/campaigns/facebook-logo.svg",
    status: "Paused",
    platform_name: "Facebook"
  },
  {
    id: 3,
    on: false,
    date: "25 Jul 2020 - 01 Aug 2020",
    name: "Brownie Cake Campaign",
    image: "/campaigns/photo3.png",
    createdAt: "12 Jun",
    clicks: 123,
    budget: 3400,
    location: "Erode",
    platform: "/campaigns/facebook-logo.svg",
    status: "Exhausted",
    platform_name: "Facebook"
  },
  {
    id: 4,
    on: false,
    date: "25 Jul 2020 - 01 Aug 2020",
    name: "Pumpkin Cake Campaign",
    image: "/campaigns/photo4.png",
    createdAt: "28 Feb",
    clicks: 435,
    budget: 3400,
    location: "Coimbatore",
    platform: "/campaigns/youtube-logo.svg",
    status: "Live Now",
    platform_name: "Youtube"
  },
  {
    id: 5,
    on: false,
    date: "25 Jul 2020 - 01 Aug 2020",
    name: "Cup Cake Campaign",
    image: "/campaigns/photo5.png",
    createdAt: "10 Jul",
    clicks: 123,
    budget: 3400,
    location: "Coimbatore",
    platform: "/campaigns/google-logo.svg",
    status: "Live Now",
    platform_name: "Google"
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class CampaignsList extends React.Component {
  state = {
    campaigns: dummyCampaigns,
    isCheckAll: false,
    isCheck: [],
    selectedPlatform: "All Platforms",
    selectedStatus: "All Status"
  }

  handleSelectAll = () => {
    var temp = this.state.isCheckAll
    this.setState({ isCheckAll: !temp })

    this.setState({ isCheck: this.state.campaigns.map((li) => li.id) })
    if (this.state.isCheckAll) {
      this.setState({ isCheck: [] })
    }
  };

  handleClick = (id, checked) => {
    this.setState({ isCheck: [...this.state.isCheck, id] })

    if (!checked) {
      this.setState({ isCheck: this.state.isCheck.filter((item) => item !== id) })
    }
  };

  deleteItem = (idx) => {
    var temp = this.state.campaigns
    temp.splice(idx, 1)

    this.setState({ campaigns: temp })
  };

  render() {
    var filtered = this.state.campaigns.filter((item)=>{
      if(this.state.selectedPlatform === "All Platforms" && this.state.selectedStatus === "All Status"){
        return item
      }
      else if(this.state.selectedPlatform === "All Platforms"){
        return item.status === this.state.selectedStatus
      }
      else if(this.state.selectedStatus === "All Status"){
        return item.platform_name === this.state.selectedPlatform
      }
      return item.platform_name === this.state.selectedPlatform && item.status === this.state.selectedStatus
    })
    return (
      <div className="flex flex-col shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
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
                  onChange={(e)=>{this.setState({selectedPlatform:e.target.value})}}
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
                  onChange={(e)=>{this.setState({selectedStatus:e.target.value})}}
                >
                  <option>All Status</option>
                  <option>Live Now</option>
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
          <div className="overflow-auto max-h-[30rem]">
            <table className="min-w-full divide-y divide-gray-600">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="pl-1 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <input
                      id="check"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      onChange={this.handleSelectAll}
                      checked={this.state.isCheckAll}
                    />
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    On/Off
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Campaign
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date Range
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Clicks
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Budget
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Location
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Platform
                  </th>
                  <th scope="col" className="py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="py-3.5 text-center text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                  {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filtered.map((campaign, idx) => (
                  <tr key={idx}>
                    <td className="whitespace-nowrap pl-1 py-4 text-sm text-gray-500">
                      <input
                        id="check"
                        name="check"
                        type="checkbox"
                        onChange={(e) => this.handleClick(campaign.id, e.target.checked)}
                        checked={this.state.isCheck.includes(campaign.id)}
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </td>
                    <td className="whitespace-nowrap pl-6 pt-2 text-sm text-gray-500">
                      <Switch
                        checked={campaign.on}
                        onChange={() => {
                          const newCampaigns = [...this.state.campaigns];
                          newCampaigns[idx].on = !newCampaigns[idx].on;
                          this.setState({campaigns:newCampaigns});
                        }}
                        className={classNames(
                          campaign.on ? "bg-blue-600" : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            campaign.on ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm">
                      <div className="flex items-center">
                        <img className="h-10 w-auto" src={campaign.image} alt="" />
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{campaign.name}</div>
                          <div className="text-gray-500">Created At {campaign.createdAt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm">{campaign.date}</td>
                    <td className="whitespace-nowrap py-4 text-sm">{campaign.clicks}</td>
                    <td className="whitespace-nowrap py-4 text-sm">INR {campaign.budget}</td>
                    <td className="whitespace-nowrap py-4 text-sm">{campaign.location}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
                      <img src={campaign.platform} alt="" />
                    </td>
                    <td className="whitespace-nowrap py-4 text-sm text-gray-500">
                      <span
                        className={classNames(
                          campaign.status === "Live Now"
                            ? "bg-green-100 text-green-800"
                            : campaign.status === "Paused"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-orange-600",
                          "inline-flex rounded-full  px-4 py-1 text-xs font-semibold leading-5 "
                        )}
                      >
                        {campaign.status}
                      </span>
                    </td>
                    <td className="relative flex justify-around whitespace-nowrap pt-5 text-sm font-medium">
                      <button className="bg-transparent text-blue-600 hover:text-blue-900">
                        <PencilIcon className="cursor-pointer bg-blue text-blue-600 hover:text-blue-900 w-5 h-5" />
                      </button>
                      <TrashIcon onClick={() => { this.deleteItem(idx) }} className="cursor-pointer bg-red text-red-600 hover:text-red-900 w-5 h-5" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* </div> */}
      </div>
    )
  }

};

export default CampaignsList;
