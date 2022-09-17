import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/newuser" element={<SignUp />} />
        <Route path="/userdashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
