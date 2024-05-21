import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Button } from "@material-tailwind/react";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
