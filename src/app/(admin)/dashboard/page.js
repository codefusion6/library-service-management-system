import React from "react";
import Chart from "@/components/dashboardChart/Chart";
import DashboardHome from "@/components/dashboardPages/dashboardHome/DashboardHome";
import { getUserNumber } from "@/libs/actions/user.actions";
import { getBooksNumber } from "@/libs/actions/book.action";
import { getWritersNumber } from "@/libs/actions/writer.action";
import ReaderChart from "@/components/dashboardChart/ReaderChart";


async function Dashboard() {
  const userNum = await getUserNumber()
  // console.log(userNum)

  const bookNum = await getBooksNumber()
  // console.log(bookNum);

  const writerNum = await getWritersNumber()
  // console.log(writerNum);
  return (
    <main className="h-[100vh]">
      <DashboardHome bookNum={bookNum} userNum={userNum} writerNum={writerNum}></DashboardHome>
      <div className="flex flex-col lg:flex-row gap-5 w-full pt-20">
        <div className="flex-1">
          <ReaderChart></ReaderChart>
        </div>
        <div className="flex-1 shadow-md border sm:p-10">
          <Chart userNum={userNum} bookNum={bookNum} writerNum={writerNum} ></Chart>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;