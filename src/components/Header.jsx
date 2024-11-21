// Header.js
import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation()
  const headerClick = () => {
    const sideBar = document.querySelector(".sidebar");
    console.log(sideBar);
    sideBar?.classList.toggle("active-sidebar");
  };
  const devicesClick = () => {
    const sideBar = document.querySelector(".mini-sidebar-device-d");
    console.log(sideBar);
    sideBar?.classList.toggle("mini-sidebar-device-d-active");
  };
  return (
    <div className="header">
      <div className="statusSection">
        <div onClick={headerClick} className="icon-header">
          <i class="fa-solid fa-bars-staggered"></i>
        </div>
       {(location.pathname.includes("devices") || location.pathname.includes("logs")  )&& <div onClick={devicesClick} className="icon-device">
          <i class="fa-regular fa-hard-drive"></i>
        </div>}
        <div className="statusItem">
          <span className="statusText">Online</span>
          <span className="statusNumber">12</span>
        </div>
        <div className="statusItem">
          <span className="statusText">Offline</span>
          <span className="statusNumber">5</span>
        </div>
        <div className="statusItem">
          <span className="statusText">New</span>
          <span className="statusNumber">3</span>
        </div>
      </div>
      <div className="profileSection">
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="profileImage"
        />
      </div>
    </div>
  );
}

export default Header;
