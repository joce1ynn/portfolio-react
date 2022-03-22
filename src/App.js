import React, { useState } from "react";
// import react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";
import Resume from "./components/Pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const RenderPage = () => {
    switch (currentPage) {
      case "Home":
      default:
        return <Home />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage}></Header>
      <RenderPage />
      <Footer />
    </div>
  );
}

export default App;
