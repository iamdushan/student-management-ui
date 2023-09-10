import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

import ClassRoomAllocateTable from "./classRoomAllocateTable";
import ClassAllocateForm from "./classAllocateForm";
import AddNewClass from "./addNewClass";

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
                <AddNewClass />
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
                <ClassAllocateForm />
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
                <ClassRoomAllocateTable />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassAllocate;
