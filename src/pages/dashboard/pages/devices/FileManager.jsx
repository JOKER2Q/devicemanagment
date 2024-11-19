import React, { useState } from "react";
import { FileManager as FileManager2 } from "@cubone/react-file-manager";

const FileManager = () => {
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

  return (
    <div className="tab-content">
      <FileManager2 files={files} />
    </div>
  );
};

export default FileManager;
