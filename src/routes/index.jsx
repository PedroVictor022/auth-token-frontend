import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";
import Home from "../components/home";
import { PrivateRoutes } from "./privateRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
