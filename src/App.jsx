import Home from "./pages/Home";
import Course from "./pages/Course";
import ChoiseDivision from "./pages/ChoiseDivison";
import VidioCourse from "./pages/VidioCourse";
import MateriList from "./pages/MateriList ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatAI from "./pages/ChatAI";
import MateriAdmin from "./pages/MateriAdmin";
import ChallengeAdmin from "./pages/ChallengeAdmin";


import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/choiseDivision" element={<ChoiseDivision />} />
        <Route path="/vidioCourse" element={<VidioCourse />} />
        <Route path="/materilist" element={<MateriList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatAI" element={<ChatAI />} />
        <Route path="/materiAdmin" element={<MateriAdmin />} />
        <Route path="/challengeAdmin" element={<ChallengeAdmin />} />
        <Route path="/course/:id" element={<VidioCourse />} />


      </Routes>
    </>
  )
}


export default App