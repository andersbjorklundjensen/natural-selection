class GeneSelector {
  numberOfGenes = 300;

  constructor(parents) {
    this.parents = parents;
  }

  createRandomGenes() {
    let genes = [];
    for (let index = 0; index < this.numberOfGenes; index++) {
      genes.push(p5.Vector.random2D());
    }
    return genes;
  }

  createGenes() {
    if (!this.parents) {
      return this.createRandomGenes();
    } else {
      let genes = [];
      for (let k = 0; k < this.numberOfGenes; k++) {
        const percentMutationChange = 10;
        const isMutation = Math.floor(random(1, 100 / percentMutationChange)) == 1;
        if (isMutation) genes.push(p5.Vector.random2D());
        else genes.push(k % 2 == 0 ? this.parents[0].genes[k] : this.parents[1].genes[k]);
      }
      return genes;
     }
  }
}