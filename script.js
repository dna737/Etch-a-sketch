let container = document.querySelector('#grid-container');
buildGrid();
let rowSize = 16; //Keeps a track of the canvas's dimensions.
const eraseButton = document.querySelector('.eraser');
const clearCanvas = document.querySelector('.clear-grid');
const gridLine = document.querySelector(".toggle-grid");

//creating the grid:
function buildGrid(rowSize = 16){
    if(rowSize >= 1 && rowSize <= 100){
    let dimensionSpecifier = document.querySelector(".dimension-specifier");
    dimensionSpecifier.textContent = "Current dimensions: " + rowSize + " x " + rowSize;
    let pixelSize = 500/rowSize;
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
let canvas = document.querySelectorAll(".pixel"); //all pixels constitute the canvas.
canvas.forEach(element => {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = "black"});
});
}
}

function clearGrid(){
 while(container.firstChild){
    container.removeChild(container.lastChild);
 }  
 eraseButton.classList.remove("clicked");
}

function updateCanvas(){
    clearGrid();
    buildGrid(rowSize);
    if(gridLine.classList.contains("clicked")){
        let canvas = document.querySelectorAll(".pixel");
        canvas.forEach(pixel => {pixel.style.border = "1px solid black"
        pixel.style.boxSizing = "border-box"});
}
}


eraseButton.addEventListener('click', () => {
    eraseButton.classList.toggle("clicked");
    canvas = document.querySelectorAll(".pixel"); //all pixels constitute the canvas.

    if(eraseButton.classList.contains("clicked")){
    canvas.forEach(element => {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = "white"});
});
    }else{
        canvas.forEach(element => {
            element.addEventListener('mouseover', () => {element.style.backgroundColor = "black"});
        });
    }
});

clearCanvas.addEventListener("click", updateCanvas);

//changing the size of the grid:
const sizeButton = document.querySelector(".change-gridsize");
sizeButton.addEventListener('click', () => {
    let input = prompt("Please enter a number between 1 && 100 (inclusive) :)");
    if(input.length === 0){
        rowSize = 16;
    }else{
    rowSize = parseInt(input);
    eraseButton.classList.remove("clicked");
    updateCanvas();
    }
})

gridLine.addEventListener('click', () => {
    gridLine.classList.toggle("clicked");
    const allPixels = document.querySelectorAll(".pixel");
    if(gridLine.classList.contains("clicked")){
    allPixels.forEach(pixel => {pixel.style.border = "1px solid black";
    pixel.style.boxSizing = "border-box"});
    }else{
    allPixels.forEach(pixel => {pixel.style.border = "none"
    pixel.style.boxSizing = "border-box"});
    }
})




    
