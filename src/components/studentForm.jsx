import axios, { Axios } from "axios";
import React from "react";

import { useState, useEffect } from "react";

function StudentForm() {
  const url = "https://localhost:44354/AddStudent";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    contactPerson: "",
    contactNo: "",
    email: "",
    dateOfBirth: "",
    age: "",
    classRoom: "",
  });
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        firstName: data.firstName,
        lastName: data.lastName,
        contactPerson: data.contactPerson,
        contactNo: data.contactNo,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        age: data.age,
        classRoom: data.classRoom,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);

    console.log(newData);
  }

  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <form onSubmit={(e) => submit(e)}>
              <div className="row">
                <div className="col">
                  <label className="mb-2">First Name</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="firstName"
                    value={data.firstName}
                    type="text"
                    className="form-control"
                    placeholder="Type here.."
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label className="mb-2">Last Name</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="lastName"
                    value={data.lastName}
                    type="text"
                    className="form-control"
                    placeholder="Type here.."
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <label className="mb-2">Contact Person</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="contactPerson"
                    value={data.contactPerson}
                    type="text"
                    className="form-control"
                    placeholder="Type here.."
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label className="mb-2">Contact No</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="contactNo"
                    value={data.contactNo}
                    type="text"
                    className="form-control"
                    placeholder="Type here.."
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <label className="mb-2">Email</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="email"
                    value={data.email}
                    type="text"
                    className="form-control"
                    placeholder="Type here.."
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label className="mb-2">Date of Birth</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="dateOfBirth"
                    value={data.dateOfBirth}
                    type="date"
                    className="form-control"
                    placeholder="Type here.."
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <label className="mb-2">Age</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="age"
                    value={data.age}
                    type="text"
                    className="form-control "
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <label className="mb-2">Class Room</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="classRoom"
                    value={data.classRoom}
                    type="text"
                    className="form-control "
                    aria-label="First name"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <button type="button" id="submit" className="btn btn-success">
                    Save
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                  <button type="button" className="btn btn-warning">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
