import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-icons">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-tab" : ""}`
            }
          >
            <i className="fa-solid fa-house"></i>
            <span className="icon-text">Overview</span> {/* Text for the tab */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/devices"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-tab" : ""}`
            }
          >
            <i className="fa-solid fa-desktop"></i>
            <span className="icon-text">Devices</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users/All-users"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-tab" : ""}`
            }
          >
            <i className="fa-solid fa-users"></i>
            <span className="icon-text">Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-tab" : ""}`
            }
          >
            <i className="fa-solid fa-gear"></i>
            <span className="icon-text">Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logs"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-tab" : ""}`
            }
          >
            <i className="fa-solid fa-file-invoice"></i>
            <span className="icon-text">Logs</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
