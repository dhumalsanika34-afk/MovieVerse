import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
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
        <Footer/>
      </>
    );
  }
  else if (path === "/about") {
    return (
      <>
        <Navbar />
        <About />
        <Footer/>
      </>
    );
  }
  else if (path === "/contact") {
    return (
      <>
        <Navbar />
        <Contact />
        <Footer/>
      </>
    );
  }

}
export default App