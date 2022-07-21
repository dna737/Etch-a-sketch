let container = document.querySelector('#grid-container');
let rowSize = 4;
let pixelSize = 500/rowSize;

//creating the grid:
for(let i = 1; i <= rowSize ** 2 ;i++){
    let div = document.createElement("div");
    div.style.border = "1px dotted blue";
    container.appendChild(div);
    div.style.width = "" + pixelSize + "px";
    div.style.height = "" + pixelSize + "px";

}
    
