//Generate all individual Cells
function generateCells() {

  for (let i = 20; i < 650; i += cellSize) {
    for (let j = 25; j < 650; j += cellSize) {
      cells.push(new Cell(j, i, cellSize));
    }
  }
}

//Generate the Maze [Recursive implementation]
//This Algorithm uses Depth-First-Search and Backtracking
//Algorithm adapted from Wikipedia: https://en.wikipedia.org/wiki/Maze_generation_algorithm
/*
    1. Given a current cell as a parameter
    2. Mark the current cell as visited
    3. While the current cell has any unvisited neighbor cells
       1. Choose one of the unvisited neighbors
       2. Remove the wall between the current cell and the chosen cell
       3. Invoke the routine recursively for the chosen cell
*/

function generateMaze(cell) {

  //2. Mark the current cell as visited
  cell.visited = true;

  //3. While...
  while (true) {

    cell.checkNeighbors();

    //....the current cell has any unvisited neighbor Cells...
    if (cell.neighbors.length) {

      //3.1. Choose one of the unvisited Neighbors
      let randomNeighbor = cell.neighbors.splice(floor(random(0, cell.neighbors.length)), 1)[0];

      //3.2. Remove the Wall between the current Cell and the chosen Cell
      removeWalls(cell, randomNeighbor);

      //3.3. Invoke the Routine recursively for the chosen Cell
      generateMaze(randomNeighbor);
    } else {
      return;
    }
  }
}

function removeWalls(cell, randomNeighbor) {
  //Remove Upper Wall
  if (cell.y > randomNeighbor.y) {
    cell.topWall = false;
    randomNeighbor.bottomWall = false;

    //Remove Lower Wall
  } else if (cell.y < randomNeighbor.y) {
    cell.bottomWall = false;
    randomNeighbor.topWall = false;

    //Remove Left Wall
  } else if (cell.x > randomNeighbor.x) {
    cell.leftWall = false;
    randomNeighbor.rightWall = false;

    //Remove Right Wall
  } else if (cell.x < randomNeighbor.x) {
    cell.rightWall = false;
    randomNeighbor.leftWall = false;
  }
}