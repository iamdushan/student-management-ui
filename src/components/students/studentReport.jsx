import React from "react";
import Report from "./report";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function StudentReport() {
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
                <CardTitle tag="h5">Student Report</CardTitle>
                <Report />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentReport;
