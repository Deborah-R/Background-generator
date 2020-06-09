var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.createElement('button');


function setCurrentBackground() {
    setGradient();
}

function createButton() {

    body.appendChild(button);
    button.innerHTML = 'generate Random colors';
    button.addEventListener('click', setRandomColors);
}

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    color1.style.background = color1.value;
    color2.style.background = color2.value;
    css.textContent = body.style.background + ";";

    setGradientButton();

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

function setGradientButton() {
    button.style.background =
        "linear-gradient(to right, " +
        color2.value +
        ", " +
        color1.value +
        ")";
}





setCurrentBackground();
createButton();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);