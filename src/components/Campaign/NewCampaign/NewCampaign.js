import { useState } from "react";
// import Stage from "./Stage";
import StageOne from "./StageOne";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import StageFour from "./StageFour";

const data = [
  { name: "What you want to do", status: "current", iconStart: "/campaigns/stage1.png", iconEnd: "/campaigns/stage1.png" },
  { name: "Choose Product", status: "upcoming", iconStart: "/campaigns/stage2-gray.png", iconEnd: "/campaigns/stage2-white.png" },
  { name: "Campaign Settings", status: "upcoming", iconStart: "/campaigns/stage3-gray.png", iconEnd: "/campaigns/stage3-white.png" },
  { name: "Ready to go", status: "upcoming", iconStart: "/campaigns/stage4-gray.png", iconEnd: "/campaigns/stage4-white.png" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NewCampaign = ({ handleCompleteAdding }) => {
  const [steps, setSteps] = useState(data);
  const [stage, setStage] = useState(1);

  const handleSetStage = () => {
    let newStage = stage + 1;
    setStage(newStage);
    if (newStage >= 5) {
      handleCompleteAdding();
      return;
    }
    let newSteps = steps;
    newSteps[newStage - 1].status = "current";
    if (newStage - 2 >= 0) newSteps[newStage - 2].status = "complete";
    setSteps(newSteps);
  };

  return (
    <>
      <nav aria-label="Progress w-full border">
        <ol role="list" className="flex items-center px-16">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20 w-full" : "", "relative")}>
              {step.status === "complete" ? (
                <>
                  <div className="absolute inset-0 flex mt-7" aria-hidden="true">
                    <div className="h-0.5 w-full bg-orange-300" />
                  </div>
                  {/* <div className="flex flex-col items-center bg-transparent border w-max "> */}
                  <button className="relative w-[3.5rem] h-[3.5rem] cursor-default flex flex-col items-center justify-center bg-orange-600 rounded-full">
                    <img src={step.iconEnd} className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                  {/* </div> */}
                  <p className={classNames(stepIdx !== steps.length - 1 ? "-ml-5" : "", "w-max text-xs font-semibold pt-4")}>{step.name}</p>
                </>
              ) : step.status === "current" ? (
                <>
                  <div className="absolute inset-0 flex mt-7" aria-hidden="true">
                    <div className={classNames(stepIdx !== steps.length - 1 ? "w-full" : "", "h-0.5 bg-gray-200")} />
                  </div>
                  {/* <div className="flex flex-col items-center border w-max"> */}
                  <button className="relative w-[3.5rem] h-[3.5rem] cursor-default flex flex-col items-center justify-center bg-orange-600 rounded-full">
                    <img src={step.iconEnd} className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                  {/* </div> */}
                  <p className={classNames(stepIdx !== steps.length - 1 ? "" : "pl-4", "-ml-5 w-max text-xs font-semibold pt-4")}>{step.name}</p>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex mt-7" aria-hidden="true">
                    <div className={classNames(stepIdx !== steps.length - 1 ? "w-full" : "", "h-0.5 bg-gray-200")} />
                  </div>
                  {/* <div className="flex flex-col items-center border w-max"> */}
                  <button className="relative w-[3.5rem] h-[3.5rem] cursor-default flex flex-col items-center justify-center bg-gray-200 rounded-full">
                    <img src={step.iconStart} className="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                  {/* </div> */}
                  <p className={classNames(stepIdx !== steps.length - 1 ? "" : "pl-4", "-ml-5 w-max text-xs font-semibold pt-4")}>{step.name}</p>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {stage === 1 && <StageOne handleSetStage={handleSetStage} />}
      {stage === 2 && <StageTwo handleSetStage={handleSetStage} />}
      {stage === 3 && <StageThree handleSetStage={handleSetStage} />}
      {stage === 4 && <StageFour handleSetStage={handleSetStage} />}
    </>
  );
};

export default NewCampaign;
