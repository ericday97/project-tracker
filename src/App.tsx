import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-project" element={<AddProject />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
