import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";
import StudentForm from "./components/studentForm";
// import StudentTable from "./components/studentTable";
import ClassAllocate from "./components/classAllocate";
import SubjectAllocate from "./components/subjectAllocate";
import StudentReport from "./components/studentReport";
import TeacherForm from "./components/teacherForm";

// class App extends Component {
//   render() {
//     return (

//     );
//   }
// }

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" Component={StudentForm} />
          <Route path="/teacher-form" Component={TeacherForm} />
          <Route path="/teacher-allocate-to-class" Component={ClassAllocate} />
          <Route
            path="/teacher-allocate-to-subject"
            Component={SubjectAllocate}
          />
          <Route path="/student-report" Component={StudentReport} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
