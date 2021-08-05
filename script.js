var left_color = document.querySelector(".left_color");
var right_color = document.querySelector(".right_color");
var heading = document.querySelector(".main_heading");
var sec_han = document.querySelector(".sec_han");
var beautiful = document.querySelector(".beautiful");
var color_text = document.querySelector(".color_text");
var body_color = document.querySelector("#body");


left_color.value = "#8A2387"
right_color.value = "#E94057";

left_color.addEventListener('input', set_background);
right_color.addEventListener('input', set_background);

function set_background(){
    if(left_color.value =="#000000" || right_color.value == "#000000"){
        heading.classList.add("white");
        sec_han.classList.add("white");
        beautiful.classList.add("white");
    }
    else{
        heading.classList.remove("white");
        sec_han.classList.remove("white");
        beautiful.classList.remove("white");
    }
    body_color.style.background = "linear-gradient(to right," + left_color.value + " , " + right_color.value + ")";

    color_text.innerHTML = left_color.value + " "+ right_color.value;
}

