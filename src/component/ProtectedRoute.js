// import { Navigate, Outlet } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useEffect, useState } from 'react';
// import { app } from '../firebase'; // Assuming Firebase is initialized here

// const ProtectedRoute = () => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   if (loading) {
//     return <div>Loading...</div>; // Show loader while user state is being determined
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   // Render child routes if user is authenticated
//   return <Outlet />;
// };

// export default ProtectedRoute;

import { Navigate} from 'react-router-dom';
import Dashboard from './Dashboard'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { app } from '../firebase'; // Assuming Firebase is initialized here

const ProtectedRoute = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>; // Show loader while checking user status
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Dashboard />; // Render child routes if user is authenticated
};

export default ProtectedRoute;
