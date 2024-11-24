import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const headerClick = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling to `window`
    const sideBar = document.querySelector(".sidebar");
    sideBar?.classList.toggle("active-sidebar");
  };

  const devicesClick = (e) => {
    e.stopPropagation(); // Prevents the event from bubbling to `window`
    const sideBar = document.querySelector(".mini-sidebar-device-d");
    sideBar?.classList.toggle("mini-sidebar-device-d-active");
  };

  useEffect(() => {
    const deviceBar = document.querySelector(".sidebar");
    deviceBar?.classList.remove("active-sidebar");
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Ensure we're not clicking on elements within the sidebar
      const sidebar = document.querySelector(".sidebar");
      const miniSidebar = document.querySelector(".mini-sidebar-device-d");

      // If the click is outside of these elements, remove the classes
      if (!sidebar?.contains(e.target) && !miniSidebar?.contains(e.target)) {
        sidebar?.classList.remove("active-sidebar");
        miniSidebar?.classList.remove("mini-sidebar-device-d-active");
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="statusSection">
        <div onClick={headerClick} className="icon-header">
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
        {(location.pathname.includes("devices") ||
          location.pathname.includes("logs")) && (
          <div onClick={devicesClick} className="icon-device">
            <i className="fa-regular fa-hard-drive"></i>
          </div>
        )}
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
