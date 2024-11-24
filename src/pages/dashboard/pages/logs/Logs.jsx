import React, { useEffect } from "react";
import {NavLink, Outlet, useLocation } from "react-router-dom"; // Import Link for navigation
import "./logs.css";

const Logs = () => {
  const users = [
    { id: 1, name: "Log 1", type: "Admin", imgSrc: "path/to/profile1.jpg" },
    { id: 2, name: "Log 2", type: "User", imgSrc: "path/to/profile2.jpg" },
    { id: 3, name: "Log 3", type: "Guest", imgSrc: "path/to/profile3.jpg" },
    { id: 4, name: "Log 4", type: "Guest", imgSrc: "path/to/profile3.jpg" },
    { id: 5, name: "Log 5", type: "Guest", imgSrc: "path/to/profile3.jpg" },
    { id: 6, name: "Log 6", type: "Guest", imgSrc: "path/to/profile3.jpg" },
  ];
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/logs") {
      const deviceBar = document.querySelector(".mini-sidebar-device-d");
      deviceBar.classList.remove("mini-sidebar-device-d-active");
    }
  }, [location.pathname]);
  useEffect(() => {
    const deviceBar = document.querySelector(".mini-sidebar-device-d");
    if (location.pathname === "/logs") {
      deviceBar?.classList.add("mini-sidebar-device-d-active");
    }
  }, [location.pathname]);
  return (
    <main className="main-content">
      <div className="logs flex">
        <div className="sidebar-device-d">
          {users.map((user) => (
            <NavLink
              to={`/logs/${user.id}`} // Navigate to the LogsPage with the user's ID
              key={user.id}
              className="chat-card"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <div className="chat-info">
                <h3 className="chat-name">{user.name}</h3>
                <p className="chat-type">{user.type}</p>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mini-sidebar-device-d">
          {users.map((user) => (
            <NavLink
              to={`/logs/${user.id}`} // Navigate to the LogsPage with the user's ID
              key={user.id}
              className="chat-card"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
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
};

export default Logs;
