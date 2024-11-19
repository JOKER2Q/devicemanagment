import React, { useState } from "react";

const ReportDevice = () => {
  const [inputData, setInputData] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    const newData = [...inputData];
    newData[index] = value;
    setInputData(newData);
  };

  const handleSubmit = () => {
    alert("Form Submitted");
  };
  return (
    <div className="tab-content-table tab-content">
      <div className="devicePage-container">
        <div className="devicePage-left">
          {inputData.map((data, index) => (
            <div key={index} className="devicePage-input-group">
              <input
                type="text"
                value={data}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Enter text"
              />
            </div>
          ))}
          <button className="devicePage-submit-btn" onClick={handleSubmit}>
            Edit
          </button>
        </div>

        <div className="devicePage-right">
          <textarea
            className="devicePage-report-textarea"
            placeholder="Write your device report here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ReportDevice;
