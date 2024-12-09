import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListStudent from './component/ListStudent';
import Addstudent from './component/Addstudent';
import UpdateData from './component/UpdateData';
import Facultymember from './component/FireStore database/Facultymember';
import Addfaculty from './component/FireStore database/Addfaculty';
import Updatefaculty from './component/FireStore database/Updatemember';
import SignUP from './component/singup_Login-compo/SignUP';
import Login from './component/singup_Login-compo/Login';
import ProtectedRoute from './component/ProtectedRoute';  // Import the ProtectedRoute

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="signup" element={<SignUP />} />
          <Route path="login" element={<Login />} />
          
          {/* Protect the dashboard route */}
          <Route path="dashboard" element={<ProtectedRoute />}>
            {/* These routes will be rendered as children of ProtectedRoute */}
            <Route path="" element={<ListStudent />} />
            <Route path="Add Student" element={<Addstudent />} />
            <Route path="Students List" element={<ListStudent />} />
            <Route path="UpdateData" element={<UpdateData />} />
            <Route path="Facultymember" element={<Facultymember />} />
            <Route path="Addfaculty" element={<Addfaculty />} />
            <Route path="Updatemember" element={<Updatefaculty />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
