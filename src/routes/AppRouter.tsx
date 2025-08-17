import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Archive from "../pages/Archive";
import Team from "../pages/Team";
import Events from "../pages/Events";
import Contact from "../pages/Contact";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
