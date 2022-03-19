const button = document.querySelector(".event_btns-join")

function buttonAlert(){
    alert("본 이벤트는 모바일 앱에서만 참여가능합니다.")
}

button.addEventListener("click",buttonAlert);