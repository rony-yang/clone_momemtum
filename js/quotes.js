const quotes = [
  {
    quote:"삶이 있는 한 희망은 있다.",
    author:"키케로",
  },
  {
    quote:"언제나 현재에 집중할수 있다면 행복할 것이다.",
    author:"파울로 코엘료",
  },
  {
    quote:"신은 용기있는자를 결코 버리지 않는다.",
    author:"켄러",
  },
  {
    quote:"피할수 없으면 즐겨라.",
    author:"로버트 엘리엇",
  },
  {
    quote:"한번의 실패와 영원한 실패를 혼동하지 마라.",
    author:"F.스콧 핏제랄드",
  },
  {
    quote:"계단을 밟아야 계단 위에 올라설수 있다.",
    author:"터키 속담",
  },
  {
    quote:"행복은 습관이다,그것을 몸에 지녀라.",
    author:"허버드",
  },
  {
    quote:"자신감 있는 표정을 지으면 자신감이 생긴다.",
    author:"찰스 다윈",
  },
  {
    quote:"1퍼센트의 가능성, 그것이 나의 길이다.",
    author:"나폴레옹",
  },
  {
    quote:"행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author:"마르쿠스 아우렐리우스 안토니우스"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// round : 반올림, ceil : 올림 , floor : 버림
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
