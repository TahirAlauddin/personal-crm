"use client";
import React from "react";
import { TagLabel } from "./TagLabel";

import Dropdown from "./Dropdown";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { name: "Jan", value: [-10, 0] },
  { name: "Feb", value: [-10, 45] },
  { name: "Mar", value: [-10, 56] },
  { name: "Apr", value: [-10, 67] },
  { name: "May", value: [-10, 78] },
  { name: "Jun", value: [-10, 89] },
  { name: "Jul", value: [-10, 90] },
  { name: "Aug", value: [-10, 91] },
  { name: "Sep", value: [-10, 92] },
  { name: "Oct", value: [-10, 93] },
  { name: "Nov", value: [-10, 94] },
  { name: "Dec", value: [-10, 95] },
];

const EmailOpenChart = () => {
  return (
    <div className="flex flex-col m-3 border-[1px] rounded-sm p-3 gap-3">
      <div className="flex flex-col gap-1">
        <h3 className="font-normal text-sm">Average Email Open Rate</h3>
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <h4 className="font-semibold text-xl">44,83%</h4>
            <TagLabel
              text="12%"
              className="bg-[#EEF5F0] text-[#589E67] max-h-min"
            >
              <TrendingUp width={15} height={20}></TrendingUp>
            </TagLabel>
          </div>
          <div className="flex gap-1">
            <Dropdown buttonText="January, 2024 - December, 2024"></Dropdown>
            <Dropdown buttonText="Month"></Dropdown>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-neutral-80 text-xs">Average Open rate</h4>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            margin={{ top: 20, bottom: 20, left: 20, right: 20 }}
            data={data}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              axisLine={false}
              tick={{ fill: "#000000" }}
              tickLine={false}
              dataKey="name"
              tickMargin={20}
            />
            <YAxis
              domain={[-10, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickMargin={20}
              axisLine={false}
              tick={{ fill: "#000000" }}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              startOffset={-100}
              fill="#D8D8D8"
              barSize={30}
              radius={[5, 5, 2, 2]}
              activeBar={<Rectangle fill="#000000" />}
              dataKey="value"
              minPointSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmailOpenChart;
