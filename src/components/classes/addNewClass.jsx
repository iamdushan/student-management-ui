import React, { Component } from "react";
import InputField from "../core/inputField";
import ButtonField from "../core/buttonField";
import { Validators } from "../../Utilities/validator";

class AddNewClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classId: "",
      classRoomName: "",
    };
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleSave = (e) => {};

  handleSubmit = (e) => {};

  render() {
    const { classId, classRoomName } = this.state;

    return (
      <form onSubmit={this.handleSubmit()}>
        <div className="row">
          <div className="col">
            <InputField
              value={classId}
              type="number"
              label="Class Room Id"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("classId")}
            />
          </div>
          <div className="col">
            <InputField
              value={classRoomName}
              type="text"
              label="Class Room Name"
              placeholder="Type here..."
              validators={[
                {
                  check: Validators.required,
                  message: "This field is required",
                },
              ]}
              onChange={this.handleChange("classRoomName")}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <ButtonField value="Save" onClick={() => this.handleSave()} />
          </div>
        </div>
      </form>
    );
  }
}

// function AddNewClass() {
//   const [details, setDetails] = useState({
//     classId: "",
//     classRoomName: "",
//   });

//   const handleChange = (e) => {
//     const newData = { ...details };
//     newData[e.target.id] = e.target.value;
//     setDetails(newData);
//     console.log(newData);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("", {
//         classId: details.classId,
//         classRoomName: details.classRoomName,
//       })
//       .then((res) => {
//         console.log(res.data);
//       });
//   };

//   return (
//     <form onSubmit={(e) => handleSubmit(e)}>
//       <div className="row">
//         <div className="col">
//           <InputField
//             value=""
//             name="id"
//             type="number"
//             label="Class Room Id"
//             placeholder="Type here..."
//             validators={[
//               {
//                 check: Validators.required,
//                 message: "This field is required",
//               },
//             ]}
//             onChange={(e) => handleChange(e)}
//           />
//         </div>
//         <div className="col">
//           <InputField
//             value=""
//             name="classRoom"
//             type="text"
//             label="Class Room Name"
//             placeholder="Type here..."
//             validators={[
//               {
//                 check: Validators.required,
//                 message: "This field is required",
//               },
//             ]}
//             onChange={(e) => handleChange(e)}
//           />
//         </div>
//       </div>
//       <div className="row mt-2">
//         <div className="col">
//           <ButtonField value="Save" onClick={() => this.handleSave()} />
//         </div>
//       </div>
//     </form>
//   );
// }

export default AddNewClass;
