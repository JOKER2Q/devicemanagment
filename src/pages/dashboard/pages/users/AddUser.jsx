import React, { useState } from "react";
import "./user.css";

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    permissions: [],
    devices: [],
  });

  const permissionsList = ["Admin", "Editor", "Viewer"];
  const devicesList = ["Device 1", "Device 2", "Device 3", "Device 4"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    let updatedList = [...userData[type]];

    if (checked) {
      updatedList.push(value); // Add the permission/device if checked
    } else {
      updatedList = updatedList.filter((item) => item !== value); // Remove if unchecked
    }

    setUserData({
      ...userData,
      [type]: updatedList,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", userData);
    // Handle form submission, such as sending data to backend
  };

  return (
    <div className="add-user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        {/* User Information */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            required
          />
        </div>

        {/* Permissions Checkbox */}
        <div className="form-group">
          <label>Permissions:</label>
          <div className="checkbox-group">
            {permissionsList.map((permission) => (
              <div key={permission} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`permission-${permission}`}
                  value={permission}
                  checked={userData.permissions.includes(permission)}
                  onChange={(e) => handleCheckboxChange(e, "permissions")}
                />
                <label htmlFor={`permission-${permission}`}>{permission}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Devices Checkbox */}
        <div className="form-group">
          <label>Devices:</label>
          <div className="checkbox-group">
            {devicesList.map((device) => (
              <div key={device} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`device-${device}`}
                  value={device}
                  checked={userData.devices.includes(device)}
                  onChange={(e) => handleCheckboxChange(e, "devices")}
                />
                <label htmlFor={`device-${device}`}>{device}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
