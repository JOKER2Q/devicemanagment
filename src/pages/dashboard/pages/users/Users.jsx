import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom"; // Import Navigate for redirection
import AddUser from "./AddUser";
import AllGroups from "./AllGroups";
import AddGroup from "./AddGroup";
import AllUsers from "./AllUsers";
import "./user.css";

function Users() {
  return (
    <div className="main-content pad-40">
      <div className="users-container">
        <div className="tabs-header flex">
          <NavLink
            to="All-users"
            className={({ isActive }) =>
              isActive ? "tab-button active" : "tab-button"
            }
          >
            All Users
          </NavLink>
          <NavLink
            to="Add-users"
            className={({ isActive }) =>
              isActive ? "tab-button active" : "tab-button"
            }
          >
            Add User
          </NavLink>
          <NavLink
            to="All-groups"
            className={({ isActive }) =>
              isActive ? "tab-button active" : "tab-button"
            }
          >
            All Groups
          </NavLink>
          <NavLink
            to="Add-group"
            className={({ isActive }) =>
              isActive ? "tab-button active" : "tab-button"
            }
          >
            Add a Group
          </NavLink>
        </div>

        {/* Nested Routes */}
        <Routes>
          {/* Redirect /users to /users/All-users */}
          <Route path="/" element={<Navigate to="All-users" replace />} />
          <Route path="All-users" element={<AllUsers />} />
          <Route path="Add-users" element={<AddUser />} />
          <Route path="All-groups" element={<AllGroups />} />
          <Route path="Add-group" element={<AddGroup />} />
        </Routes>
      </div>
    </div>
  );
}

export default Users;
