
"use client";

import React, { useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";
import { FaArrowDown, FaArrowUp, FaCircle } from "react-icons/fa6";

import messages from "@/data/charts.json";

import Image from "next/image";

const Analysis = () => {
  return (
    <section className="bg-white p-4 rounded-primary grid grid-cols-12 gap-4 max-w-4xl mx-auto">
      <GeneratedMessages />
      <MessagesPerPlatform />
      <ChattingInsights />
      <PricingInsights />
    </section>
  );
};

export default Analysis;

function GeneratedMessages() {
  const data = [
    {
      name: "JAN",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "FEB",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "MAR",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "APR",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "MAY",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "JUN",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "July",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "JUL",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "AUG",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "SEP",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "OCT",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "NOV",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
    {
      name: "DEC",
      MessagesGenerate: Math.floor(Math.random() * 5000),
      MessagesReceived: Math.floor(Math.random() * 3000),
      ErrorMessages: Math.floor(Math.random() * 3000),
      MonthlyAudit: Math.floor((Math.random() * 5000) / 3),
    },
  ];

  return (
    <section className="lg:col-span-7 col-span-12 h-[50vh] w-full overflow-x-auto rounded-primary shadow py-4 flex flex-col items-center gap-y-4 scrollbar-hide">
      <h2 className="text-xl text-center px-4">
       EShop Sell chart
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
        className="text-xs scrollbar-hide"
      >
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip
            content={({ payload }) => {
              const filteredPayload = payload.filter(
                (entry) => entry.dataKey !== "MonthlyAudit"
              );

              return (
                <div className="recharts-tooltip custom-tooltip bg-white p-2 rounded border flex flex-col gap-y-1">
                  {filteredPayload.map((entry, index) => (
                    <p
                      key={index}
                      className="recharts-tooltip-item"
                      style={{ color: entry.color }}
                    >
                      {`${entry.name.replace(/([A-Z])/g, " $1").trim()}: ${
                        entry.value
                      }`}
                    </p>
                  ))}
                </div>
              );
            }}
          /> */}
          <Legend
            formatter={(value, entry) => {
              return value?.replace(/([A-Z])/g, " $1").trim();
            }}
          />
          <Bar dataKey="MessagesGenerate" fill="#9944DDEE" />
          <Bar dataKey="MessagesReceived" fill="#F6722B" />
          <Bar dataKey="ErrorMessages" fill="#EA4B98" />
          <Line
            type="monotone"
            dataKey="MonthlyAudit"
            stroke="#105FC7"
            dot
            strokeWidth={2}
            legendType="none"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  );
}

function MessagesPerPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);

  const WhatsAppValue = messages?. filter((item: { source: string; }) => item?.source === "whatsapp").length;
  const MessengerValue =  messages?. filter((item: { source: string; }) => item?.source === "messenger").length;
  const InstagramValue = messages?. filter((item: { source: string; }) => item?.source === "instagram").length;

  const data = [
    { name: "WhatsApp", value: WhatsAppValue },
    { name: "Messenger", value: MessengerValue },
    { name: "Instagram", value: InstagramValue },
  ];

  const COLORS = ["#9944DDEE", "#F6722B", "#EA4B98"];

  const renderActiveShape = (props: { cx: any; cy: any; midAngle: any; innerRadius: any; outerRadius: any; startAngle: any; endAngle: any; fill: any; payload: any; percent: any; value: any; }) => {
    const RADIAN = Math.PI / 180;

    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "middle" : "middle";

    return (
      <g className="overflow-auto !z-50">
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {/* {payload.name} */}
          {`Rate ${(percent * 100).toFixed(2)}%`}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          className="overflow-auto !z-50"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 2}
          outerRadius={outerRadius + 10}
          fill={fill}
          className="overflow-auto !z-50"
        />
        
      </g>
    );
  };

  return (
    <section className="lg:col-span-5 col-span-12 h-[50vh] w-full overflow-x-auto rounded-primary shadow p-4 flex flex-col items-center justify-between gap-y-4 overflow-auto !z-10">
      <h2 className="text-xl text-center">EShop Platform</h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
        className="text-xs mx-auto overflow-auto !z-50 !focus:border-0 !focus:outline-0 !focus:ring-0"
      >
        <PieChart
          width={500}
          height={400}
          className="overflow-auto !z-50 !focus:border-0 !focus:outline-0 !focus:ring-0"
        >
          <Pie
            activeIndex={activeIndex}
            // activeShape={activeIndex !== null ? renderActiveShape : null}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            className="overflow-auto !z-50 !focus:border-0 !focus:outline-0 !focus:ring-0"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
                className="overflow-auto !z-50 !focus:border-0 !focus:outline-0 !focus:ring-0"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-row flex-wrap gap-x-4">
        <p className="text-xs flex flex-row items-center gap-x-1">
          <span className="text-[#F6722B]">
            <FaCircle className="h-4 w-4" />
          </span>
          Messenger: {MessengerValue}
        </p>
        <p className="text-xs flex flex-row items-center gap-x-1">
          <span className="text-[#9944DDEE]">
            <FaCircle className="h-4 w-4" />
          </span>
          WhatsApp: {WhatsAppValue}
        </p>
        <p className="text-xs flex flex-row items-center gap-x-1">
          <span className="text-[#EA4B98]">
            <FaCircle className="h-4 w-4" />
          </span>
          Instagram: {InstagramValue}
        </p>
      </div>
    </section>
  );
}

function ChattingInsights() {
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
      name: messages.length,
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
            className="shadow rounded-2xl p-4 flex flex-row items-center gap-x-2 transition-all border border-transparent hover:border-black hover:shadow-none cursor-default"
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
}

function PricingInsights() {
  const insights = [
    {
      icon: "/current-plan.svg",
      name: "Standard",
      details: "Your current plan",
    },
    {
      icon: "/message.svg",
      name: "51",
      details: "Extra messages",
    },
    {
      icon: "/cost.svg",
      name: "$40",
      impression: {
        status: "negative",
        value: 12,
      },
      details: "Extra cost",
    },
    {
      icon: "/billing.svg",
      name: "12th Jan, 2024",
      details: "Next billing",
    },
  ];

  return (
    <div className="col-span-12 rounded-primary py-1">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {insights?.map((insight, index) => (
          <div
            key={index}
            className="shadow rounded-2xl rounded-primary p-4 flex flex-row items-center gap-x-2 transition-all border border-transparent hover:border-black hover:shadow-none cursor-default"
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
}
