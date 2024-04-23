import DashboardDrawer from "@/components/dashboard/DashboardDrawer/DashboardDrawer";
import React from "react";

const DashboardLayoutlayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayoutlayout;
