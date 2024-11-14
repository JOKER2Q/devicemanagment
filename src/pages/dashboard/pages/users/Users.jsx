import React, { useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom"; // Import useLocation
import AddUser from "./AddUser";
import AllGroups from "./AllGroups";
import AddGroup from "./AddGroup";
import "./user.css";
import AllUsers from "./AllUsers";

function Users() {
  const location = useLocation(); // Get the current location

  return (
    <div className="main-content pad-40">
      <div className="users-container">
        <div className="tabs-header flex">
          <NavLink
            to="All-users" // Add correct path here
            className={`tab-button`}
          >
            All Users
          </NavLink>
          <NavLink to="Add-users" className={`tab-button`}>
            Add User
          </NavLink>
          <NavLink to="All-groups" className={`tab-button`}>
            All Groups
          </NavLink>
          <NavLink to="Add-group" className={`tab-button`}>
            Add a Group
          </NavLink>
        </div>

        <Routes>
          <Route path="/Add-users" element={<AddUser />} />
          <Route path="/All-groups" element={<AllGroups />} />
          <Route path="/Add-group" element={<AddGroup />} />
          <Route path="/All-users" element={<AllUsers />} />
        </Routes>
      </div>
    </div>
  );
}

export default Users;
