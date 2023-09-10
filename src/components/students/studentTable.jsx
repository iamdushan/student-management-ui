import React, { useState, useEffect } from "react";
import axios from "axios";
import TableField from "../core/tableField";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = () => {
    const url = "https://localhost:44382/api/Students/GetAllStudents";
    axios
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
    // <div className="student">
    //   <div className="container">
    //     <table className="table mt-3">
    //       <thead>
    //         <tr>
    //           <th>First Name</th>
    //           <th>Last Name</th>
    //           <th>Contact Person</th>
    //           <th>Contact No</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {students &&
    //           students.map((student, index) => (
    //             <tr key={index}>
    //               <td>{student.firstName}</td>
    //               <td>{student.lastName}</td>
    //               <td>{student.contactPerson}</td>
    //               <td>{student.contactNo}</td>
    //             </tr>
    //           ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className="student">
      <div className="container">
        <TableField data={students} column={column} />
      </div>
    </div>
  );
}

export default StudentTable;
