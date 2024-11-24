import React, { useEffect, useState } from "react";
import "../../../../components/table.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AllGroups = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?page=1&limit=10")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  const openOptions = (e) => {
    e.stopPropagation();
    const div = document.querySelectorAll("div.table tbody td div.options");
    console.log(div);

    div.forEach((ele, i) => {
      if (+e.target.dataset.index !== i) {
        console.log(e.target);
        ele.classList.remove("active-div");
      }
    });
    div[e.target.dataset.index].classList.toggle("active-div");
  };
  const tableData = data?.map((e, i) => {
    return (
      <tr key={e.id}>
        <td> {e.id} </td>
        <td> {e.title} </td>
        <td> {e.category} </td>
        <td>
          <i
            onClick={openOptions}
            className="options fa-solid fa-ellipsis"
            data-index={i}
          ></i>
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
    <div className="tabel-container">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Group Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGroups;
