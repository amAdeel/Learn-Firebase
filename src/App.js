import './App.css';
// import Adddata from './component/Adddata';
// import Addstudent from './component/Addstudent';
import Dashboard from './component/Dashboard';
// import ListStudent from './component/ListStudent';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListStudent from './component/ListStudent';
import Addstudent from './component/Addstudent';
import UpdateData from './component/UpdateData';
import Facultymember from './component/FireStore database/Facultymember';
import Addfaculty from './component/FireStore database/Addfaculty';
import Updatefaculty from './component/FireStore database/Updatemember';

// ya hum route bana rehy hai jo ak route bany ga next me hum route folder sy banty ty par react me assa nahi yaha par route bany k liy react-router-dom ki library ko install karna hota hai os ka bad hum kohi route bana sakty hai nijy sara tarika hai . npm install react-router-dom .

const myRouter= createBrowserRouter([
  {path:'',Component:Dashboard, children:[
    {path:'',Component:ListStudent},
    {path:'Add Student',Component:Addstudent},
    {path:'Students List',Component:ListStudent},
    {path:'UpdateData',Component:UpdateData},
    {path:'Facultymember',Component:Facultymember},
    {path:'Addfaculty',Component:Addfaculty},
    {path:'Updatemember',Component:Updatefaculty}

  ]}
])

function App() {
  return (
    <div className="App">
      {/* <Adddata/>
      <Addstudent/>
      <ListStudent/> */}
      < RouterProvider router={myRouter}/>
    </div>
  );
}

export default App;
