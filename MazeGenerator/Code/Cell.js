class Cell {

  constructor(_x, _y, _s) {
    this.x = _x;
    this.y = _y;
    this.size = _s;
    this.topWall = true;
    this.bottomWall = true;
    this.leftWall = true;
    this.rightWall = true;
    this.visited = false;
    this.neighbors = [];
  }

  //Check non-visited Neighbors and push them to this.neighbors
  checkNeighbors() {

    this.neighbors = [];

    cells.forEach(cell => {
      if (!cell.visited) {
        //Check Left Neighbor
        if (this.x > 0 && this.y === cell.y && this.x - this.size === cell.x) this.neighbors.push(cell);
        //Check Right Neighbor
        if (this.x < 650 && this.y === cell.y && this.x + this.size === cell.x) this.neighbors.push(cell);
        //Check Upper Neighbor
        if (this.y > 0 && this.x === cell.x && this.y - this.size === cell.y) this.neighbors.push(cell);
        //Check Lower Neighbor
        if (this.y < 650 && this.x === cell.x && this.y + this.size === cell.y) this.neighbors.push(cell);
      }
    });
  }

  //Display the Cell
  display() {

    //Draw a Line for each Wall
    if (this.topWall) line(this.x, this.y, this.x + this.size, this.y); //Top-Wall
    if (this.bottomWall) line(this.x, this.y + this.size, this.x + this.size, this.y + this.size); //Bottom-Wall
    if (this.leftWall) line(this.x, this.y, this.x, this.y + this.size); //Left-Wall
    if (this.rightWall) line(this.x + this.size, this.y, this.x + this.size, this.y + this.size); //Right-Wall
  }
}