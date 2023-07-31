import "./App.css";
import Routes from "./routes";
import Sidebar from "./components/sidebar";
import NavBar from "./components/navBar";
import React, { useReducer } from "react";

const initialState = { count: 0 };

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content-wrapper">
        <Sidebar />
        <div className="content-style">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
