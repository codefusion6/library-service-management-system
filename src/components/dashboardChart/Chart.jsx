"use client"
import { useEffect, useState } from "react";
// import { useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Chart = ({ writerNum, bookNum, userNum }) => {
  // console.log(writerNum, bookNum, userNum)
  const data = [
    {
      name: "Writers",
      uv: writerNum,
      pv: bookNum,
      amt: userNum,
    },
    {
      name: "Users",
      uv: userNum,
      pv: writerNum,
      amt: bookNum,
    },
    {
      name: "Books",
      uv: bookNum,
      pv: writerNum,
      amt: userNum,
    },
    {
      name: "R. Books",
      uv: 8,
      pv: 0,
      amt: 0,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
      }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
      }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])


  return (
    <>
      {
        isClient &&
        <BarChart
          className=""
          width={650}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      }
    </>
  );
};

export default Chart;
