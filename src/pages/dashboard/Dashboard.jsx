import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Overview from "./pages/Overview";
import Devices from "./pages/devices/Devices";
import Users from "./pages/users/Users";
import Settings from "./pages/settings/Settings";
import Logs from "./pages/logs/Logs";
import DevicePage from "./pages/devices/DevicePage";
import DeviceTable from "./pages/devices/DeviceTable";
import LogsPage from "./pages/logs/LogsPage";
import FileManager from "./pages/devices/FileManager";
import ReportDevice from "./pages/devices/ReportDevice";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="devices" element={<Devices />}>
          <Route path=":userId" element={<DevicePage />}>
            {/* Nested routes under :userId */}
            <Route path="" element={<FileManager />} />
            <Route path="report-tab" element={<ReportDevice />} />
            <Route path=":tabId" element={<DeviceTable />} />
          </Route>
        </Route>
        <Route path="users/*" element={<Users />} />

        <Route path="settings" element={<Settings />} />
        <Route path="logs" element={<Logs />}>
          <Route path=":logId" element={<LogsPage />} />
        </Route>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
