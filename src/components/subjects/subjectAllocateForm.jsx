import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import DropDownField from "../core/dropDownField";
import ButtonField from "../core/buttonField";

function SubjectAllocateForm() {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);

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
    getSubjects();
  }, []);

  const getSubjects = () => {
    const url = "https://localhost:44382/api/Subjects/GetAllSubjects";
    axios
      .get(url)
      .then((res) => {
        const result = res.data;
        if (result.statusCode === 200) {
          setSubjects(result.listSubject);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleDropDown() {}

  function handleAllocate() {}

  return (
    <form>
      <div className="row">
        <div className="col">
          <DropDownField
            data={teachers}
            value={teachers}
            placeholder="Select a Teacher"
            label="Teacher"
            onChange={() => handleDropDown()}
          />
        </div>
        <div className="col">
          <DropDownField
            data={subjects}
            value=""
            placeholder="Select a Subject"
            label="Subject"
            onChange={() => handleDropDown()}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ButtonField value="Allocate" onClick={handleAllocate()} />
        </div>
      </div>
    </form>
  );
}

export default SubjectAllocateForm;
