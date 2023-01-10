import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import React from "react";
import Clock from './components/Clock';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';

const App = () => {
  return (
    <div className="App">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="clockBody">
        <Routes>
          <Route path="/" exact element={<Clock />}></Route>
          <Route path="/timer" exact element={<Timer />}></Route>
          <Route path="/stopwatch" exact element={<Stopwatch />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
