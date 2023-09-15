import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TableField from "../core/tableField";

function ClassRoomAllocateTable() {
  const [classrooms, setClassRooms] = useState([]);

  useEffect(() => {
    getClassRooms();
  }, []);

  const getClassRooms = async () => {
    const url =
      "https://localhost:44382/api/Teachers/GetAllocatedClassRoomToTeacher";
    await axios
      .get(url)
      .then((res) => {
        const result = res.data;
        if (result.statusCode === 200) {
          setClassRooms(result.listTeacherClassRoom);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const column = [
    { heading: "Teacher Name", value: "firstName" },
    { heading: "Class Room Name", value: "classRoomName" },
  ];
  return (
    <div className="classroom">
      <div className="container">
        <TableField data={classrooms} column={column} />
      </div>
    </div>
  );
}

export default ClassRoomAllocateTable;
