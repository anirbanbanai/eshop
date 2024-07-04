import Image from 'next/image';
import React from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { FaCircleCheck } from 'react-icons/fa6';

const Details = () => {
    const insights = [
        {
          _id: 1,
          name: "AI State",
          details: (
            <span className="flex items-center gap-x-2">
              <>
                {" "}
                Enabled <FaCircleCheck className="text-green-500  " />{" "}
              </>
              (
              <>
                Creating <AiFillExclamationCircle className="text-[#FFB932] " />
              </>
              )
            </span>
          ),
          icon: "/ai-state.svg",
        },
        {
          _id: 2,
          name: "Status",
          details: (
            <span className="flex items-center gap-x-2">
              Fully Operational <FaCircleCheck className="text-green-500" />
            </span>
          ),
          icon: "/status.svg",
        },
        {
          _id: 3,
          name: "User ID",
          details: "USR-12345678",
          icon: "/user-id.svg",
        },
        {
          _id: 4,
          name: "Transfers",
          details: "5",
          icon: "/transfers.svg",
        },
      ];
    return (
        <div>
              <div
        className="grid grid-cols-1 md:grid-cols-2 md:max-h-[360px] 2xl:min-h-[350px] md:items-center  gap-4 p-8 xl:pb-10 rounded-primary"
        style={{
          background: "linear-gradient(90deg, #9C4CDB, #EA4B98, #F6722B)",
        }}
      >
        <div className="">
          <Image
            src="/ai-hub.svg"
            alt="banner"
            height={357}
            width={500}
            className="w-full md:w-4/5"
            loading="eager"
          />
        </div>

        <article className="grid grid-cols-1 gap-y-6">
          <h2 className="font-bold text-white md:text-2xl lg:text-3xl 2xl:text-5xl">
            Your AI Hub
          </h2>
          <div className="grid grid-cols-1 gap-y-4">
            <p className="text-sm text-white">
              Welcome to your AI management hub. View system statuses, manage
              user permissions, and track data transfers. Seamlessly navigate
              between AI training, integrations, and sandbox testing to
              fine-tune your AI to your business needs.
            </p>
          </div>
          <div
            className={`flex items-center gap-2 ${"bg-[#00FF0A]/50 border-[#00FF0A]"} rounded-3xl  border-l-8  py-4 px-2`}
          >
            <div>
              <Image
                width={40}
                height={40}
                src={
                  //   user.modelStatus === "created"
                  //     ? "/aimodelComplete.png"
                  "/aimodelTrain.png"
                }
                alt="aimodelComplete"
              />
            </div>
            <div>
              <h3 className="text-white text-[12px] font-semibold">
                {
                  // user.modelStatus === "created"
                  //   ? "Your AI Agent is ready to assist you! 🚀"
                  "Your AI Agent is training 💪"
                }
              </h3>
              <p className="text-white text-[10px]">
                {
                  // user.modelStatus === "created"
                  //   ? "Your AI Agent has successfully processed all the information. You can now start using it to achieve your goals."
                  "Your AI Agent is analyzing all information provided. This procedure could require up to 10 minutes."
                }
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="  my-12 col-span-12 p-4 bg-white lg:rounded-none lg:bg-transparent lg:p-0 rounded-primary">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
          {insights?.map((insight) => (
            <div
              key={insight?._id}
              className="flex flex-row items-center p-4 transition-all border border-transparent shadow cursor-default rounded-2xl gap-x-5 hover:border-black hover:shadow-none"
            >
              <div className="w-10 h-10">
                <Image
                  src={insight?.icon}
                  alt={`insight icon ${insight?.icon}`}
                  height={40}
                  width={40}
                  className="object-contain"
                  loading="eager"
                />
              </div>
              <article className="flex flex-col w-full gap-y-1">
                <h2 className="flex flex-row items-center justify-between text-xl font-bold 2xl:text-2xl">
                  {insight?.name}
                </h2>
                <p className="text-[13px] 2xl:text-sm text-slate-500">
                  {insight?.details}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default Details;