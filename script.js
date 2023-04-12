let container = document.querySelector('#grid-container');
buildGrid();
let rowSize = 16; //Keeps a track of the canvas's dimensions.
const eraseButton = document.querySelector('.eraser');
const clearCanvas = document.querySelector('.clear-grid');
const gridLine = document.querySelector(".toggle-grid");
const rainbow = document.querySelector(".rainbow-mode");
let chosenColor = "black"; //The color chosen by the user. Black by default.
// const shadowButton = document.querySelector(".shading-mode");

//changes the default color of the color input to black once the page loads up.
window.addEventListener('load', () => document.querySelector('input[type="color"]').value = "black");

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
    element.addEventListener("mouseover" , () => {element.style.backgroundColor = chosenColor});
});
}
}

function clearGrid(){
 while(container.firstChild){
    container.removeChild(container.lastChild);
 }  
 eraseButton.classList.remove("clicked");
}

eraseButton.addEventListener('click', () => {
    eraseButton.classList.toggle("clicked");
    canvas = document.querySelectorAll(".pixel"); //all pixels constitute the canvas.

    if(eraseButton.classList.contains("clicked")){
    canvas.forEach(element => {
    element.addEventListener('mouseenter', () => {element.style.backgroundColor = "white"});
    rainbow.classList.remove("clicked");
}); 
    }else{
        canvas.forEach(element => {
            element.addEventListener('mouseenter', () => {element.style.backgroundColor = chosenColor});
        });
    }
});

clearCanvas.addEventListener("click", updateCanvas);

function updateCanvas(){
    clearGrid();
    buildGrid(rowSize);
    let canvas = document.querySelectorAll(".pixel");
    if(gridLine.classList.contains("clicked")){
        canvas.forEach(pixel => {pixel.style.border = "1px solid black"
        pixel.style.boxSizing = "border-box"});
    }
    if(rainbow.classList.contains("clicked")){
        canvas.forEach(pixel => {
            pixel.addEventListener('mouseenter', () => {pixel.style.backgroundColor = "" + generateRandomColor()});
        });
    }
}


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
});





rainbow.addEventListener('click', () => {
    let canvas = document.querySelectorAll(".pixel");
    rainbow.classList.toggle("clicked");
    if(rainbow.classList.contains("clicked")){
        //this means that rainbow mode is now active.
        canvas.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {pixel.style.backgroundColor = "" + generateRandomColor()});
        });
    }else{
        canvas.forEach(element => {
            element.addEventListener('mouseenter', () => {element.style.backgroundColor = chosenColor});
        });
    }
})


//Used for rainbow mode:
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

const colorPicker = document.querySelector("#colorpicker");
colorPicker.addEventListener('input', () => {
     chosenColor = colorPicker.value;
});

// shadowButton.addEventListener('click', () => {
//   shadowButton.classList.toggle("clicked");
//   let canvas = document.querySelectorAll(".pixel");
//   if(shadowButton.classList.contains("clicked")){
//     canvas.forEach(element => {
//       element.addEventListener('mouseenter', darken);
//     });
//   } else {
//     canvas.forEach(element => {
//       element.removeEventListener('mouseenter', darken);
//       element.style.backgroundColor = chosenColor;
//     });
//   }
// });

// function LightenDarkenColor(col, amt) {
//     var usePound = false;
  
//     if (col[0] == "#") {
//       col = col.slice(1);
//       usePound = true;
//     }
  
//     var num = parseInt(col, 16);
  
//     var r = (num >> 16) + amt;
  
//     if (r > 255) r = 255;
//     else if (r < 0) r = 0;
  
//     var b = ((num >> 8) & 0x00FF) + amt;
  
//     if (b > 255) b = 255;
//     else if (b < 0) b = 0;
  
//     var g = (num & 0x0000FF) + amt;
  
//     if (g > 255) g = 255;
//     else if (g < 0) g = 0;
  
//     return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
//   }
  

    
