var voiceSwitch = document.getElementById("soundOn");

const voice_speech = (text_data) => {
  if (voiceSwitch.checked === true) {
    const x = text_data.innerText;
    let utterance = new SpeechSynthesisUtterance(x);
    speechSynthesis.speak(utterance);
  }
};



