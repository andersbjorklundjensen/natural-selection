const width = 600;
const height = 600;

const startX = width / 2;
const startY = 10;

const goalX = width / 2;
const goalY = height - 10;

const generationCutOffInSteps = 300;
let currentGenerationStep = 0;
let currentGeneration = 0;

let population;

function setup() {
  createCanvas(width, height)
  population = new Population();
}

function draw() {
  clear();
  background(220)
  textSize(32);

  if (currentGenerationStep >= generationCutOffInSteps) {
    currentGenerationStep = 0;
    currentGeneration++;
    population.advancePopulation();
  }

  text(`Generation: ${currentGeneration}`, 10, 30);
  text(`Generation step: ${currentGenerationStep}`, 10, 60);

  population.organisms.forEach(child => {
    child.walk();
    child.display();
  });

  square(goalX, goalY, 10)
  currentGenerationStep++;
}