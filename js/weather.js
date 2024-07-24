// 성공 시 실행할 코드
function onGeoOK(position) {
  console.log(position);
};

// 실패 시 실행할 코드
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); // 성공, 실패 - 두 개의 파라미터 필요