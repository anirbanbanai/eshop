import Image from 'next/image';
import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Insights = () => {
    const insights = [
        {
          icon: "/message.svg",
          name: "18.6k",
          impression: {
            status: "positive",
            value: 18,
          },
          details: "Messages generated",
        },
        {
          icon: "/feedback.svg",
          name: "5",
          impression: {
            status: "positive",
            value: 25,
          },
          details: "Positive feedbacks",
        },
        {
          icon: "/reply.svg",
          name:"6",
          impression: {
            status: "negative",
            value: 7,
          },
          details: "Total customers",
        },
        {
          icon: "/status.svg",
          name: "Active",
          details: "Status",
        },
      ];
    return (
        <div className="col-span-12 rounded-primary pt-2 pb-1">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {insights?.map((insight, index) => (
            <div
              key={index}
              className="shadow rounded-primary p-4 flex flex-row items-center gap-x-2 transition-all border border-transparent hover:border-black hover:shadow-none cursor-default"
            >
              <div className="h-10 w-10">
                <Image
                  src={insight?.icon}
                  alt={`insight icon ${insight?.icon}`}
                  height={40}
                  width={40}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <article className="flex flex-col gap-y-1 w-full">
                <h2 className="text-2xl font-bold flex flex-row justify-between items-center">
                  {insight?.name}
                  {insight?.impression && (
                    <span
                      className={`text-sm font-normal flex items-center gap-x-1 ${
                        insight?.impression?.status === "positive"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <span className="">
                        {insight?.impression?.status === "negative" && (
                          <FaArrowDown className="h-4 w-4" />
                        )}
                        {insight?.impression?.status === "positive" && (
                          <FaArrowUp className="h-4 w-4" />
                        )}
                      </span>
                      {insight?.impression?.value}%
                    </span>
                  )}
                </h2>
                <p className="text-sm text-slate-500">{insight?.details}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Insights;