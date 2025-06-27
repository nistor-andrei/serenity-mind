"use client";
import { Card } from "components/Card/Card";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", sleep: 6, anxiety: 4 },
  { name: "Tue", sleep: 7, anxiety: 3 },
  { name: "Wed", sleep: 5, anxiety: 5 },
  { name: "Thu", sleep: 8, anxiety: 2 },
  { name: "Fri", sleep: 6, anxiety: 3 },
  { name: "Sat", sleep: 7, anxiety: 2 },
  { name: "Sun", sleep: 8, anxiety: 1 },
];

const WeeklyOverview = () => {
  return (
    <Card>
      <h2 className="text-lg font-medium mb-4">Your Weekly Overview</h2>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        width={500}
        height={300}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sleep" stroke="#6F62D4" name="Sleep" />
        <Line
          type="monotone"
          dataKey="anxiety"
          stroke="#4B4C4D"
          name="Anxiety"
        />
      </LineChart>
    </Card>
  );
};

export default WeeklyOverview;
