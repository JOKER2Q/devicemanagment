import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Sidebar.css";
import { FileManager } from "@cubone/react-file-manager";
import "@cubone/react-file-manager/dist/style.css";
function DevicePage() {
  const { userId } = useParams(); // للحصول على معرف المستخدم من URL
  // استخدام معرف المستخدم لجلب بيانات المستخدم إذا كانت متوفرة في تطبيق حقيقي

  const [navInput, setNavInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState("fileManager"); // Track the selected tab
  const [files, setFiles] = useState([
    {
      name: "Documents",
      isDirectory: true, // Folder
      path: "/Documents", // Located in Root directory
      updatedAt: "2024-09-09T10:30:00Z", // Last updated time
    },
    {
      name: "Pictures",
      isDirectory: true,
      path: "/Pictures", // Located in Root directory as well
      updatedAt: "2024-09-09T11:00:00Z",
    },
    {
      name: "Pic.png",
      isDirectory: false, // File
      path: "/Pictures/Pic.png", // Located inside the "Pictures" folder
      updatedAt: "2024-09-08T16:45:00Z",
      size: 2048, // File size in bytes (example: 2 KB)
    },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the timer in HH:MM:SS
  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="device">
      <div className="device-header flex">
        <div className="device-info">
          <Link to={``} className="info flex center">
            <i className="center photo fa-solid fa-user"></i>
            <article>
              <h4>{`device : ${userId}`}</h4>
              <p> test hello{userId}</p>
            </article>
          </Link>
          <div className="input-container  flex ">
            <input
              onInput={(e) => [setNavInput(e.target.value)]}
              value={navInput}
              type="text"
              placeholder="Write some"
              name=""
              id=""
            />
            {/* <label className="checkbox">
              <input type="checkbox" value="mind" />
              <span className="slider"></span>
            </label> */}
          </div>
          <div className="information flex ">
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
                <p>download speed</p>
              </div>
              <div className="info-div flex center">
                <i className="fa-solid fa-bolt"></i>
                <p>50%</p>
              </div>
            </div>
            <div className="info-column flex column">
              <div className="info-div flex center">
                <div className="time-now"> {formatTime()} </div>
                <p>Timer</p>
              </div>
              <div className="info-div flex center">
                <div className="time-now"> 24/2/26 </div>
                <p>Date</p>
              </div>
            </div>
            <div className="info-column flex column">
              <div className="info-div flex center">
                <i class="fa-solid fa-file"></i>
                <p>choose path</p>
              </div>
              <div className="info-div flex center">
                <label className="checkbox">
                  <input type="checkbox" value="mind" />
                  <span className="slider"></span>
                </label>
                <p>auto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Header */}
      <div className="tabs-header flex">
        <button
          className={`tab-button ${
            activeTab === "fileManager" ? "active" : ""
          }`}
          onClick={() => setActiveTab("fileManager")}
        >
          File Manager
        </button>
        <button
          className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
        <button
          className={`tab-button ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => setActiveTab("tab3")}
        >
          Tab 3
        </button>
        <button
          className={`tab-button ${activeTab === "tab4" ? "active" : ""}`}
          onClick={() => setActiveTab("tab4")}
        >
          Tab 4
        </button>
        <button
          className={`tab-button ${activeTab === "tab5" ? "active" : ""}`}
          onClick={() => setActiveTab("tab5")}
        >
          Tab 5
        </button>
        <button
          className={`tab-button ${activeTab === "tab6" ? "active" : ""}`}
          onClick={() => setActiveTab("tab6")}
        >
          Tab 6
        </button>
      </div>

      {/* Tabs Content */}
      <div className="tabs-content file-manager">
        {activeTab === "fileManager" && (
          <div className="tab-content">
            <FileManager files={files} />
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="tab-content">
            <h3>Tab 2</h3>
            <p>Content for Tab 2.</p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="tab-content">
            <h3>Tab 3</h3>
            <p>Content for Tab 3.</p>
          </div>
        )}
        {activeTab === "tab4" && (
          <div className="tab-content">
            <h3>Tab 4</h3>
            <p>Content for Tab 4.</p>
          </div>
        )}
        {activeTab === "tab5" && (
          <div className="tab-content">
            <h3>Tab 5</h3>
            <p>Content for Tab 5.</p>
          </div>
        )}
        {activeTab === "tab6" && (
          <div className="tab-content">
            <h3>Tab 6</h3>
            <p>Content for Tab 6.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DevicePage;
