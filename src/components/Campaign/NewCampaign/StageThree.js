import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const steps = [
  { name: "Create account", description: "Vitae sed mi luctus laoreet.", href: "#", status: "complete" },
  { name: "Create account", description: "Vitae sed mi luctus laoreet.", href: "#", status: "complete" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StageThree = ({ handleSetStage }) => {
  const [lifetimeEnabled, setLifetimeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);

  return (
    <>
      <div className="flex flex-col shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white mt-5">
        <div className="inline-block min-w-full py-2 align-middle md:px-3 overflow-x-auto">
          <div className="flex items-center mb-3">
            <h2 className="font-semibold ">Campaign Settings</h2>
            <span className="text-sm text-gray-400 ml-5">(Step 3 of 4)</span>
          </div>
          <div className="min-w-full border-t py-5">
            <nav aria-label="Progress">
              <ol role="list" className="overflow-hidden">
                {/* {steps.map((step, stepIdx) => ( */}
                <li className="pb-10 relative">
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                  <div className="relative flex items-start group cursor-default">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
                        <span className="text-white" aria-hidden="true">
                          1
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 w-[90%] flex flex-col">
                      <span className="text-sm font-semibold tracking-wide underline">Budget and dates info</span>
                      <div className="flex flex-col w-full">
                        <span className="text-sm font-medium mt-5">Budget Timeline</span>
                        <Switch.Group>
                          <div className="flex items-center mt-2">
                            <Switch.Label className="mr-2 text-xs font-medium text-gray-700">Lifetime</Switch.Label>
                            <Switch
                              checked={lifetimeEnabled}
                              onChange={setLifetimeEnabled}
                              className={`${
                                lifetimeEnabled ? "bg-blue-600" : "bg-orange-600"
                              } relative inline-flex h-6 w-[5rem] items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
                            >
                              <span
                                className={`${
                                  lifetimeEnabled ? "translate-x-[3.7rem]" : "translate-x-1"
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                              />
                            </Switch>
                            <Switch.Label className="ml-2 text-xs font-medium text-gray-700">Daily</Switch.Label>
                          </div>
                        </Switch.Group>
                        <div className="w-[90%] flex my-3">
                          <div className="flex items-center justify-center w-1/3">
                            <div className="datepicker relative form-floating mb-3 w-full">
                              <label htmlFor="floatingInput" className="text-xs font-medium text-gray-700">
                                Start Date
                              </label>
                              <input
                                type="date"
                                className="form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Select a date"
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-1/3 ml-[10%]">
                            <div className="datepicker relative form-floating mb-3 w-full">
                              <label htmlFor="floatingInput" className="text-xs font-medium text-gray-700">
                                End Date
                              </label>
                              <input
                                type="date"
                                className="form-control block w-full py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Select a date"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          {/* slider to show range of currency */}
                          <div className="flex items-center w-full justify-between">
                            <span className="text-xs font-medium text-gray-700">Enter Campaigning Budget</span>
                            <select id="currency" name="currency" default="INR" className="border-transparent py-0 pr-0 text-xs">
                              <option value="INR"> INR</option>
                              <option value="AFN"> AFN</option>
                              <option value="ALL"> ALL</option>
                              <option value="DZD"> DZD</option>
                              <option value="AOA"> AOA</option>
                              <option value="ARS"> ARS</option>
                              <option value="AMD"> AMD</option>
                              <option value="AWG"> AWG</option>
                              <option value="AUD"> AUD</option>
                              <option value="AZN"> AZN</option>
                              <option value="BSD"> BSD</option>
                              <option value="BHD"> BHD</option>
                              <option value="BDT"> BDT</option>
                              <option value="BBD"> BBD</option>
                              <option value="BYR"> BYR</option>
                              <option value="BEF"> BEF</option>
                              <option value="BZD"> BZD</option>
                              <option value="BMD"> BMD</option>
                              <option value="BTN"> BTN</option>
                              <option value="BTC">BTC</option>
                              <option value="BOB"> BOB</option>
                              <option value="BAM">BAM</option>
                              <option value="BWP"> BWP</option>
                              <option value="BRL"> BRL</option>
                              <option value="GBP"> GBPS</option>
                              <option value="BND"> BND</option>
                              <option value="BGN"> BGN</option>
                              <option value="BIF"> BIF</option>
                              <option value="KHR"> KHR</option>
                              <option value="CAD"> CAD</option>
                              <option value="CVE"> CVE</option>
                              <option value="KYD"> KYD</option>
                              <option value="XOF"> XOF</option>
                              <option value="XAF"> XAF</option>
                              <option value="XPF"> XPF</option>
                              <option value="CLP"> CLP</option>
                              <option value="CNY"> CNY</option>
                              <option value="COP"> COP</option>
                              <option value="KMF"> KMF</option>
                              <option value="CDF"> CDF</option>
                              <option value="CRC"> CRC</option>
                              <option value="HRK"> HRK</option>
                              <option value="CUC"> CUCPeso</option>
                              <option value="CZK"> CZK</option>
                              <option value="DKK"> DKK</option>
                              <option value="DJF"> DJF</option>
                              <option value="DOP"> DOP</option>
                              <option value="XCD"> XCD</option>
                              <option value="EGP"> EGP</option>
                              <option value="ERN"> ERN</option>
                              <option value="EEK"> EEK</option>
                              <option value="ETB"> ETB</option>
                              <option value="EUR">EUR</option>
                              <option value="FKP"> FKP</option>
                              <option value="FJD"> FJD</option>
                              <option value="GMD"> GMD</option>
                              <option value="GEL"> GEL</option>
                              <option value="DEM"> DEM</option>
                              <option value="GHS"> GHS</option>
                              <option value="GIP"> GIP</option>
                              <option value="GRD"> GRD</option>
                              <option value="GTQ"> GTQ</option>
                              <option value="GNF"> GNF</option>
                              <option value="GYD"> GYD</option>
                              <option value="HTG"> HTG</option>
                              <option value="HNL"> HNL</option>
                              <option value="HKD"> HKD</option>
                              <option value="HUF"> HUF</option>
                              <option value="ISK"> ISK</option>
                              <option value="IDR"> IDR</option>
                              <option value="IRR"> IRR</option>
                              <option value="IQD"> IQD</option>
                              <option value="ILS"> ILS</option>
                              <option value="ITL"> ITL</option>
                              <option value="JMD"> JMD</option>
                              <option value="JPY"> JPY</option>
                              <option value="JOD"> JOD</option>
                              <option value="KZT"> KZT</option>
                              <option value="KES"> KES</option>
                              <option value="KWD"> KWD</option>
                              <option value="KGS"> KGS</option>
                              <option value="LAK"> LAK</option>
                              <option value="LVL"> LVL</option>
                              <option value="LBP"> LBP</option>
                              <option value="LSL"> LSL</option>
                              <option value="LRD"> LRD</option>
                              <option value="LYD"> LYD</option>
                              <option value="LTL"> LTL</option>
                              <option value="MOP"> MOP</option>
                              <option value="MKD"> MKD</option>
                              <option value="MGA"> MGA</option>
                              <option value="MWK"> MWK</option>
                              <option value="MYR"> MYR</option>
                              <option value="MVR"> MVR</option>
                              <option value="MRO"> MRO</option>
                              <option value="MUR"> MUR</option>
                              <option value="MXN"> MXN</option>
                              <option value="MDL"> MDL</option>
                              <option value="MNT"> MNT</option>
                              <option value="MAD"> MAD</option>
                              <option value="MZM"> MZM</option>
                              <option value="MMK"> MMK</option>
                              <option value="NAD"> NAD</option>
                              <option value="NPR"> NPR</option>
                              <option value="ANG"> ANG</option>
                              <option value="TWD"> TWD</option>
                              <option value="NZD"> NZD</option>
                              <option value="NIO"> NIO</option>
                              <option value="NGN"> NGN</option>
                              <option value="KPW"> KPW</option>
                              <option value="NOK"> NOK</option>
                              <option value="OMR"> OMR</option>
                              <option value="PKR"> PKR</option>
                              <option value="PAB"> PAB</option>
                              <option value="PGK"> PGK</option>
                              <option value="PYG"> PYG</option>
                              <option value="PEN"> PEN</option>
                              <option value="PHP"> PHP</option>
                              <option value="PLN"> PLN</option>
                              <option value="QAR"> QAR</option>
                              <option value="RON"> RON</option>
                              <option value="RUB"> RUB</option>
                              <option value="RWF"> RWF</option>
                              <option value="SVC"> SVC</option>
                              <option value="WST"> WST</option>
                              <option value="SAR"> SAR</option>
                              <option value="RSD"> RSD</option>
                              <option value="SCR"> SCR</option>
                              <option value="SLL"> SLL</option>
                              <option value="SGD"> SGD</option>
                              <option value="SKK"> SKK</option>
                              <option value="SBD"> SBD</option>
                              <option value="SOS"> SOS</option>
                              <option value="ZAR"> ZAR</option>
                              <option value="KRW"> KRW</option>
                              <option value="XDR"> XDR</option>
                              <option value="LKR"> LKR</option>
                              <option value="SHP">SHP</option>
                              <option value="SDG"> SDG</option>
                              <option value="SRD"> SRD</option>
                              <option value="SZL"> SZL</option>
                              <option value="SEK"> SEK</option>
                              <option value="CHF"> CHF</option>
                              <option value="SYP"> SYP</option>
                              <option value="STD"> STD</option>
                              <option value="TJS"> TJS</option>
                              <option value="TZS"> TZS</option>
                              <option value="THB"> THB</option>
                              <option value="TOP"> TOP</option>
                              <option value="TTD"> TTD</option>
                              <option value="TND"> TND</option>
                              <option value="TRY"> TRY</option>
                              <option value="TMT"> TMT</option>
                              <option value="UGX"> UGX</option>
                              <option value="UAH"> UAH</option>
                              <option value="AED"> AED</option>
                              <option value="UYU"> UYU</option>
                              <option value="USD"> USD</option>
                              <option value="UZS"> UZS</option>
                              <option value="VUV"> VUV</option>
                              <option value="VEF"> VEF</option>
                              <option value="VND"> VND</option>
                              <option value="YER"> YER</option>
                              <option value="ZMK"> ZMK</option>
                            </select>
                          </div>
                          <input type="range" min="0" max="100" defaultValue="50" id="myRange" className="h-1 bg-white w-full" />
                          <div className="flex items-center justify-between w-full">
                            <span className="text-xs font-medium text-gray-700">100</span>
                            <span className="text-xs font-medium text-gray-700">1,00,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="pb-10 relative">
                  <div className="relative flex items-start group cursor-default">
                    <span className="h-9 flex items-center">
                      <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full">
                        <span className="text-white" aria-hidden="true">
                          2
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 w-[90%] flex flex-col">
                      <span className="text-sm font-semibold tracking-wide underline">Location Info</span>
                      <div className="flex flex-col w-full">
                        <span className="text-sm font-medium mt-5">Location Type</span>
                        <Switch.Group>
                          <div className="flex items-center mt-2">
                            <Switch.Label className="mr-2 text-xs font-medium text-gray-700">Location</Switch.Label>
                            <Switch
                              checked={locationEnabled}
                              onChange={setLocationEnabled}
                              className={`${
                                locationEnabled ? "bg-blue-600" : "bg-orange-600"
                              } relative inline-flex h-6 w-[5rem] items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`}
                            >
                              <span
                                className={`${
                                  locationEnabled ? "translate-x-[3.7rem]" : "translate-x-1"
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                              />
                            </Switch>
                            <Switch.Label className="ml-2 text-xs font-medium text-gray-700">Radius</Switch.Label>
                          </div>
                        </Switch.Group>
                        <div className="w-[90%] my-3">
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <input
                              type="text"
                              name="location"
                              id="location"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 sm:text-sm border-gray-300 rounded-md"
                              placeholder="Search a name, place, address or coordinates"
                            />
                            <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                              <img src="/campaigns/gps.png" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium mt-5">Target Radius</span>
                        <input type="range" min="0" max="100" defaultValue="15" id="myRange" className="h-1 bg-white w-full" />
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs font-medium text-gray-700">1km</span>
                          <span className="text-xs font-medium text-gray-700">30km</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ))} */}
              </ol>
            </nav>
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

export default StageThree;
