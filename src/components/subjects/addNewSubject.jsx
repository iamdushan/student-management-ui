import React, { Component } from "react";
import InputField from "../core/inputField";
import ButtonField from "../core/buttonField";

import { Validators } from "../../Utilities/validator";

class AddNewSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form>
        <div className="row">
          <div className="col">
            <InputField
              type="number"
              label="Subject Id"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
            />
          </div>
          <div className="col">
            <InputField
              type="text"
              label="Subject Name"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <ButtonField value="Save" />
          </div>
        </div>
      </form>
    );
  }
}

export default AddNewSubject;
