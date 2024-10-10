const video = document.getElementById("myVideo");
const button = document.getElementById("playPauseButton");

button.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    button.textContent = "Pause"; // 비디오가 재생 중일 때는 'Pause' 버튼
  } else {
    video.pause();
    button.textContent = "Play"; // 비디오가 멈췄을 때는 'Play' 버튼
  }
});
