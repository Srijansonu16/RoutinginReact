import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles.css";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Sample from "./Pages/Sample";

import Content from "./Components/Content";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//import { Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/sand" element={<About />} />
        <Route path="/about">
          <Route path="sand" element={<About />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Content />
      <Footer />
    </div>
  );
}
