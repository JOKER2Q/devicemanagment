import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom"; // Import useLocation for route handling
import "../css/Sidebar.css"; // Assuming your styles are here
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";

function DevicePage() {
  const { userId } = useParams();
  const [navInput, setNavInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState("fileManager"); // Track the selected tab

  const [files, setFiles] = useState([
    {
      name: "Documents",
      isDirectory: true,
      path: "/Documents",
      updatedAt: "2024-09-09T10:30:00Z",
    },
    {
      name: "Pictures",
      isDirectory: true,
      path: "/Pictures",
      updatedAt: "2024-09-09T11:00:00Z",
    },
    {
      name: "Pic.png",
      isDirectory: false,
      path: "/Pictures/Pic.png",
      updatedAt: "2024-09-08T16:45:00Z",
      size: 2048,
    },
  ]);

  const location = useLocation();

  // Effect to update seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Format time
  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  // Set active tab based on the current route
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("fileManager")) {
      setActiveTab("fileManager");
    } else if (currentPath.includes("tab1")) {
      setActiveTab("tab1");
    } else if (currentPath.includes("tab2")) {
      setActiveTab("tab2");
    } else if (currentPath.includes("tab3")) {
      setActiveTab("tab3");
    } else if (currentPath.includes("tab4")) {
      setActiveTab("tab4");
    } else if (currentPath.includes("report-tab")) {
      setActiveTab("report-tab");
    }
  }, [location]);

  return (
    <div className="device">
      {/* Device Header */}
      <div className="device-header flex">
        <div className="device-info">
          <Link to={``} className="info flex center">
            <i className="center photo fa-solid fa-user"></i>
            <article>
              <h4>{`Device : ${userId}`}</h4>
              <p>Test Hello {userId}</p>
            </article>
          </Link>

          {/* Input Container */}
          <div className="input-container flex">
            <input
              onInput={(e) => setNavInput(e.target.value)}
              value={navInput}
              type="text"
              placeholder="Write something"
            />
          </div>

          {/* Information Section */}
          <div className="information flex">
            <div className="info-column flex column">
              <div className="info-div flex center">
                <i className="fa-solid fa-location-dot"></i>
                <p>192.168.1.2</p>
              </div>
              <div className="info-div flex center">
                <i className="fa-solid fa-bolt"></i>
                <p>80%</p>
              </div>
            </div>
            <div className="info-column flex column">
              <div className="info-div flex center">
                <i className="fa-solid fa-wifi"></i>
                <p>Download speed</p>
              </div>
              <div className="info-div flex center">
                <i className="fa-solid fa-bolt"></i>
                <p>50%</p>
              </div>
            </div>
            <div className="info-column flex column">
              <div className="info-div flex center">
                <div className="time-now">{formatTime()}</div>
                <p>Timer</p>
              </div>
              <div className="info-div flex center">
                <div className="time-now">24/2/26</div>
                <p>Date</p>
              </div>
            </div>
            <div className="info-column flex column">
              <div className="info-div flex center">
                <i className="fa-solid fa-file"></i>
                <p>Choose path</p>
              </div>
              <div className="info-div flex center">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
                <p>Auto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Header */}
      <div className="tabs-header flex">
        {/* File Manager Tab */}
        <NavLink
          to="fileManager"
          className={`tab-button ${
            activeTab === "fileManager" ? "active" : ""
          }`}
        >
          File Manager
        </NavLink>

        {/* Other Tabs */}
        {["tab1", "tab2", "tab3", "tab4"].map((tab) => (
          <NavLink
            key={tab}
            to={`${tab}`}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
          >
            {tab.replace("tab", "Tab ")}
          </NavLink>
        ))}

        {/* Static Tab 5 */}
        <NavLink
          to="report-tab"
          className={`tab-button ${activeTab === "report-tab" ? "active" : ""}`}
        >
          Tab 5
        </NavLink>
      </div>

      {/* Tabs Content */}
      <div className="tabs-content">
        <Outlet />
      </div>
    </div>
  );
}

export default DevicePage;
