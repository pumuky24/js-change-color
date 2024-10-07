const container = document.querySelector(".container");
const btn = document.querySelector(".button");

function changecolor(){
    container.setAttribute("style", "background-color:darkblue;");

}

btn.addEventListener("click",changecolor);