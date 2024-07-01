"use client";
import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  ResponsiveContainer,
} from "recharts";
import messages from "@/data/charts.json";

const MessagePlatform: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    const WhatsAppValue = messages.filter((item) => item?.source === "whatsapp").length;
    const MessengerValue = messages.filter((item) => item?.source === "messenger").length;
    const InstagramValue = messages.filter((item) => item?.source === "instagram").length;

    setData([
      { name: "WhatsApp", value: WhatsAppValue },
      { name: "Messenger", value: MessengerValue },
      { name: "Instagram", value: InstagramValue },
    ]);
  }, []);

  const COLORS = ["#9944DDEE", "#F6722B", "#EA4B98"];

  const renderActiveShape = (props: any) => {
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
      percent,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx! + (outerRadius! + 10) * cos;
    const sy = cy! + (outerRadius! + 10) * sin;
    const mx = cx! + (outerRadius! + 30) * cos;
    const my = cy! + (outerRadius! + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "middle" : "middle";

    return (
      <g className="overflow-auto !z-50">
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {`Rate ${(percent! * 100).toFixed(2)}%`}
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
          innerRadius={outerRadius! + 2}
          outerRadius={outerRadius! + 10}
          fill={fill}
          className="overflow-auto !z-50"
        />
      </g>
    );
  };

  return (
    <section className="lg:col-span-5 col-span-12 h-[50vh] w-full overflow-x-auto rounded-primary shadow p-4 flex flex-col items-center justify-between gap-y-4 overflow-auto !z-10">
      <h2 className="text-xl text-center">Messages Per Platform</h2>

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
          Messenger: {data.find((d) => d.name === "Messenger")?.value || 0}
        </p>
        <p className="text-xs flex flex-row items-center gap-x-1">
          <span className="text-[#9944DDEE]">
            <FaCircle className="h-4 w-4" />
          </span>
          WhatsApp: {data.find((d) => d.name === "WhatsApp")?.value || 0}
        </p>
        <p className="text-xs flex flex-row items-center gap-x-1">
          <span className="text-[#EA4B98]">
            <FaCircle className="h-4 w-4" />
          </span>
          Instagram: {data.find((d) => d.name === "Instagram")?.value || 0}
        </p>
      </div>
    </section>
  );
};

export default MessagePlatform;
