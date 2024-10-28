document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#myVideo");
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

const love1 = document.querySelector(".heart_01");
const love2 = document.querySelector(".heart_02");
const love3 = document.querySelector(".heart_03");
const love4 = document.querySelector(".heart_04");
const love5 = document.querySelector(".heart_05");

const empty1 = document.querySelector(".empty_heart_01");
const empty2 = document.querySelector(".empty_heart_02");
const empty3 = document.querySelector(".empty_heart_03");
const empty4 = document.querySelector(".empty_heart_04");
const empty5 = document.querySelector(".empty_heart_05");

const screenshot1 = document.querySelector(".screenshot1");
const screenshot2 = document.querySelector(".screenshot2");
const screenshot3 = document.querySelector(".screenshot3");
const screenshot4 = document.querySelector(".screenshot4");
const screenshot5 = document.querySelector(".screenshot5");

const note1 = document.querySelector(".note1");
const note2 = document.querySelector(".note2");
const note3 = document.querySelector(".note3");
const note4 = document.querySelector(".note4");
const note5 = document.querySelector(".note5");

love1.addEventListener("click", () => {
  love1.style.opacity = "0";
  love2.style.opacity = "1";
  love3.style.opacity = "1";
  love4.style.opacity = "1";
  love5.style.opacity = "1";

  screenshot1.style.opacity = "1";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";

  note1.style.opacity = "1";
  note2.style.opacity = "0";
  note3.style.opacity = "0";
  note4.style.opacity = "0";
  note5.style.opacity = "0";
});

love2.addEventListener("click", () => {
  love1.style.opacity = "1";
  love2.style.opacity = "0";
  love3.style.opacity = "1";
  love4.style.opacity = "1";
  love5.style.opacity = "1";

  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "1";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";

  note1.style.opacity = "0";
  note2.style.opacity = "1";
  note3.style.opacity = "0";
  note4.style.opacity = "0";
  note5.style.opacity = "0";
});
love3.addEventListener("click", () => {
  love1.style.opacity = "1";
  love2.style.opacity = "1";
  love3.style.opacity = "0";
  love4.style.opacity = "1";
  love5.style.opacity = "1";

  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "1";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "0";

  note1.style.opacity = "0";
  note2.style.opacity = "0";
  note3.style.opacity = "1";
  note4.style.opacity = "0";
  note5.style.opacity = "0";
});
love4.addEventListener("click", () => {
  love1.style.opacity = "1";
  love2.style.opacity = "1";
  love3.style.opacity = "1";
  love4.style.opacity = "0";
  love5.style.opacity = "1";

  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "1";
  screenshot5.style.opacity = "0";

  note1.style.opacity = "0";
  note2.style.opacity = "0";
  note3.style.opacity = "0";
  note4.style.opacity = "1";
  note5.style.opacity = "0";
});
love5.addEventListener("click", () => {
  love1.style.opacity = "1";
  love2.style.opacity = "1";
  love3.style.opacity = "1";
  love4.style.opacity = "1";
  love5.style.opacity = "0";

  screenshot1.style.opacity = "0";
  screenshot2.style.opacity = "0";
  screenshot3.style.opacity = "0";
  screenshot4.style.opacity = "0";
  screenshot5.style.opacity = "1";

  note1.style.opacity = "0";
  note2.style.opacity = "0";
  note3.style.opacity = "0";
  note4.style.opacity = "0";
  note5.style.opacity = "1";
});

const images = document.querySelectorAll(".social > img");
let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 마지막 이미지에서 다시 처음으로
  }
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1; // 처음 이미지에서 마지막으로
  }
  updateSlider();
});

function updateSlider() {
  const offset = -currentIndex * 1000; // 이미지 너비에 맞춰 이동
  document.querySelector(".social").style.transform = `translateX(${offset}px)`;
}
