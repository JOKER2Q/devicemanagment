// Overview.js
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Overview() {
  return (
    <main className="main-content pad-40">
      <div className="overview  ">
        <NavLink></NavLink>
        <h2>Devices</h2>
        <div className="overview-content">
          <div className="overview-item">
            <h3>Devices Total</h3>
            <p>1500</p>
          </div>
          <div className="overview-item">
            <h3>Active Now</h3>
            <p>200</p>
          </div>
          <div className="overview-item">
            <h3>Download</h3>
            <p>45</p>
          </div>
        </div>
        <NavLink></NavLink>
        <h2>Users</h2>
        <div className="overview-content">
          <div className="overview-item">
            <h3>Users Total</h3>
            <p>1500</p>
          </div>
          <div className="overview-item">
            <h3>Active Now</h3>
            <p>200</p>
          </div>
          <div className="overview-item">
            <h3>Devices</h3>
            <p>45</p>
          </div>
        </div>
        <NavLink></NavLink>
        <h2>Server</h2>
        <div className="overview-content">
          <div className="overview-item">
            <h3>Device Total</h3>
            <p>1500</p>
          </div>
          <div className="overview-item">
            <h3>Active Now</h3>
            <p>200</p>
          </div>
          <div className="overview-item">
            <h3>Download</h3>
            <p>45</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Overview;
