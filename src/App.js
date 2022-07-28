import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import View from "./component/View";
import StudentTable from "./component/StudentTable";
import TeacherTable from "./component/TeacherTable";
import Create from "./component/Create";
import StudentCreate from "./component/StudentCreate";
import TeacherCreate from "./component/TeacherCreate";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="view" element={<View/>}>
            <Route path="teachertable" element={<TeacherTable/>}/>  
            <Route path="studenttable" element={<StudentTable/>}/>          
          </Route>          
          <Route path="create" element={<Create />}>
            <Route path="create-teacher" element={<TeacherCreate/>}/>
            <Route path="create-student" element={<StudentCreate/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
