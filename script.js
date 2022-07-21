let container = document.querySelector('#grid-container');
let rowSize = 4;
let pixelSize = 500/rowSize;

//creating the grid:
for(let i = 1; i <= rowSize ** 2 ;i++){
    let pixel = document.createElement("div");
    // pixel.style.border = "1px dotted blue";
    container.appendChild(pixel);
    pixel.style.width = "" + pixelSize + "px";
    pixel.style.height = "" + pixelSize + "px";
    pixel.style.margin = "0px";
    pixel.style.border = "0px";
    pixel.classList.add("pixel");
}

let pixels = document.querySelectorAll(".pixel");
pixels.forEach(element => {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = "black"});
});

    
