const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg"
];

// round : 반올림, ceil : 올림 , floor : 버림
const chosenImage = images[Math.floor(Math.random() * images.length)];

// js에서 HTML 동적으로 만들기
const backgroundImage = document.createElement("img"); 
backgroundImage.src = `img/${chosenImage}`;
// append : 가장 뒤에 넣기, prepend : 가장 앞에 넣기
document.body.appendChild(backgroundImage); 