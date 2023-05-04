//Part 3 

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateData from './components/CreateData';
import Contact from './components/Contact';
import Login from './components/Login';
import Profile from './components/Profile';
import Settings from './components/Settings';

function withAuthorization(WrappedComponent) {
  function AuthenticatedComponent(props) {
    // Replace with actual authentication check
    // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const isAuthenticated = true

    // Replace with actual authorization check
    const isAuthorized = true;

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    } else if (!isAuthorized) {
      return <div>Access Denied</div>;
    } else {
      return <WrappedComponent {...props} data="Data with auth" />;
    }
  }
  return AuthenticatedComponent;
}

function App(props) {
  const AuthDashboard = withAuthorization(Dashboard);
  const AuthCreateData = withAuthorization(CreateData);

  return (
    <Routes>
      <Route path="/" element={<Dashboard data={"Data without auth"}/>} />
      <Route path="/dashboard/*" element={<AuthDashboard />} />
      <Route path="/create/*" element={<AuthCreateData />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<div>About page</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      {/* Example of a route that requires authentication */}
      <Route path="/authenticated" element={<AuthDashboard />} />
      {/* Example of a route that requires authorization */}
      <Route path="/authorized" element={<AuthDashboard />} />
      {/* Example of a route that requires authentication and authorization */}
      <Route path="/auth-authorized" element={<AuthDashboard />} />
    </Routes>
  );
}

export default App;
