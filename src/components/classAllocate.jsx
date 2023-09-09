import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import InputField from "./core/inputField";
import StudentTable from "./studentTable";
import { Validators } from "../Utilities/validator";
import ButtonField from "./core/buttonField";
import DropDownField from "./core/dropDownField";

function ClassAllocate() {
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
                <CardTitle tag="h5">Add New Class Room</CardTitle>
                <form>
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
                      <InputField
                        type="number"
                        label="Class Room Id"
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
                        label="Class Room Name"
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
                <CardTitle tag="h5">Allocate a Teacher to Class Room</CardTitle>
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

export default ClassAllocate;
