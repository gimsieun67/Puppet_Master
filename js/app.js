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

const heart1 = document.querySelector(".hearth_01");
const heart2 = document.querySelector(".hearth_02");
const heart3 = document.querySelector(".hearth_03");
const heart4 = document.querySelector(".hearth_04");
const heart5 = document.querySelector(".hearth_05");
const heart6 = document.querySelector(".hearth_06");

const empty_heart1 = document.querySelector(".empty_hearth_01");
const empty_heart2 = document.querySelector(".empty_hearth_02");
const empty_heart3 = document.querySelector(".empty_hearth_03");
const empty_heart4 = document.querySelector(".empty_hearth_04");
const empty_heart5 = document.querySelector(".empty_hearth_05");
const empty_heart6 = document.querySelector(".empty_hearth_06");

const screenshot1 = document.querySelector(".screenshot1");
const screenshot2 = document.querySelector(".screenshot2");
const screenshot3 = document.querySelector(".screenshot3");
const screenshot4 = document.querySelector(".screenshot4");
const screenshot5 = document.querySelector(".screenshot5");
const screenshot6 = document.querySelector(".screenshot6");

heart1.addEventListener("click", () => {
  heart1.style.opacity = "0";
  heart2.style.opacity = "1";
  heart3.style.opacity = "1";
  heart4.style.opacity = "1";
  heart5.style.opacity = "1";
  heart6.style.opacity = "1";
  empty_heart1.style.opacity = "1";
  screenshot1.style.opacity = "1";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";
  screenshot6.style.opacity = "0";
});
heart2.addEventListener("click", () => {
  heart1.style.opacity = "1";
  heart2.style.opacity = "0";
  heart3.style.opacity = "1";
  heart4.style.opacity = "1";
  heart5.style.opacity = "1";
  heart6.style.opacity = "1";
  empty_heart2.style.opacity = "1";
  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "1";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";
  screenshot6.style.opacity = "0";
});
heart3.addEventListener("click", () => {
  heart1.style.opacity = "1";
  heart2.style.opacity = "1";
  heart3.style.opacity = "0";
  heart4.style.opacity = "1";
  heart5.style.opacity = "1";
  heart6.style.opacity = "1";
  empty_heart3.style.opacity = "1";
  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "1";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";
  screenshot6.style.opacity = "0";
});
heart4.addEventListener("click", () => {
  heart1.style.opacity = "1";
  heart2.style.opacity = "1";
  heart3.style.opacity = "1";
  heart4.style.opacity = "0";
  heart5.style.opacity = "1";
  heart6.style.opacity = "1";
  empty_heart4.style.opacity = "1";
  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "1";
  screenshot5.style.opacity = "0";
  screenshot6.style.opacity = "0";
});
heart5.addEventListener("click", () => {
  heart1.style.opacity = "1";
  heart2.style.opacity = "1";
  heart3.style.opacity = "1";
  heart4.style.opacity = "1";
  heart5.style.opacity = "0";
  heart6.style.opacity = "1";
  empty_heart5.style.opacity = "1";
  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "1";
  screenshot6.style.opacity = "0";
});
heart6.addEventListener("click", () => {
  heart1.style.opacity = "1";
  heart2.style.opacity = "1";
  heart3.style.opacity = "1";
  heart4.style.opacity = "1";
  heart5.style.opacity = "1";
  heart6.style.opacity = "0";
  empty_heart6.style.opacity = "1";
  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";
  screenshot6.style.opacity = "1";
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
social.style.transform = `translateX(-${currentIndex * imgWidth}px)`;

// 슬라이드 업데이트 함수
function updateSliderPosition() {
  social.style.transition = "transform 0.5s ease";
  social.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
}

// 다음 이미지로 이동
nextButton.addEventListener("click", () => {
  currentIndex++;
  updateSliderPosition();

  // 마지막 이미지를 넘으면 첫 번째 이미지로
  if (currentIndex === totalImages) {
    setTimeout(() => {
      social.style.transition = "none";
      currentIndex = 1;
      social.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
    }, 500);
  }
});

// 이전 이미지로 이동
prevButton.addEventListener("click", () => {
  currentIndex--;
  updateSliderPosition();

  // 첫 번째 이미지를 넘으면 마지막 이미지로
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
