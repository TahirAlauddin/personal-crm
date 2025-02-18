"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// 240
const data = [
  {
    name: "Agency",
    value: 90,
    color: "#000",
  },
  { name: "Empty", value: 40 + 60 + 30 + 20, color: "transparent" },
];
const data2 = [
  {
    name: "Marketing",
    value: 60,
    color: "#2f2f2f",
  },
  { name: "Empty", value: 40 + 90 + 30 + 20, color: "transparent" },
];
const data3 = [
  {
    name: "Communication",
    value: 40,
    color: "#555",
  },
  { name: "Empty", value: 60 + 90 + 30 + 20, color: "transparent" },
];
const data4 = [
  {
    name: "Web Development",
    value: 30,
    color: "#777",
  },
  { name: "Empty", value: 40 + 90 + 60 + 20, color: "transparent" },
];
const data5 = [
  {
    name: "Travel",
    value: 20,
    color: "#C0C0C0",
  },
  { name: "Empty", value: 40 + 90 + 30 + 60, color: "transparent" },
];

const CompanyCategoryChart = () => {
  return (
    <div className="w-full border-[1px] rounded-md m-2 p-4 my-4 items-center flex flex-col  ">
      <h3 className="text-xl font-semibold">Company Categories</h3>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={300} height={300}>
            <Pie
              innerRadius={70}
              outerRadius={110}
              data={data}
              startAngle={-90}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Pie
              innerRadius={70}
              data={data2}
              startAngle={45}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              innerRadius={70}
              startAngle={-60 - 90}
              data={data3}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data3.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              innerRadius={70}
              startAngle={-60 - 90 - 40 - 5}
              data={data4}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data4.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              innerRadius={70}
              startAngle={-60 - 90 - 40 - 30 - 5}
              outerRadius={90}
              data={data5}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#8884d8"
            >
              {data5.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul>
        <li>Agency</li>
        <li>Marketing</li>
        <li>Communication</li>
        <li>Web Development</li>
        <li>Travel</li>
      </ul>
    </div>
  );
};

export default CompanyCategoryChart;
