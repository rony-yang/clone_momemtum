const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

// 사용자가 입력한 값을 받아오고, 인풋박스 비워주기
function handleToDoSubmit(event) {
  event.preventDefault(); // 엔터 눌렀을 때 새로고침 되는 기능 막기
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
};

// X 버튼으로 해당 내용 삭제하기
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
};

// 사용자가 입력한 값 목록으로 띄워주기
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // 마우스 클릭으로 삭제 이벤트 실행

  li.appendChild(span); // li 안에 span 넣어주기
  li.appendChild(button);
  toDoList.appendChild(li); // ul 안에 li 목록 넣기
};

toDoForm.addEventListener("submit", handleToDoSubmit); // 엔터 버튼으로 입력 값 받아오기

