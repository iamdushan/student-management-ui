import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

import SubjectAllocateTable from "./subjectAllocateTable";
import SubjectAllocateForm from "./subjectAllocateForm";
import AddNewSubject from "./addNewSubject";

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
                <AddNewSubject />
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
                <SubjectAllocateForm />
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
                <SubjectAllocateTable />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectAllocate;
