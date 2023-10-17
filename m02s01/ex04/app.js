// avem nevoie de o clasa Car, care atunci cand este instantiata
// si se ruleaza metoda .render() sa afiseze in DOM masinuta
// cu proprietatile specificate pozitie (top left) color pentru culoare

// new Car (100, 200, purple)
// left: 100; top: 200; background: purple;

class Car {
  constructor(
    left = 10,
    top = 10,
    color = 'black',
    wheelColor = 'red',
    hubCapColor = 'green',
  ) {
    this.positionX = left;
    this.positionY = top;
    this.color = color;
    this.wheelColor = wheelColor;
    this.hubCapColor = hubCapColor;
    this.areHazardsOn = false;
    this.hazardsIntervalId = null;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = this.positionX + 'px';
    this.frame.style.top = this.positionY + 'px';

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
  }

  e(elementType = 'div') {
    // wrapper pentru document.createElement

    return document.createElement(elementType);
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
  }

  move(left, top) {
    const positionX = Number(left);
    const positionY = Number(top);

    if (!isNaN(positionX)) {
      this.frame.style.left = positionX + 'px';
    }

    if (!isNaN(positionY)) {
      this.frame.style.top = positionY + 'px';
    }
  }

  render() {
    // only touch the DOM at the last moment
    document.body.append(this.frame);

    return this;
  }

  changeWheelColor() {
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.wheelBack.style.backgroundColor = this.wheelColor;
  }

  initialWheelColor() {
    this.wheelFront.style.backgroundColor = 'black';
    this.wheelBack.style.backgroundColor = 'black';
  }

  changeHubCapColor() {
    this.hubCapFront.style.backgroundColor = this.hubCapColor;
    this.hubCapBack.style.backgroundColor = this.hubCapColor;
  }

  initialHubCapColor() {
    this.hubCapFront.style.backgroundColor = 'white';
    this.hubCapBack.style.backgroundColor = 'white';
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');
    this;
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');
  }

  turnHazardsOn() {
    this.areHazardsOn = true;
    this.lightFront.classList.add('hazard--lights');
    this.lightBack.classList.add('hazard--lights');
  }

  turnHazardsOff() {
    this.areHazardsOn = false;
    this.lightFront.classList.remove('hazard--lights');
    this.lightBack.classList.remove('hazard--lights');
  }

  toggleHazards() {
    if (this.hazardsIntervalId) {
      clearInterval(this.hazardsIntervalId);
      this.hazardsIntervalId = null;
      this.turnHazardsOff();
    } else {
      this.turnHazardsOn();
      const car = this;

      this.hazardsIntervalId = setInterval(function () {
        if (car.areHazardsOn) {
          car.turnHazardsOff();
        } else {
          car.turnHazardsOn();
        }
      }, 1000);
    }
  }
}

const purpleCar = new Car(200, 300, 'purple', 'blue', 'aquamarine').render();
// new Date.getFullYear()
