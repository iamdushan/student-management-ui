import React, { Component } from "react";
import InputField from "../core/inputField";
import ButtonField from "../core/buttonField";

import { Validators } from "../../Utilities/validator";

class AddNewSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectId: "",
      subject: "",
    };
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { subjectId, subject } = this.state;

    return (
      <form>
        <div className="row">
          <div className="col">
            <InputField
              value={subjectId}
              type="number"
              label="Subject Id"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("subjectId")}
            />
          </div>
          <div className="col">
            <InputField
              value={subject}
              type="text"
              label="Subject Name"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("subject")}
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
