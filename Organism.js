class Organism {
  constructor(genes) {
    this.position = createVector(startX, startY)
    this.genes = genes;
    this.fitness = 10000000;
    this.geneStep = 0;
  }

  walk() {
    const a = this.genes[this.geneStep++]
    const b = createVector(a.x, a.y)
    this.position.add(b.mult(7))
    this.calculateFitness();
  }

  display() {
    circle(this.position.x, this.position.y, 5);
  }

  calculateFitness() {
    this.fitness = dist(this.position.x, this.position.y, goalX, goalY)
  }
}