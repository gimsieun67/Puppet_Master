const videos = document.querySelector(".Puppet_Master_video");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let i = 0;
next.addEventListener("click", () => {
  if (i < 2) {
    // 슬라이드가 3개일 때, 마지막 슬라이드로 넘어가지 않도록 제한
    i++;
    videos.style.transform = `translateX(-${i * 100}vw)`;
  }
});

prev.addEventListener("click", () => {
  if (i > 0) {
    // 첫 번째 슬라이드로 돌아가지 않도록 제한
    i--;
    videos.style.transform = `translateX(-${i * 100}vw)`; // 슬라이드를 뒤로 이동
  }
});
