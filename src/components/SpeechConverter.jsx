import React, { useEffect, useState } from "react";
import styles from "./SpeechConverter.module.css";

function SpeechConverter() {
  const [speech, setSpeech] = useState(new SpeechSynthesisUtterance());
  const [speechText, setSpeechText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(0);

  useEffect(() => {
    function handleVoicesChanged() {
      setVoices(window.speechSynthesis.getVoices());
      setSpeech((prevSpeech) => {
        const newSpeech = new SpeechSynthesisUtterance(prevSpeech.text);
        newSpeech.voice = voices[selectedVoice];
        return newSpeech;
      });
    }

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      window.speechSynthesis.onvoiceschanged = null; //cleanup event listener on component unmount
    };
  }, [selectedVoice, voices]);

  function handleVoiceSelectChange(event) {
    setSelectedVoice(event.target.value);
    setSpeech((prevSpeech) => {
      const newSpeech = new SpeechSynthesisUtterance(prevSpeech.text);
      newSpeech.voice = voices[event.target.value];
      return newSpeech;
    });
  }

  function handleButtonClick() {
    speech.text = speechText;
    window.speechSynthesis.speak(speech);
  }

  function handleTextareaChange(event) {
    setSpeechText(event.target.value);
  }

  return (
    <div>
      <textarea
        className={styles.textarea}
        value={speechText}
        onChange={handleTextareaChange}
        placeholder="Write anything here.."
      />
      <div className={styles.row}>
        <select
          className={styles.select}
          value={selectedVoice}
          onChange={handleVoiceSelectChange}
        >
          {voices.map((voice, i) => (
            <option key={i} value={i}>
              {voice.name}
            </option>
          ))}
        </select>
        <button className={styles.button} onClick={handleButtonClick}>
          <img className={styles.image} src="images/play.png" />
          Listen
        </button>
      </div>
    </div>
  );
}

export default SpeechConverter;
