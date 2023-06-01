import { Routes, Route } from "react-router-dom";
import Register from "../register/Register";
import Navbar from "../navbar/Navbar";
import Login from "../login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
