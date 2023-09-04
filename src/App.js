import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import StudentForm from "./components/studentForm";
import StudentTable from "./components/studentTable";

class App extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <NavBar />
      //   <main className="container"></main>
      //   <StudentForm />
      // </React.Fragment>
      <div>
        <NavBar />
        <StudentForm />
        <StudentTable />
      </div>
    );
  }
}

export default App;
