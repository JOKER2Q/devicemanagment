import React, { useState } from "react";
import "./user.css";

const AddUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    conf_password: "",
    group: "",
    role: "",
    permissions: [],
    devices: [],
  });

  const permissionsList = ["Admin", "User", "Editor", "Viewer"];
  const devicesList = ["Device 1", "Device 2", "Device 3", "Device 4"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxToggle = (type, value) => {
    setUserData((prevState) => ({
      ...prevState,
      [type]: prevState[type].includes(value)
        ? prevState[type].filter((item) => item !== value) // Remove if already selected
        : [...prevState[type], value], // Add if not selected
    }));
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.target.classList.toggle("active");
  };
  const handleDropdownSelect = (e, type) => {
    const selectedValue = e.target.textContent.trim();
    setUserData((prevState) => ({
      ...prevState,
      [type]: selectedValue,
    }));
    const inpElement = e.target.closest(".selecte").querySelector(".inp");
    inpElement.classList.remove("active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", userData);
    // Handle form submission logic, e.g., sending data to a backend
  };

  // Reusable Checkbox Component
  const CheckboxGroup = ({ type, items }) => (
    <div className="checkbox-group">
      {items.map((item) => (
        <div key={item} className="checkbox-item">
          <div
            className={`checkbox ${
              userData[type].includes(item) ? "active" : ""
            }`}
            onClick={() => handleCheckboxToggle(type, item)}
          ></div>
          <label>{item}</label>
        </div>
      ))}
    </div>
  );

  return (
    <div className="add-user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        {/* User Information */}
        <div className="form-group-user two-divs">
          <div>
            <label htmlFor="name">UserName:</label>
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
          <div>
            <label htmlFor="conf_password">Expiration Date:</label>
            <input
              type="date"
              name="conf_password"
              value={userData.conf_password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <label htmlFor="conf_password">Confirm Your Password:</label>
            <input
              type="password"
              name="conf_password"
              value={userData.conf_password}
              onChange={handleInputChange}
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="selecte">
            <label>Group:</label>
            <div onClick={handleClick} className="inp">
              {userData.group || "Select Group"}
            </div>
            <article>
              <h2 onClick={(e) => handleDropdownSelect(e, "group")}>Test1</h2>
              <h2 onClick={(e) => handleDropdownSelect(e, "group")}>Test2</h2>
            </article>
          </div>
          <div className="selecte">
            <label>Role:</label>
            <div onClick={handleClick} className="inp">
              {userData.role || "Select Role"}
            </div>
            <article>
              <h2 onClick={(e) => handleDropdownSelect(e, "role")}>Role1</h2>
              <h2 onClick={(e) => handleDropdownSelect(e, "role")}>Role2</h2>
            </article>
          </div>
        </div>

        {/* Permissions */}
        <div className="form-group-user">
          <label>Permissions:</label>
          <CheckboxGroup type="permissions" items={permissionsList} />
        </div>

        {/* Devices */}
        <div className="form-group-user">
          <label>Devices:</label>
          <CheckboxGroup type="devices" items={devicesList} />
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
