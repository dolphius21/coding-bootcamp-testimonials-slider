const images = document.querySelectorAll(".img-container img");
const texts = document.querySelectorAll(".text-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const totalImages = images.length;
let index = 0;

nextBtn.onclick = () => {
  moveSlide("next");
};

prevBtn.onclick = () => {
  moveSlide("prev");
};

function moveSlide(move) {
  if (move === "next") {
    index++;
    if (index === totalImages) {
      index = 0;
    }
  } else {
    if (index <= 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }
  images.forEach((image) => image.classList.remove("active"));
  texts.forEach((text) => text.classList.remove("active"));
  images[index].classList.add("active");
  texts[index].classList.add("active");
}

// carouselSlide.style.transform = `translateX(${-imgSize * counter}px)`;
