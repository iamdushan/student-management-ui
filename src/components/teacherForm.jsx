import React, { Component } from "react";
import StudentTable from "./studentTable";
import InputField from "./core/inputField";
import ButtonField from "./core/buttonField";
import { Validators } from "../Utilities/validator";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

class TeacherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      contactNo: "",
      email: "",
    };
  }

  handleSubmit = (params) => {};

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { firstName, lastName, contactNo, email } = this.state;
    return (
      //   <div className="container">
      //     <div className="row">
      //       <div className="col">
      //         <div className="card">
      //           <div className="card-body">
      //             <form onSubmit={this.handleSubmit()}>
      //               <div className="row">
      //                 <div className="col">
      //                   <InputField
      //                     value={firstName}
      //                     type="text"
      //                     label="First Name"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("firstName")}
      //                   />
      //                 </div>
      //                 <div className="col">
      //                   <InputField
      //                     value={lastName}
      //                     type="text"
      //                     label="Last Name"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("lastName")}
      //                   />
      //                 </div>
      //               </div>
      //               <div className="row mt-2">
      //                 <div className="col">
      //                   <InputField
      //                     value={contactPerson}
      //                     type="text"
      //                     label="Contact Person"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("contactPerson")}
      //                   />
      //                 </div>
      //                 <div className="col">
      //                   <InputField
      //                     value={contactNo}
      //                     type="number"
      //                     label="Contact Number"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                       {
      //                         check: Validators.contactNumber,
      //                         message:
      //                           "This number is incorrect! Please try again",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("contactNo")}
      //                   />
      //                 </div>
      //               </div>
      //               <div className="row mt-2">
      //                 <div className="col">
      //                   <InputField
      //                     value={email}
      //                     type="email"
      //                     label="Email"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                       {
      //                         check: Validators.email,
      //                         message:
      //                           "Entered Email is incorrect! Please try again",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("email")}
      //                   />
      //                 </div>
      //                 <div className="col">
      //                   <InputField
      //                     value={dateOfBirth}
      //                     type="date"
      //                     label="Date of Birth"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("dateOfBirth")}
      //                   />
      //                 </div>
      //               </div>
      //               <div className="row mt-2">
      //                 <div className="col">
      //                   <InputField
      //                     value={age}
      //                     type="number"
      //                     label="Age"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("age")}
      //                   />
      //                 </div>
      //                 <div className="col">
      //                   <InputField
      //                     value={classRoom}
      //                     type="text"
      //                     label="Class Room"
      //                     placeholder="Type here..."
      //                     validators={[
      //                       {
      //                         check: Validators.required,
      //                         message: "This field is required",
      //                       },
      //                     ]}
      //                     onChange={this.handleChange("classRoom")}
      //                   />
      //                 </div>
      //               </div>
      //               <div className="row mt-2">
      //                 <div className="col">
      //                   <button type="button" className="btn btn-success m-3">
      //                     Save
      //                   </button>
      //                   <button type="button" className="btn btn-danger m-3">
      //                     Delete
      //                   </button>
      //                   <button type="button" className="btn btn-warning m-3">
      //                     Reset
      //                   </button>
      //                 </div>
      //               </div>
      //             </form>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <StudentTable />
      //   </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <Card>
                <CardImg
                  width="50px"
                  height="50px"
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                  alt="GFG Logo"
                />
                <CardBody>
                  <CardTitle tag="h5">Teacher Form</CardTitle>
                  <form onSubmit={this.handleSubmit()}>
                    {" "}
                    <div className="row">
                      {" "}
                      <div className="col">
                        {" "}
                        <InputField
                          value={firstName}
                          type="text"
                          label="First Name"
                          placeholder="Type here..."
                          validators={[
                            {
                              check: Validators.required,
                              message: "This field is required",
                            },
                          ]}
                          onChange={this.handleChange("firstName")}
                        />
                      </div>
                      <div className="col">
                        <InputField
                          value={lastName}
                          type="text"
                          label="Last Name"
                          placeholder="Type here..."
                          validators={[
                            {
                              check: Validators.required,
                              message: "This field is required",
                            },
                          ]}
                          onChange={this.handleChange("lastName")}
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <InputField
                          value={contactNo}
                          type="number"
                          label="Contact Number"
                          placeholder="Type here..."
                          validators={[
                            {
                              check: Validators.required,
                              message: "This field is required",
                            },
                            {
                              check: Validators.contactNumber,
                              message:
                                "This number is incorrect! Please try again",
                            },
                          ]}
                          onChange={this.handleChange("contactNo")}
                        />
                      </div>
                      <div className="col">
                        <InputField
                          value={email}
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
                              message:
                                "Entered Email is incorrect! Please try again",
                            },
                          ]}
                          onChange={this.handleChange("email")}
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <ButtonField value="Save" />
                        <ButtonField value="Delete" styleClass="btn-danger" />
                        <ButtonField value="Reset" styleClass="btn-warning" />
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
            <div className="mt-3">
              <Card>
                <CardImg
                  width="50px"
                  height="50px"
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                  alt="GFG Logo"
                />
                <CardBody>
                  <CardTitle tag="h5">Teachers Details</CardTitle>
                  <StudentTable />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherForm;
