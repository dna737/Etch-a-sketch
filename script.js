let container = document.querySelector('#grid-container');
buildGrid();

let canvas = document.querySelectorAll(".pixel"); //all pixels constitute the canvas.
canvas.forEach(element => {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = "black"});
});


//creating the grid:
function buildGrid(rowSize = 4){
    if(rowSize >= 1 && rowSize <= 100){
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
}
}






function clearGrid(){
 while(container.firstChild){
    container.removeChild(container.lastChild);
 }  
}

//changing the size of the grid:
const sizeButton = document.querySelector(".change-gridsize");
sizeButton.addEventListener('click', () => {
    clearGrid();
    buildGrid(parseInt(prompt("enter a num pls:)")))
})



    
