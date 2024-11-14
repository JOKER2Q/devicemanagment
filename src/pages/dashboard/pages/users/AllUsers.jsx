import React, { useEffect, useState } from "react";
import "../../../../components/table.css";
import axios from "axios";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?page=1&limit=10").then((res) => {
      setData(res.data);
    });
  }, []);
  const openOptions = (e) => {
    e.stopPropagation();
    const div = document.querySelectorAll("div.table tbody td div.options");
    div.forEach((ele, i) => {
      if (e.target !== ele) {
        ele.classList.remove("active-div");
      }
    });
    e.target.classList.toggle("active-div");
  };
  const tableData = data?.map((e) => {
    return (
      <tr key={e.id}>
        <td> {e.id} </td>
        <td> {e.title} </td>
        <td> {e.category} </td>
        <td>
          <i onClick={openOptions} className="options fa-solid fa-ellipsis"></i>
          <div className="options">
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}
              className="flex delete"
            >
              <i className="fa-solid fa-trash"></i> delete
            </div>
            <Link className="flex update">
              <i className="fa-regular fa-pen-to-square"></i>
              update
            </Link>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div class="tabel-container">
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
