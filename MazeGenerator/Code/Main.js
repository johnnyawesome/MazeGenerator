/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

//Cell-Size-Slider
let cellSizeSlider;

//Initial Size of an individual Cell
let cellSize = 50;

//Holds all Cells of the Maze
let cells = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(700, 750, P2D);
  background(0);
  stroke(0, 255, 0);
  noFill();
  strokeWeight(5);

  // ##### Initial Maze #####

  //Generate all Cells
  generateCells();

  //Generate the Maze
  generateMaze(cells[0]);

  displayText();

  // ##### Mazes created by the User #####

  //Cell-Size-Slider
  cellSizeSlider = createSlider(10, 50, 50, 5);
  cellSizeSlider.position(20, 710);
  cellSizeSlider.style('width', '200');
  cellSizeSlider.mouseReleased(() => {

    //Remove all old Cells
    cells = [];

    //New blank Canvas
    background(0);

    //Display Text
    displayText();

    //Adapt Cell-Size to the Slider-Vaue
    cellSize = cellSizeSlider.value();

    //Adapt Stroke-Weight to the Cell-Size 
    strokeWeight(map(cellSizeSlider.value(), 10, 50, 2, 5))

    //Generate a new Set of Cells
    generateCells();

    //Generate a new Maze
    generateMaze(cells[0]);
  });
}

function draw() {

  //Display Cells
  for (const cell of cells) cell.display();

}

function displayText() {
  push()
  textSize(20);
  strokeWeight(1);
  fill(0, 255, 0)
  text('Generate a Maze', 20, 700);
  pop()
}

