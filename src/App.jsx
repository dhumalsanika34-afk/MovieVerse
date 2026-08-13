import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";

function App() {
  const path = window.location.pathname;
  console.log["current Path means current route:", path];
  if (path === "/") {
    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }
  else if (path === "/about") {
    return (
      <>
        <Navbar />
        <About />
      </>
    );
  }
  else if (path === "/contact") {
    return (
      <>
        <Navbar />
        <Contact />
      </>
    );
  }

}
export default App