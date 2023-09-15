import React, { useState, useEffect } from "react";
import TableField from "../core/tableField";
import axios from "axios";

function SubjectAllocateTable() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    const url =
      "https://localhost:44382/api/Teachers/GetAllocatedSubjectToTeachers";
    await axios
      .get(url)
      .then((res) => {
        const result = res.data;
        if (result.statusCode === 200) {
          setSubjects(result.listTeacherSubject);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const column = [
    { heading: "Teacher Name", value: "firstName" },
    { heading: "Subject Name", value: "subjectName" },
  ];

  return (
    <div className="subject">
      <div className="container">
        <TableField data={subjects} column={column} />
      </div>
    </div>
  );
}

export default SubjectAllocateTable;
