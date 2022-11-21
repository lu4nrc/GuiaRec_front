import {Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const authed= localStorage.getItem("token") ? true: false
    return authed ? children : <Navigate to="/login" />;
  }
  export default PrivateRoute;