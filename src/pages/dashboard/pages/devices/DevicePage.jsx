import React from "react";
import { Link, useParams } from "react-router-dom";
import "../css/Sidebar.css";

function DevicePage() {
  const { userId } = useParams(); // للحصول على معرف المستخدم من URL
  // استخدام معرف المستخدم لجلب بيانات المستخدم إذا كانت متوفرة في تطبيق حقيقي

  return (
    <div className="device">
      <div className="device-header flex">
        <ul className="device-info">
          <li>{userId}</li>
          <li>info2</li>
          <li>info3</li>
          <li>info4</li>
          <li>info5</li>
        </ul>
        <div className="input-container  flex">
          <input type="text" placeholder="Write some" name="" id="" />
          <label class="checkbox">
            <input type="checkbox" value="mind" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
