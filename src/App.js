import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import React from "react";
import Clock from './components/Clock';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
// import { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Clock />}></Route>
        <Route path="/timer" exact element={<Timer />}></Route>
        <Route path="/stopwatch" exact element={<Stopwatch />}></Route>
      </Routes>
    </div>
  );
};

export default App;
