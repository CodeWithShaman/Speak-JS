function speakText() {
   let text = document.getElementById("speak").value;
   let utterance = new SpeechSynthesisUtterance(text);
   utterance.lang ="en-US";
   utterance.voice = window.speechSynthesis.getVoices()[0];
   utterance.rate = 1;
   utterance.pitch = 1;
   utterance.volume = 1;
   window.speechSynthesis.speak(utterance);
};