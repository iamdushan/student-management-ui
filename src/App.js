import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navBar";
import Student from "./components/students/student";
import ClassAllocate from "./components/classes/classAllocate";
import SubjectAllocate from "./components/subjects/subjectAllocate";
import StudentReport from "./components/students/studentReport";
import Teacher from "./components/teachers/teacher";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Student} />
          <Route path="/teachers" Component={Teacher} />
          <Route path="/allocate-to-class" Component={ClassAllocate} />
          <Route path="/allocate-to-subject" Component={SubjectAllocate} />
          <Route path="/student-report" Component={StudentReport} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
