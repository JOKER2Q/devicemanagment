import React from "react";
import "./logs.css";
import { useParams } from "react-router-dom";

const LogsPage = () => {
  const { logId } = useParams(); // Extract logId from URL
  const logs = [
    { id: 1, name: "Log 1", type: "Admin", status: "Online" },
    { id: 2, name: "Log 2", type: "User", status: "Offline" },
    { id: 3, name: "Log 3", type: "Guest", status: "Online" },
    { id: 4, name: "Log 4", type: "Guest", status: "Online" },
    { id: 5, name: "Log 5", type: "Guest", status: "Online" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
    { id: 6, name: "Log 6", type: "Guest", status: "Offline" },
  ];

  return (
    <div className="logs-page">
      <h1>Logs{logId}</h1>
      <div className="logs-table-div">
        <table className="logs-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.name}</td>
                <td>{log.type}</td>
                <td>{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsPage;
