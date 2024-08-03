let squares = 16;
let userInput;


function createBoxes() {
    const container = document.getElementById("container");
    let containerWidth = getComputedStyle(container).width;
    //gets parent width and uses that to calculate square width (width divided by squares)
    let squareSize = Math.floor(containerWidth.replace("px", "") / squares);
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
}

function callPrompt() {
    let question = prompt("You can choose how large the grid is! Enter a prompt between 1 and 100.")
    const promptButton = document.getElementById("prompt");

    if (question !== null && isNaN(question) === false) {
        squares = question;
        const deleteBoxes = document.querySelectorAll('.box');
        deleteBoxes.forEach(box => {
            box.remove();
        });

        createBoxes();
    }
}

function clearAll() {
   const boxes = document.getElementsByClassName("box");

   for (let i = 0; i <boxes.length; i++) {
    boxes[i].style.backgroundColor = "white";
   }

}


createBoxes();