"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const ReaderChart = ({ paymentNum, requestNum }) => {
  console.log(paymentNum, requestNum);
  const data = [
    {
      subject: "Payment History",
      A: paymentNum,
      B: 50,
      fullMark: 50,
    },
    {
      subject: "Publisher Request",
      A: requestNum,
      B: 45,
      fullMark: 50,
    },
    {
      subject: "R. Book",
      A: 8,
      B: 40,
      fullMark: 50,
    },
    {
      subject: "Featured Books",
      A: 20,
      B: 50,
      fullMark: 50,
    },
    {
      subject: "Book PDF's",
      A: 18,
      B: 50,
      fullMark: 50,
    },
    {
      subject: "History",
      A: 65,
      B: 50,
      fullMark: 50,
    },
  ];

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="shadow-md border sm:p-10 space-y-3"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 50]} />
        <Radar
          name="Admin"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Radar
          name="Subscribed User"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />

        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default ReaderChart;
