import React, { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import CampaignsList from "./CampaignsList";
import NewCampaign from "./NewCampaign/NewCampaign";

const Campaign = () => {
  const [addCampaign, setAddCampaign] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{addCampaign === false ? "Your Campaigns" : "Your Ad Campaign"}</h1>
          <span className="text-sm text-gray-500">
            {addCampaign === false ? "Check the list of campaigns you created" : "Launch your Ad in just 4 easy steps"}
          </span>
        </div>
        {addCampaign === false ? (
          <button
            onClick={() => setAddCampaign(!addCampaign)}
            type="button"
            className="flex items-center h-12 px-4 order border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusCircleIcon className="mr-2 h-5 w-5" aria-hidden="true" />
            Create a new Campaign
          </button>
        ) : (
          <button
            onClick={() => setAddCampaign(!addCampaign)}
            type="button"
            className="flex items-center h-12 px-4 order border border-gray-400 rounded-lg shadow-sm text-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            See Campaigns
          </button>
        )}
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">{addCampaign === false ? <CampaignsList /> : <NewCampaign handleCompleteAdding={() => setAddCampaign(!addCampaign)} />}</div>
      </div>
    </>
  );
};

export default Campaign;
