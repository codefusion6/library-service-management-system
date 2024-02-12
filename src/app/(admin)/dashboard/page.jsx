import React from "react";
import Chart from "@/components/dashboardChart/Chart";
import DashboardHome from "@/components/dashboardPages/dashboardHome/DashboardHome";
import { getUserNumber } from "@/libs/actions/user.actions";
import { getBooksNumber } from "@/libs/actions/book.action";
import { getWritersNumber } from "@/libs/actions/writer.action";


async function Dashboard() {
  const userNum = await getUserNumber()
  console.log(userNum)
  const bookNum = await getBooksNumber()
  console.log(bookNum);
  const writerNum = await getWritersNumber()
  console.log(writerNum);
  return (
    <main className="h-[100vh]">
      <DashboardHome bookNum={bookNum} userNum={userNum}></DashboardHome>
      <div className="w-96 container mx-auto mt-20">
        <Chart bookNum={bookNum} userNum={userNum} ></Chart>
      </div>
    </main>
  );
}
export default Dashboard;
