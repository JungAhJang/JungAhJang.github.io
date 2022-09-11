const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// 이때 img의 경로는 js 기준이 아니라, index.html 기준으로 봐야함!!
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
