// import React, { useEffect, useState } from "react";
// import { Route, Navigate } from "react-router-dom";  // Use Navigate here instead of Redirect
// import { getAuth } from "firebase/auth";
// import { app } from "../firebase";  // Assuming firebase configuration is in this file

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const auth = getAuth(app);
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//       }
//     });
    
//     return () => unsubscribe();
//   }, []);

//   if (isAuthenticated === null) {
//     // You can show a loading spinner here if you wish
//     return <div>Loading...</div>;
//   }

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />  // Use Navigate here instead of Redirect
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;
import { Navigate} from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase';  // Assuming you have initialized Firebase
import Dashboard from './Dashboard';

const ProtectedRoute = () => {
  const auth = getAuth(app);
  const user = auth.currentUser; // Check if a user is logged in

  if (!user) {
    // If no user is logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the child routes
  return <Dashboard />;
};

export default ProtectedRoute;
