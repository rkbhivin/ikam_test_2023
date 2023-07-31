import "./App.css";
import Routes from "./routes";
import Sidebar from "./components/sidebar";
import NavBar from "./components/navBar";
import React, { useState } from "react";
import Home from "./pages/home";

function App() {
  const [value, setValue] = useState("0");
  const handleChange = (value) => {
    setValue(value);
  };

  const handleChangeFromPage = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <Sidebar handleChange={handleChange} />
        <div className="content-style">
          {/* <Routes /> */}
          <Home value={value} handleChangeFromPage={handleChangeFromPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
