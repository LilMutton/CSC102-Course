
const playButton = document.getElementById("play-sound-btn");
const audioElement = document.getElementById("game-audio");

// Adding an event listener to the button
playButton.addEventListener("click", () => {
  // Play the audio when the button is clicked
  if (audioElement.paused) {
    audioElement.play(); // Start playing the audio
    playButton.textContent = "Pause Sound"; // Change button text
  } else {
    audioElement.pause(); // Pause the audio
    playButton.textContent = "Play Sound"; // Reset button text
  }
});
