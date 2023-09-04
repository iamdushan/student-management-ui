import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentTable() {
  const [data, setData] = useState("");

  useEffect(() => {
    function getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    // <div className="row">
    //   <div className="col">
    //     <div className="card mt-5">
    //       <div className="card-body">
    //         <table class="table">
    //           <thead class="table-dark">
    //             <tr>
    //               <th scope="col">First Name</th>
    //               <th scope="col">Last Name</th>
    //               <th scope="col">Contact Person</th>
    //               <th scope="col">Contact No</th>
    //             </tr>
    //           </thead>
    //           <tbody>{data.map()}</tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="student">
      <div className="container">
        <table className="table mt-3">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Person</th>
              <th>Contact No</th>
            </tr>
          </thead>
          <tbody>{}</tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
