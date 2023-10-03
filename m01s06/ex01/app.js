const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,

  accelerate: function () {
    this.speed++;

    return this.speed;
  },

  decelerate: function () {
    this.speed--;

    return this.speed;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    // pastrarea keywordului this
    const self = this;
    this.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 2000);
  },

  stop: function () {
    this.speed = 0;
    console.log(car.speed);
  },

  setSpeed: function (fixedSpeed) {
    if (fixedSpeed >= this.topReverseSpeed && fixedSpeed <= this.topSpeed) {
      this.speed = fixedSpeed;
    } else if (fixedSpeed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else {
      this.speed = this.topReverseSpeed;
    }
    console.log(this.speed);
  },
};

car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);
console.log(`Viteza noua este ${car.decelerate()} km/h.`);
