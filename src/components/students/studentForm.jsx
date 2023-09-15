import React, { Component } from "react";
import ButtonField from "../core/buttonField";
import InputField from "../core/inputField";

import { Validators } from "../../Utilities/validator";

// function StudentForm() {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     contactPerson: "",
//     contactNo: "",
//     email: "",
//     dateOfBirth: "",
//     age: "",
//     classRoom: "",
//   });

//   // function handleInput(event) {
//   //   // const newData = { ...data };
//   //   // newData[e.target.id] = e.target.value;
//   //   // setData(newData);

//   //   // console.log(newData);

//   //   setData({ ...data, [event.target.name]: event.target.value });
//   // }

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios
//       .post("https://localhost:44382/api/Students/AddStudents", {
//         // firstName: data.firstName,
//         // lastName: data.lastName,
//         // contactPerson: data.contactPerson,
//         // contactNo: data.contactNo,
//         // email: data.email,
//         // dateOfBirth: data.dateOfBirth,
//         // age: data.age,
//         // classRoom: data.classRoom,
//         data,
//       })
//       .then((res) => {
//         //alert("Student Added!")
//         console.log(res);
//       })
//       .catch((err) => {
//         //alert("Student Not Added");
//         console.log(err);
//       });
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="row">
//                   <div className="col">
//                     <InputField
//                       value={}
//                       type="text"
//                       label="First Name"
//                       placeholder="Type here..."
//                       onChange={handleInput}
//                     />
//                     {/* <label className="mb-2">First Name</label>
//                     <input
//                       onChange={handleInput}
//                       id="firstName"
//                       value={data.firstName}
//                       type="text"
//                       className="form-control"
//                       placeholder="Type here.."
//                       name="firstName"
//                     /> */}
//                   </div>
//                   <div className="col">
//                     {/* <label className="mb-2">Last Name</label>
//                     <input
//                       onChange={handleInput}
//                       id="lastName"
//                       value={data.lastName}
//                       type="text"
//                       className="form-control"
//                       placeholder="Type here.."
//                       name="lastName"
//                     /> */}
//                   </div>
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col">
//                     {/* <label className="mb-2">Contact Person</label>
//                     <input
//                       onChange={handleInput}
//                       id="contactPerson"
//                       value={data.contactPerson}
//                       type="text"
//                       className="form-control"
//                       placeholder="Type here.."
//                       name="contactPerson"
//                     /> */}
//                   </div>
//                   <div className="col">
//                     {/* <label className="mb-2">Contact No</label>
//                     <input
//                       onChange={handleInput}
//                       id="contactNo"
//                       value={data.contactNo}
//                       type="text"
//                       className="form-control"
//                       placeholder="Type here.."
//                       name="contactNo"
//                     /> */}
//                   </div>
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col">
//                     {/* <label className="mb-2">Email</label>
//                     <input
//                       onChange={handleInput}
//                       id="email"
//                       value={data.email}
//                       type="text"
//                       className="form-control"
//                       placeholder="Type here.."
//                       name="email"
//                     /> */}
//                   </div>
//                   <div className="col">
//                     {/* <label className="mb-2">Date of Birth</label>
//                     <input
//                       onChange={handleInput}
//                       id="dateOfBirth"
//                       value={data.dateOfBirth}
//                       type="date"
//                       className="form-control"
//                       placeholder="Type here.."
//                       name="dateOfBirth"
//                     /> */}
//                   </div>
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col">
//                     {/* <label className="mb-2">Age</label>
//                     <input
//                       onChange={handleInput}
//                       id="age"
//                       value={data.age}
//                       type="text"
//                       className="form-control "
//                       name="age"
//                     /> */}
//                   </div>
//                   <div className="col">
//                     {/* <label className="mb-2">Class Room</label>
//                     <input
//                       onChange={handleInput}
//                       id="classRoom"
//                       value={data.classRoom}
//                       type="text"
//                       className="form-control "
//                       name="classRoom"
//                     /> */}
//                   </div>
//                 </div>
//                 <div className="row mt-2">
//                   <div className="col">
//                     <button type="button" className="btn btn-success m-3">
//                       Save
//                     </button>
//                     <button type="button" className="btn btn-danger m-3">
//                       Delete
//                     </button>
//                     <button type="button" className="btn btn-warning m-3">
//                       Reset
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <StudentTable />
//     </div>
//   );
// }

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      contactPerson: "",
      contactNo: "",
      email: "",
      dateOfBirth: "",
      age: "",
      classRoom: "",
    };
  }

  handleSave = (params) => {};

  handleChange = (key) => (value) => {
    //console.log({ [key]: value });
    this.setState({ [key]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      contactPerson,
      contactNo,
      email,
      dateOfBirth,
      age,
      classRoom,
    } = this.state;
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col">
      //       <div className="card">
      //         <div className="card-body">
      //           <form onSubmit={this.handleSubmit()}>
      //             <div className="row">
      //               <div className="col">
      //                 <InputField
      //                   value={firstName}
      //                   type="text"
      //                   label="First Name"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("firstName")}
      //                 />
      //               </div>
      //               <div className="col">
      //                 <InputField
      //                   value={lastName}
      //                   type="text"
      //                   label="Last Name"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("lastName")}
      //                 />
      //               </div>
      //             </div>
      //             <div className="row mt-2">
      //               <div className="col">
      //                 <InputField
      //                   value={contactPerson}
      //                   type="text"
      //                   label="Contact Person"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("contactPerson")}
      //                 />
      //               </div>
      //               <div className="col">
      //                 <InputField
      //                   value={contactNo}
      //                   type="number"
      //                   label="Contact Number"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                     {
      //                       check: Validators.contactNumber,
      //                       message:
      //                         "This number is incorrect! Please try again",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("contactNo")}
      //                 />
      //               </div>
      //             </div>
      //             <div className="row mt-2">
      //               <div className="col">
      //                 <InputField
      //                   value={email}
      //                   type="email"
      //                   label="Email"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                     {
      //                       check: Validators.email,
      //                       message:
      //                         "Entered Email is incorrect! Please try again",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("email")}
      //                 />
      //               </div>
      //               <div className="col">
      //                 <InputField
      //                   value={dateOfBirth}
      //                   type="date"
      //                   label="Date of Birth"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("dateOfBirth")}
      //                 />
      //               </div>
      //             </div>
      //             <div className="row mt-2">
      //               <div className="col">
      //                 <InputField
      //                   value={age}
      //                   type="number"
      //                   label="Age"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("age")}
      //                 />
      //               </div>
      //               <div className="col">
      //                 <InputField
      //                   value={classRoom}
      //                   type="text"
      //                   label="Class Room"
      //                   placeholder="Type here..."
      //                   validators={[
      //                     {
      //                       check: Validators.required,
      //                       message: "This field is required",
      //                     },
      //                   ]}
      //                   onChange={this.handleChange("classRoom")}
      //                 />
      //               </div>
      //             </div>
      //             <div className="row mt-2">
      //               <div className="col">
      //                 <button type="button" className="btn btn-success m-3">
      //                   Save
      //                 </button>
      //                 <button type="button" className="btn btn-danger m-3">
      //                   Delete
      //                 </button>
      //                 <button type="button" className="btn btn-warning m-3">
      //                   Reset
      //                 </button>
      //               </div>
      //             </div>
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <StudentTable />
      // </div>

      <form>
        <div className="row">
          <div className="col">
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
              value={contactPerson}
              type="text"
              label="Contact Person"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("contactPerson")}
            />
          </div>
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
                  message: "This number is incorrect! Please try again",
                },
              ]}
              onChange={this.handleChange("contactNo")}
            />
          </div>
        </div>
        <div className="row mt-2">
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
                  message: "Entered Email is incorrect! Please try again",
                },
              ]}
              onChange={this.handleChange("email")}
            />
          </div>
          <div className="col">
            <InputField
              value={dateOfBirth}
              type="date"
              label="Date of Birth"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("dateOfBirth")}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <InputField
              value={age}
              type="number"
              label="Age"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("age")}
            />
          </div>
          <div className="col">
            <InputField
              value={classRoom}
              type="text"
              label="Class Room"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("classRoom")}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <ButtonField value="Save" onClick={() => this.handleSave()} />
            <ButtonField value="Delete" styleClass="btn-danger" />
            <ButtonField value="Reset" styleClass="btn-warning" />
          </div>
        </div>
      </form>
    );
  }
}

export default StudentForm;
