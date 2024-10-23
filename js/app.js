const video = document.getElementById("myVideo");
const button = document.getElementById("playPauseButton");

button.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    button.textContent = "∎";
  } else {
    video.pause();
    button.textContent = "▶️";
  }
});



const social = document.querySelector(".social");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 1;
const imgWidth = 530; // 이미지 너비
const totalImages = document.querySelectorAll(".social img").length;

// 처음과 마지막 이미지 복사해서 무한 슬라이드 구현
const firstImage = social.children[0].cloneNode(true);
const lastImage = social.children[social.children.length - 1].cloneNode(true);
social.appendChild(firstImage);
social.insertBefore(lastImage, social.children[0]);

// 초기 위치 설정 (두 번째 이미지에서 시작)

// 다음 이미지로 이동
nextButton.addEventListener("click", () => {
  currentIndex++;
  updateSliderPosition();

  if (currentIndex === totalImages) {
    setTimeout(() => {
      social.style.transition = "none";
      currentIndex = 1;
      social.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
    }, 500);
  }
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  updateSliderPosition();

  if (currentIndex === 0) {
    setTimeout(() => {
      social.style.transition = "none";
      currentIndex = totalImages - 1;
      social.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
    }, 500);
  }
});

// 자동 슬라이드
// setInterval(() => {
//   nextButton.click();
// }, 3000); //
