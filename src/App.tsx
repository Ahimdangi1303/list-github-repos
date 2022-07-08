import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RepoList from "./pages/RepoList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepoList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
