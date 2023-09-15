import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TableField from "../core/tableField";

function TeacherTable() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    const url = "https://localhost:44382/api/Teachers/GetAllTeachers";
    await axios
      .get(url)
      .then((res) => {
        const result = res.data;
        if (result.statusCode === 200) {
          setTeachers(result.listTeacher);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const column = [
    { heading: "First Name", value: "firstName" },
    { heading: "Last Name", value: "lastName" },
    { heading: "Contact No", value: "contactNo" },
    { heading: "Email", value: "email" },
  ];
  return (
    <div className="teacher">
      <div className="container">
        <TableField data={teachers} column={column} />
      </div>
    </div>
  );
}

export default TeacherTable;
