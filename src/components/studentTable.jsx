import React, { useState, useEffect, Component } from "react";
// import axios from "axios";

// function StudentTable() {
//   const [students, setStudents] = useState([]);

//   // const fetchStudents = async (url) => {
//   //   try {
//   //     const res = await fetch(url);
//   //     const data = await res.json();
//   //     console.log(data);
//   //     if (test.lenght > 0) {
//   //       setStudents(data);
//   //     }
//   //   } catch (error) {}
//   // };

//   // useEffect(() => {
//   //   fetchStudents("https://localhost:44382/api/Students/GetAllStudents");
//   // }, []);

//   // useEffect(() => {
//   //   const getStudents = () => {
//   //     axios
//   //       .get("https://localhost:44382/api/Students/GetAllStudents")
//   //       .then((res) => {
//   //         setStudents(res.data);
//   //         console.log(res.data);
//   //       })
//   //       .catch((err) => {});
//   //   };
//   //   getStudents();
//   // }, []);

//   return (
//     <div className="student">
//       <div className="container">
//         <table className="table mt-3">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Contact Person</th>
//               <th>Contact No</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.firstName}</td>
//                 <td>{student.lastName}</td>
//                 <td>{student.contactPerson}</td>
//                 <td>{student.contactNo}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default StudentTable;
class StudentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastname: "",
      contactPerson: "",
      contactNo: "",
    };
  }

  componentDidMount() {
    fetch("https://localhost:44382/api/Students/GetAllStudents")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          firstName: json.firstName,
          lastname: json.lastname,
          contactPerson: json.contactPerson,
          contactNo: json.contactNo,
        });
      });
  }

  render() {
    const { firstName, lastname, contactPerson, contactNo } = this.state;

    return (
      <React.Fragment>
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
              {/* <tbody>
              {" "}
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.contactPerson}</td>
                  <td>{student.contactNo}</td>
                </tr>
              ))}
            </tbody> */}
              <tbody>
                <tr>
                  <td>{firstName}</td>
                  <td>{lastname}</td>
                  <td>{contactPerson}</td>
                  <td>{contactNo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StudentTable;
