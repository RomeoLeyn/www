function blue() {
    let blue = document.body.style.backgroundColor = "blue";
}

let pink = document.getElementById("double-click");

pink.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "pink";
});

let born = document.getElementById("born");
let holdTimeout;

born.addEventListener("mousedown", function () {
    holdTimeout = setTimeout(function () {
        document.body.style.backgroundColor = "brown";
    }, 1000);
});

born.addEventListener("mouseup", function () {
    clearTimeout(holdTimeout);
    document.body.style.backgroundColor = "white";
});

let yellow = document.getElementById("yellow");

yellow.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "yellow";
});

yellow.addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "white";
});