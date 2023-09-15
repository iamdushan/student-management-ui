import React, { useState, useEffect } from "react";
import axios from "axios";
import TableField from "../core/tableField";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const url = "https://localhost:44382/api/Students/GetAllStudents";
    await axios
      .get(url)
      .then((res) => {
        const result = res.data;
        if (result.statusCode === 200) {
          setStudents(result.listStudent);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const column = [
    { heading: "First Name", value: "firstName" },
    { heading: "Last Name", value: "lastName" },
    { heading: "Contact Person", value: "contactPerson" },
    { heading: "Contact No", value: "contactNo" },
  ];

  return (
    <div className="student">
      <div className="container">
        <TableField data={students} column={column} />
      </div>
    </div>
  );
}

export default StudentTable;
