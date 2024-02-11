import React from "react";
import Chart from "@/components/dashboardChart/Chart";
import DashboardHome from "@/components/dashboardPages/dashboardHome/DashboardHome";
import { getUserNumber } from "@/libs/actions/user.actions";

async function Dashboard() {
  const result = await getUserNumber()
  console.log(result)
  return (
    <main className="h-[100vh]">
      <DashboardHome></DashboardHome>
      <div className="w-96 container mx-auto mt-20">
        <Chart></Chart>
      </div>
    </main>
  );
}
export default Dashboard;
