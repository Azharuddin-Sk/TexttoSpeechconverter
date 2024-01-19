import React from "react";
import Header from "./components/Header";
import SpeechConverter from "./components/SpeechConverter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <SpeechConverter />
    </div>
  );
}

export default App;
