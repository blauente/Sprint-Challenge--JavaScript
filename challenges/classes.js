// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume () {
    return this.length * this.width * this.height;
  }
  surfaceArea () {
    return ( 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
  }
}

let cube3 = new CuboidMaker(3, 3, 3);
console.log(cube3.volume());

console.log(cube3.surfaceArea());

const cuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(edge) {
    super(edge);
    this.edge = edge;
  }
  volume () {
    return Math.pow(this.edge, 3);
  }
  surfaceArea () {
    return 6 * this.edge * this.edge;
  }
}

const cube4 = new CubeMaker(4);
console.log(cube4.volume());
console.log(cube4.surfaceArea());