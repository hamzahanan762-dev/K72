import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Agency from "./pages/agency";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

function App() {
  return (
    <div className="text-white">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/agencies" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
