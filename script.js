let squares = 16;
let userInput;
let hasClicked;


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
    document.getElementById("current-size").textContent = `The current grid size is ${squares}x${squares}.`
}

function callPrompt() {
    let question = prompt("You can choose how large the grid is! Enter a prompt between 1 and 100.")
    const promptButton = document.getElementById("prompt");

    if (question !== null && isNaN(question) === false && question <= 100) {
        squares = question;
        const deleteBoxes = document.querySelectorAll('.box');
        deleteBoxes.forEach(box => {
            box.remove();
        });

        createBoxes();
    } else {
        alert("Give me a number between 1 and 100, dumbass.")
    }
}

function clearAll() {
    const boxes = document.getElementsByClassName("box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "white";
    }

}

function eraserTool() {
    const boxes = document.getElementsByClassName("box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", erase)


    }
    function erase() {
        this.style.backgroundColor = "white";
    };
}

function createButton() {

    if (hasClicked === true) {
        return;
    } else {
        const newButton = document.createElement("button");
        newButton.id = "write-button";
        newButton.textContent = "Pen";
        newButton.type = "button"
        newButton.addEventListener("click", pen)
        function pen() {
            const boxes = document.getElementsByClassName("box");

            for (let i = 0; i < boxes.length; i++) {
                boxes[i].addEventListener("mouseover", write)


            }
            function write() {
                this.style.backgroundColor = "black";
            };
        }
        hasClicked = true
        document.getElementById("btn-container").appendChild(newButton);
        console.log(hasClicked);
    }
}

createBoxes();