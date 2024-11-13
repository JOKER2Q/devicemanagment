import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Overview from "./pages/Overview";
import Devices from "./pages/devices/Devices";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Logs from "./pages/Logs";
import DevicePage from "./pages/devices/DevicePage";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="devices" element={<Devices />}>
            <Route path=":userId" element={<DevicePage />} /> {/* صفحة الجهاز كمسار فرعي */}
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logs" element={<Logs />} />
          <Route path="/" element={<Overview />} />
        </Routes>
    </div>
  );
}

export default Dashboard;
