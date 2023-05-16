
function init() {
  const grid = document.querySelector('.grid');
  const displayResult = document.querySelector('#result');
  const width = 15;
  const height = 15;
  const cellCount = width * height;
  const cells = [];
  const startingPosition = 217;

  // CHARACTER CONFIG
  let currentPosition = startingPosition;
  let direction = 1;
  let blossomCell;
  let blossomShoot = false;
  let mojoCount = 0;
  let mojos = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72]
  let goingRight = true;
  let shootInterval = null;
  let score = 0;
  let moveMojoInterval;
  
  // FUNCTIONS
  function createGrid() {
    // make the grid cells use the cellcount to create the cells
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div');
      cell.innerText = i;
      cell.dataset.index = i;

      // height and width to cells
      cell.style.height = `${100 / height}%`;
      cell.style.width = `${100 / width}%`;
      cell.style.padding = 0;
      cell.style.border = '1px solid transparent';
      grid.appendChild(cell);
      cells.push(cell);
    }

    
    addMojo();
    moveMojoInterval = setInterval(mojoMovement, 400);
    addBlossom(startingPosition);
  }



  function gameOver() {
    console.log('Game Over');
    clearInterval(moveMojoInterval);
    document.removeEventListener('keyup', handleMovement);
   alert('GAME OVER!');
  }


  //add function of blossom so i dont keep adding it
  function addBlossom(position) {
    console.log(position);
    cells[position].classList.add('blossom');
    blossomCell = position;
    blossomShoot = false;
  }


  function addMojo() {
    mojos.forEach(mojo => {
      cells[mojo].classList.add('mojo')
    })
  }

  function removeMojo() {
    mojos.forEach(mojo => {
      cells[mojo].classList.remove('mojo')
    })
  }

  function mojoMovement() {
    const leftSide = mojos.some(mojo => mojo % width === 0)
    const rightSide = mojos.some(mojo => mojo % width === width - 1)
    removeMojo();
    if (mojos.length === 0) {
      clearInterval(moveMojoInterval);
      document.removeEventListener('keyup', handleMovement);
      gameOver();
      return;
    }

    if (rightSide && goingRight) {
      for (let i = 0; i < mojos.length; i++) {
        mojos[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }

    if (leftSide && !goingRight) {
      for (let i = 0; i < mojos.length; i++) {
        mojos[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }

    for (let i = 0; i < mojos.length; i++) {
      mojos[i] += direction;
    }

    addMojo(); 

    if (cells[currentPosition].classList.contains('mojo', 'blossom')) {
      gameOver();
      
    }
    
  }

  function releaseMojoShots() {
    const emptyCells = cells.filter(
      (cell) =>
        !cell.classList.contains('mojo') &&
        !cell.classList.contains('blossom')
    );
    if (emptyCells.length === 0) {
      return;
    }
    
    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const blossomRow = Math.floor(blossomCell / width);
    const blossomCol = blossomCell % width;
    const randomRow = Math.floor(randomCell.dataset.index / width);
    const randomCol = blossomCell % width;
    if (
      Math.abs(blossomRow - randomRow) <= 1 &&
      Math.abs(blossomCol - randomCol) <= 1
    ) {
      if (blossomCell !== null) {
        shoot(randomMojoCell.dataset.index, blossomCell);
      }
    }
    setTimeout(releaseMojoShots, Math.random() * 1000 + 500);

    
  }

  // remove blossom
  function removeBlossom(newPosition) {
    cells[currentPosition].classList.remove('blossom');
    blossomCell = null;
    blossomShoot = false;
  }

  // movements using left, right and space
  function handleMovement(event) {
    const key = event.keyCode;
    const left = 37;
    const right = 39;
    const spacebar = 32;

    removeBlossom();
    cells[currentPosition].classList.remove('mojo');

    let newPosition = currentPosition;
    if (key === right && currentPosition % width < width - 1) {
      newPosition++;
    } else if (key === left && currentPosition % width > 0) {
      newPosition--;
    } else if (key === spacebar) {
      shoot(currentPosition);
    } else {
      console.log('INVALID KEY');
    }

    currentPosition = newPosition;
    removeBlossom(currentPosition);
    addBlossom(currentPosition);
  }

  const scoreDisplay = document.createElement('div');
  scoreDisplay.id = 'score';
  scoreDisplay.innerText = `Score: ${score}`;
  document.body.appendChild(scoreDisplay);
  
  function updateScore() {
    scoreDisplay.innerText = `Score: ${score}`;
  }

  function shoot(startPosition, blossomCell) {
    let currentPosition = startPosition - width;
    const shootInterval = setInterval(() => {
      if (currentPosition < 0) {

        // Shooting  moved out of the play area
        clearInterval(shootInterval);
       
return;
      }

      const currentCell = cells[currentPosition];
      if (!currentCell) {
        // Element with given index does not exist in cells array
        clearInterval(shootInterval);
        return;
      }
      if (currentCell.classList.contains('mojo') && currentPosition === blossomCell) {
        // Blossom hits Mojojojo
        clearInterval(shootInterval);
        currentCell.classList.remove('mojo');
        removeBlossom();
        mojoCount--;
        winOrLoss();

// remove mojo when shot
const mojoIndex = mojos.indexOf(parseInt(currentCell.dataset.index));
if (mojoIndex > -1) {
  mojos.splice(mojoIndex, 1);
}
         score += 10;
        updateScore();
        function winOrLoss(){
        if (mojoCount === 0) {
          clearInterval(mojoInterval);
          document.removeEventListener('keyup', handleMovement);
          alert('Game Over! BLOSSOM WON!');
        }}
        return;
      }
      if (currentCell.classList.contains('blossom')) {
        // Hit Blossom
        clearInterval(shootInterval);
        currentCell.classList.remove('blossom');
        removeBlossom();
        return;
      }

      if (currentCell.classList.contains('mojo')) {
        // Hit obstacle
        clearInterval(shootInterval);

        const mojoIndex = mojos.indexOf(parseInt(currentCell.dataset.index));
        if (mojoIndex > -1) {
          mojos.splice(mojoIndex, 1);
        }

        currentCell.classList.remove('mojo');
        score += 10;
        updateScore();
        return;
      }

      currentCell.classList.add('shoot');
      setTimeout(() => {
        currentCell.classList.remove('shoot');
      }, 10);
      currentPosition -= width;
    });
  }

  // event
  document.addEventListener('keyup', handleMovement);

  // to get audio to play when spacebar is pressed
  const audio = document.getElementById("beam");
  document.addEventListener('keydown', function (event) {
    if (event.code === "Space") {
      audio.play();
      audio.playbackRate = 1;
    }
  });

  // to load the page
  createGrid();

}

window.addEventListener('DOMContentLoaded', init);