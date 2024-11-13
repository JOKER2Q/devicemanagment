import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/Sidebar.css";
import "./device.css";

function Devices() {
  const users = [
    {
      id: 1,
      name: "device1",
      type: "Admin",
      status: "online",
      imgSrc: "path/to/profile1.jpg",
    },
    {
      id: 2,
      name: "device2",
      type: "User",
      status: "offline",
      imgSrc: "path/to/profile2.jpg",
    },
    {
      id: 3,
      name: "device3",
      type: "Guest",
      status: "online",
      imgSrc: "path/to/profile3.jpg",
    },
    {
      id: 4,
      name: "device4",
      type: "Guest",
      status: "online",
      imgSrc: "path/to/profile3.jpg",
    },
    {
      id: 5,
      name: "device5",
      type: "Guest",
      status: "online",
      imgSrc: "path/to/profile3.jpg",
    },
    {
      id: 6,
      name: "device6",
      type: "Guest",
      status: "online",
      imgSrc: "path/to/profile3.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState("online");
  const filteredUsers = users.filter((user) => user.status === activeTab);

  return (
    <main className="main-content">
      <div className="devices-container-d">
        <div className="sidebar-device-d">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "online" ? "active" : ""}`}
              onClick={() => setActiveTab("online")}
            >
              Online
            </div>
            <div
              className={`tab ${activeTab === "offline" ? "active" : ""}`}
              onClick={() => setActiveTab("offline")}
            >
              Offline
            </div>
          </div>
          {filteredUsers.map((user) => (
            <NavLink
              to={`/dashboard/devices/${user.id}`}
              key={user.id}
              className="chat-card"
            >
              <i class="fa-regular fa-hard-drive"></i>
              <div className="chat-info">
                <h3 className="chat-name">{user.name}</h3>
                <p className="chat-type">{user.type}</p>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="device-content-d">
          <Outlet /> {/* لعرض محتوى الصفحة الفرعية (DevicePage) هنا */}
        </div>
      </div>
    </main>
  );
}

export default Devices;
