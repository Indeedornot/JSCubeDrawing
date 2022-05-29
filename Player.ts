const game = document.getElementById('game');

let gridWidth = 10;
let gridHeight = 10;

let x, y;
let spawn = false;

let timeout = setInterval(function () {
    if (spawn) {
        placeCube(x, y)
        spawn = false;
    }
}, 10);

game.onclick = function clickEvent(e) {
    // e = Mouse click event.
    x = e.clientX; //x position within the element.
    y = e.clientY;  //y position within the element.
    spawn = true;
};

game.addEventListener("drag", function (e) {
    if (e.button == 0) {
        spawn = true;
        x = e.clientX;
        y = e.clientY;
    }
});

function placeCube(x: number, y: number) {
    x = Math.floor(x / gridWidth) * gridWidth;
    y = Math.floor(y / gridHeight) * gridHeight;
    let newCube = document.createElement("div");
    newCube.classList.add("obstacle");
    newCube.style.left = x + "px";
    newCube.style.top = y + "px";
    game.appendChild(newCube);
};