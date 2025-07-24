import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
