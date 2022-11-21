import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login";
// import History from './helpers/history';
import PrivateRoute from "./context/auth/PrivateRouter";
const Router = () => {
  return (
    <BrowserRouter  >
      <Routes >
        <Route
          exact
          path="/"
          element={<Landing />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;