import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/experience" element={<Experience />}/>
      </Routes>
        
    </div>
  );
}

export default App;
