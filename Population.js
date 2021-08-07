class Population {
  organisms = [];

  constructor() {
    this.organisms = this.createRandomPopulation(300);
  }

  createRandomPopulation(amount) {
    let organisms = [];
    for (let index = 0; index < amount; index++) {
      const geneSelector = new GeneSelector()
      organisms.push(new Organism(geneSelector.createGenes()))
    }
    return organisms;
  }

  advancePopulation() {
    const numberOfBestParents = 100;
    const parents = this.organisms
      .sort((a, b) => a.fitness - b.fitness)
      .filter((_, index) => index < numberOfBestParents);

    console.log(
      parents.reduce((avg, parent, _, { length }) => {
        return avg + parent.fitness / length;
      }, 0)
    )

    let newOrganisms = [];
    for (let organismsLeftToCreate = 300; organismsLeftToCreate > 0; organismsLeftToCreate--) {
      const dad = parents[Math.floor(random(0, numberOfBestParents - 1))];
      const mom = parents[Math.floor(random(0, numberOfBestParents - 1))];

      const geneSelector = new GeneSelector([dad, mom])
      const genes = geneSelector.createGenes();

      newOrganisms.push(new Organism(genes))
    }

    this.organisms = newOrganisms;
  }
}