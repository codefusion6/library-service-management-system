"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {

  labels: ["Story", "History", "Horror", "Easy Readers"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const Chart = (bookNum, userNum) => {
  // const updatedData = {
  //   labels: ["Story", "History", "Horror", "Easy Readers"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [bookNum, 19, 3, 5], // Update the first value with bookNum
  //       backgroundColor: [
  //         "rgba(255, 99, 132, 0.2)",
  //         "rgba(54, 162, 235, 0.2)",
  //         "rgba(255, 206, 86, 0.2)",
  //         "rgba(75, 192, 192, 0.2)",
  //       ],
  //       borderColor: [
  //         "rgba(255, 99, 132, 1)",
  //         "rgba(54, 162, 235, 1)",
  //         "rgba(255, 206, 86, 1)",
  //         "rgba(75, 192, 192, 1)",
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  return (
    <div>
      <Pie data={data}></Pie>
    </div>
  );
};

export default Chart;
