import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BarStatistics = ({
  data,
  dataXAxis,
  dataBar,
  maxDomain = "auto",
}) => {
  return (
    <ResponsiveContainer>
      <BarChart
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
        <XAxis dataKey={dataXAxis} />
        <YAxis allowDataOverflow={true} domain={[0, parseInt(maxDomain)]} />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataBar} fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
