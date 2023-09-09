import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import InputField from "./core/inputField";
import { Validators } from "../Utilities/validator";
import StudentTable from "./studentTable";
import DropDownField from "./core/dropDownField";
import ButtonField from "./core/buttonField";

function SubjectAllocate() {
  return (
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
                <CardTitle tag="h5">Add New Subject</CardTitle>
                <form>
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
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
                <CardTitle tag="h5">Allocate a Teacher to Subject</CardTitle>
                <form>
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
                      <DropDownField
                        placeholder="Select a Teacher"
                        label="Teacher"
                      />
                    </div>
                    <div className="col">
                      <DropDownField
                        placeholder="Select a Subject"
                        label="Subject"
                      />
                    </div>
                  </div>
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
                      <ButtonField value="Allocate" />
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
                <CardTitle tag="h5">Existing Allocated List</CardTitle>
                <StudentTable />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectAllocate;
