import React from "react";
import InputField from "../core/inputField";
import DropDownField from "../core/dropDownField";
import { Validators } from "../../Utilities/validator";

function Report() {
  function handleDropDown() {}
  function handleChange() {}
  return (
    <form>
      <div className="row">
        <div className="col">
          <DropDownField
            value=""
            placeholder="Select a Student"
            label="Student Name"
            onChange={() => handleDropDown()}
          />
        </div>
        <div className="col">
          <InputField
            type="text"
            label="Class Room"
            placeholder="Type here..."
            validators={[
              {
                check: Validators.required,
                message: "This field is required",
              },
            ]}
            onChange={() => handleChange()}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          {" "}
          <InputField
            type="number"
            label="Contact Person"
            placeholder="Type here..."
            validators={[
              {
                check: Validators.required,
                message: "This field is required",
              },
              {
                check: Validators.contactNumber,
                message: "This number is incorrect! Please try again",
              },
            ]}
            onChange={() => handleChange()}
          />
        </div>
        <div className="col">
          <InputField
            type="email"
            label="Email"
            placeholder="Type here..."
            validators={[
              {
                check: Validators.required,
                message: "This field is required",
              },
              {
                check: Validators.email,
                message: "Entered Email is incorrect! Please try again",
              },
            ]}
            onChange={() => handleChange()}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <InputField
            type="date"
            label="Contact No"
            placeholder="Type here..."
            validators={[
              {
                check: Validators.required,
                message: "This field is required",
              },
            ]}
            onChange={() => handleChange()}
          />
        </div>
        <div className="col">
          <InputField
            type="number"
            label="Date of Birth"
            placeholder="Type here..."
            validators={[
              {
                check: Validators.required,
                message: "This field is required",
              },
            ]}
            onChange={() => handleChange()}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col"></div>
      </div>
    </form>
  );
}

export default Report;
