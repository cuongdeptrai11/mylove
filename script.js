const correctName = "Quyên"; // Tên chính xác
const correctDate = "2024-10-27"; // Ngày yêu

const nameInput = document.getElementById("nameInput");
const dateInput = document.getElementById("dateInput");
const unlockButton = document.getElementById("unlockButton");
const errorMessage = document.getElementById("errorMessage");
const surprise = document.getElementById("surprise");
const heartAnimation = document.getElementById("heartAnimation");
const backgroundMusic = document.getElementById("backgroundMusic");
const toggleMusicButton = document.getElementById("toggleMusicButton");

unlockButton.addEventListener("click", () => {
  const enteredName = nameInput.value.trim();
  const enteredDate = dateInput.value;

  if (
    enteredName.toLowerCase() === correctName.toLowerCase() &&
    enteredDate === correctDate
  ) {
    errorMessage.classList.add("hidden");
    surprise.classList.remove("hidden");

    // Hiển thị hiệu ứng trái tim 3D
    heartAnimation.classList.remove("hidden");
    
    // Phát nhạc nền
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      toggleMusicButton.classList.remove("hidden");
    }
  } else {
    errorMessage.classList.remove("hidden");
    surprise.classList.add("hidden");
  }
});

toggleMusicButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    toggleMusicButton.textContent = "🔊 Tắt nhạc";
  } else {
    backgroundMusic.pause();
    toggleMusicButton.textContent = "🔇 Bật nhạc";
  }
});
