
function init () {

    const grid = document.querySelector('.grid')

    //VARIABLES
    const width = 15
    const height = 15
    const cellCount = width * height
let cells = []



//CHARACTER CONFIG
   const startingPosition = 217;
let currentPosition = startingPosition;


// FUNCTIONS
function createGrid() {
// make the grid cells use the cellcount to create the cells
for (let i = 0; i < cellCount; i++){
    const cell = document.createElement('div');
    cell.innerText = i;
    cell.dataset.index = i;
        // height and width to cells
        cell.style.height = `${100 /height}%`
        cell.style.width = `${100 /width}%`



        if ((i >= 17 && i <= 27) || (i >= 32 && i <= 42) || (i >= 47 && i <= 57) || (i >= 62 && i <=72) || (i >= 77 && i <= 87))  {
            cell.classList.add('mojo');
          }
      



    grid.appendChild(cell);
cells.push(cell)

}
addBlossom(startingPosition)
// blossom added to starting position
}

//add function of blossom so i dont keep adding it
function addBlossom(position){
console.log(position)
cells[position].classList.add("blossom");
}

// remove blossom
function removeBlossom() {
    console.log("BLOSSOM REMOVED");
    cells[currentPosition].classList.remove("blossom");
}




//movements 
function handleMovement(event){
    const key = event.keyCode;
    const left = 37;
    const right = 39;
    const spacebar = 32;

//to remove blossom from the last position before updating to new position
removeBlossom()





    // which key was pressed
    if (key === right && currentPosition < 224) {
      console.log("Right");  
      currentPosition++;
    }
    else if ( key === left && currentPosition > 210) {
        console.log("left")
        currentPosition--;
    } else if ( key === spacebar ) {
    console.log("spacebar");
} else {
    console.log("INVALID KEY");
}

addBlossom(currentPosition)
}

// event
document.addEventListener('keyup', handleMovement);



//to load the page
createGrid()


}
window.addEventListener('DOMContentLoaded', init)