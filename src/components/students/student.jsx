import React from "react";
import StudentForm from "./studentForm";
import StudentTable from "./studentTable";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function Student() {
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
                <CardTitle tag="h5">Student Form</CardTitle>
                <StudentForm />
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
                <CardTitle tag="h5">Student Details</CardTitle>
                <StudentTable />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
