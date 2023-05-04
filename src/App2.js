//Part1]2

// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import CreateData from './components/CreateData';
// import Contact from './components/Contact';
// import Login from './components/Login';

// function withAuthorization(WrappedComponent) {
//   function AuthenticatedComponent(props) {
//     // Replace with actual authentication check
//     // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
//     const isAuthenticated = true

//     // Replace with actual authorization check
//     const isAuthorized = true;

//     if (!isAuthenticated) {
//       return <Navigate to="/login" />;
//     } else if (!isAuthorized) {
//       return <div>Access Denied</div>;
//     } else {
//       return <WrappedComponent {...props} data="This is some data passed down from the parent" />;
//     }
//   }
//   return AuthenticatedComponent;
// }

// function App(props) {
//   const AuthDashboard = withAuthorization(Dashboard);
//   const AuthCreateData = withAuthorization(CreateData);

//   return (
//     <Routes>
//       <Route path="/dashboard" element={<AuthDashboard />} />
//       <Route path="/create" element={<AuthCreateData />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/about" element={<div>About page</div>} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// }

// export default App;

