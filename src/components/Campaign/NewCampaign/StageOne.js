import { useState } from "react";

const campaigns = [
  {
    id: 1,
    name: "Get Leads as Calls",
    desc: "Reach Broad Audience and get leads through calls",
    iconBefore: "/campaigns/call-gray.png",
    iconAfter: "/campaigns/call-selected.png",
  },
  {
    id: 2,
    name: "Get Leads as Facebook messages",
    desc: "Get more FB messages from Leads",
    iconBefore: "/campaigns/message-gray.png",
    iconAfter: "/campaigns/message-selected.png",
  },
  {
    id: 3,
    name: "Increase Page Followers",
    desc: "Encourage customers to follow your page",
    iconBefore: "/campaigns/person-gray.png",
    iconAfter: "/campaigns/person-selected.png",
  },
  {
    id: 4,
    name: "Get Customer Leads",
    desc: "Encourage customers to take action",
    iconBefore: "/campaigns/people-gray.png",
    iconAfter: "/campaigns/people-selected.png",
  },
  {
    id: 5,
    name: "Get more youtube views",
    desc: "Increase organic views by obtaining user attention",
    iconBefore: "/campaigns/view-gray.png",
    iconAfter: "/campaigns/view-selected.png",
  },
  {
    id: 6,
    name: "Get more website traffic",
    desc: "Get the right people to visit your website",
    iconBefore: "/campaigns/clicks-gray.png",
    iconAfter: "/campaigns/clicks-selected.png",
  },
  {
    id: 7,
    name: "Increase Live store traffic",
    desc: "Drive visits to local stores, restuarants & Dealerships",
    iconBefore: "/campaigns/store-gray.png",
    iconAfter: "/campaigns/store-selected.png",
  },
  {
    id: 8,
    name: "Increase your App installs",
    desc: "Get more installs interactions for your app",
    iconBefore: "/campaigns/phone-gray.png",
    iconAfter: "/campaigns/phone-selected.png",
  },
  {
    id: 9,
    name: "Increase the catalogue sales",
    desc: "Drive the sales of your catalogue and get more leads",
    iconBefore: "/campaigns/board-gray.png",
    iconAfter: "/campaigns/board-selected.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StageOne = ({ handleSetStage }) => {
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);

  const handleSelectedCampaigns = (campaign) => {
    let temp = [...selectedCampaigns];
    if (temp.includes(campaign.id)) {
      temp = temp.filter((item) => item !== campaign.id);
      setSelectedCampaigns(temp);
    } else {
      temp.push(campaign.id);
      setSelectedCampaigns(temp);
    }
  };

  return (
    <>
      <div className="flex flex-col shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white mt-5">
        <div className="inline-block min-w-full py-2 align-middle md:px-3 overflow-x-auto">
          <div className="flex items-center mb-3">
            <h2 className="font-semibold ">What you want to do?</h2>
            <span className="text-sm text-gray-400 ml-5">(Step 1 of 4)</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t py-5">
            {campaigns.map((campaign, idx) => (
              <div
                key={idx}
                onClick={() => {
                  handleSelectedCampaigns(campaign);
                }}
                className={classNames(
                  selectedCampaigns.includes(campaign.id) ? "ring-2 ring-offset-2 ring-blue-500 hover:border-gray-400" : "",
                  "relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3"
                )}
              >
                <div className="flex-shrink-0">
                  {selectedCampaigns.includes(campaign.id) ? (
                    <img className="h-5 w-5" src={campaign.iconAfter} alt="" />
                  ) : (
                    <img className="h-5 w-5" src={campaign.iconBefore} alt="" />
                  )}
                </div>
                <div className="flex-1">
                  <button className="focus:outline-none flex flex-col">
                    <p className="text-sm font-medium text-gray-900">{campaign.name}</p>
                    <p className="text-xs text-gray-500 truncate">{campaign.desc}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => handleSetStage()}
          type="button"
          className="py-2 px-8 order border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default StageOne;
