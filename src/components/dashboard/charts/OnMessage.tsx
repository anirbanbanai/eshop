"use client"
import React from "react";
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
const OnMessage = () => {
  return (
    <section className=" max-w-5xl mx-auto">
      <h2 className="text-xl text-center px-4">
       Eshop AI
      </h2>

      <div  className=" text-xs scrollbar-hide">
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
      </div>
    </section>
  );
};

export default OnMessage;
