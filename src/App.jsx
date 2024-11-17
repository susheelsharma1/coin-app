import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Task from "./Task";
import Layout from "./Layout";
import Home from "./Home";
import Invite from "./Invite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes with a common layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="task" element={<Task />} />
          <Route path="invite" element={<Invite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// A placeholder Home component


export default App;




