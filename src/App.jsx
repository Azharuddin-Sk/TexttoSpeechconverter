import React, { useState } from "react";
import "./App.css";

function App() {
  const [speechText, setSpeechText] = useState("");

  function handleButtonClick() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = speechText;
    window.speechSynthesis.speak(speech);
  }

  function handleTextareaChange(event) {
    setSpeechText(event.target.value);
  }

  return (
    <div className="hero">
      <h1>
        Text to Speech <span>Converter</span>
      </h1>
      <textarea
        value={speechText}
        onChange={handleTextareaChange}
        placeholder="Write anything here.."
      ></textarea>
      <div className="row">
        <select></select>
        <button onClick={handleButtonClick}>
          <img src="images/play.png" />
          Listen
        </button>
      </div>
    </div>
  );
}

export default App;
