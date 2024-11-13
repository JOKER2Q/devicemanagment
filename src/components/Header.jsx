// Header.js
import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="statusSection">
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
