const container = document.getElementById("container");

let squares = 16;
let containerWidth = getComputedStyle(container).width;

//gets parent width and uses that to calculate square width (width divided by squares)
let squareSize = Math.floor(containerWidth.replace("px", "") / squares);
console.log(squareSize);

for (i = 0; i < squares * squares; i++) {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
    box.style.width = squareSize + "px";
    box.addEventListener("mouseover", fillIn);
    function fillIn() {
        box.style.backgroundColor = "black";
    }
}



