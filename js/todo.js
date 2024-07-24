const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 값 저장하기 위한 빈 배열 생성

// X 버튼으로 해당 내용 삭제하기
function deleteToDo(event) {
  const li = event.target.parentElement; // 선택한 li값의 부모 값을 가져온다
  li.remove();

  // 클릭한 값과 동일한 아이디 값만 필터로 배열에서 제거해준다 -> 배열을 변경하는게 아님
  // localStorage에 저장할 때 stringify()를 사용하여 string으로 저장했으므로, 해당 값을 다시 숫자로 변환하기 위해 parseInt 사용
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 

  saveToDos(); // 삭제 후 다시 저장해주기
};

// localStorage에 값 저장하기
function saveToDos() {
  // localStorage에는 array 저장이 안되므로 array처럼 생긴 string으로 저장
  // JSON.parse를 이용해 다시 array로 꺼내준다
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 사용자가 입력한 값 목록으로 띄워주기
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id; // 목록에 아이디 값 추가하기

  const span = document.createElement("span");
  span.innerText = newToDo.text; // newToDoObj이라는 object의 text값(내용)만 출력

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); // 마우스 클릭으로 삭제 이벤트 실행

  li.appendChild(span); // li 안에 span 넣어주기
  li.appendChild(button);
  toDoList.appendChild(li); // ul 안에 li 목록 넣기
};

// 값 받아와서 저장하고 화면에 띄우기
function handleToDoSubmit(event) {
  event.preventDefault(); // 엔터 눌렀을 때 새로고침 되는 기능 막기
  const newToDo = toDoInput.value;
  toDoInput.value = ""; // 값을 추가하고 엔터 누르면 해당 인풋박스 비우기

  const newToDoObj = {
    text:newToDo,
    id:Date.now(), // 랜덤한 숫자값을 랜덤 아이디로 넣기
  };

  toDos.push(newToDoObj); // 배열에 값 넣기
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit); // 엔터 버튼으로 입력 값 받아오기

// 저장된 값 불러오고, 새로운 값 추가하기
const savedToDos = localStorage.getItem(TODOS_KEY);
// 목록 값이 있을 때
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // 기존 localStorage에 저장되어 있는 값을 받아와서
  toDos = parsedToDos;                        // toDos의 빈 배열에 값을 집어넣어서 복원
  parsedToDos.forEach(paintToDo);             // 새로운 값을 추가하면 해당 배열에 값 추가하기
};
