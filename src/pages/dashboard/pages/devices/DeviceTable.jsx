import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DeviceTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(true); // To toggle the expand/collapse
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // Current time and date
  const [filteredTabs, setFilteredTabs] = useState([]);

  const tabs = [
    { id: 1, name: "Log 1", type: "Admin", status: "Online" },
    { id: 2, name: "Log 2", type: "User", status: "Offline" },
    { id: 3, name: "Log 3", type: "Guest", status: "Online" },
    { id: 4, name: "Log 4", type: "Guest", status: "Online" },
    { id: 5, name: "Log 5", type: "Guest", status: "Online" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
  ];

  const { tabId } = useParams(); // Retrieve the current tabId from the URL

  // Effect to update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle search input change and filter the tabs
  useEffect(() => {
    setFilteredTabs(
      tabs.filter((log) =>
        log.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Reload the data (just a placeholder action for this example)
  const handleReload = () => {
    console.log("Data reloaded");
    // You can add actual data reload logic here, like making an API call
  };

  // Toggle expand/collapse
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Format the current time to 24-hour format
  const formatTime = () => {
    const options = { hour12: false }; // Disable AM/PM
    const time = new Date().toLocaleTimeString([], options);
    const date = new Date().toLocaleDateString();
    return { time, date };
  };

  const { time, date } = formatTime(); // Get formatted time and date

  return (
    <div className="tab-content">
      <div className="table-header">
        {/* Reload Button */}
        <button onClick={handleReload} className="reload-button">
          <i className="fa-solid fa-sync-alt"></i>
        </button>

        {/* Search Field */}
        <input
          type="text"
          className="search-field"
          placeholder="Search in tabs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Date/Timer */}
        <div className="date-timer flex">
          <p>
            {time} | {date}
          </p>
          <h1>Last Update</h1>
        </div>

        {/* Expand Button */}
        <button onClick={toggleExpand} className="expand-button">
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        </button>
      </div>

      {/* Table Content */}
      {expanded && (
        <table className="tab-content-table">
          <thead>
            <tr>
              <th>{tabId}</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTabs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.name}</td>
                <td>{log.type}</td>
                <td>{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DeviceTable;
