import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import DropDownField from "../core/dropDownField";
import ButtonField from "../core/buttonField";

function ClassAllocateForm() {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = () => {
    const url = "https://localhost:44382/api/Teachers/GetAllTeachers";
    axios
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

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = () => {
    const url = "https://localhost:44382/api/ClassRooms/GetAllClassRooms";
    axios
      .get(url)
      .then((res) => {
        const result = res.data;
        if (result.statusCode === 200) {
          setClasses(result.listClassRoom);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form>
      <div className="row">
        <div className="col">
          <DropDownField
            data={teachers}
            value=""
            placeholder="Select a Teacher"
            label="Teacher"
          />
        </div>
        <div className="col">
          <DropDownField
            data={classes}
            value=""
            placeholder="Select a Class Room"
            label="Class Room"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <ButtonField value="Allocate" />
        </div>
      </div>
    </form>
  );
}

export default ClassAllocateForm;
