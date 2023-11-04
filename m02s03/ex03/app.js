// black box function with no side effects

function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let counterOverSide = 0;

stage.addEventListener('mouseover', function () {
  const log = createLog('Mouseul este pe scena');
  counter = counter + 1;
  counterOverSide = counterOverSide + 1;
  const counterOverSideLog = createLog(
    `Mouseul a trecut de ${counterOverSide} ori peste oricare din laturile patratului.`,
  );

  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori`);
  logsContainer.append(log);
  logsContainer.append(counterOverSideLog);
  logsContainer.append(counterLog);
});

stage.addEventListener('mouseout', function () {
  const log = createLog('Mouseul NU este pe scena');
  counterOverSide = counterOverSide + 1;

  const counterOverSideLog = createLog(
    `Mouseul a trecut de ${counterOverSide} ori peste oricare din laturile patratului.`,
  );

  logsContainer.append(log);
  logsContainer.append(counterOverSideLog);
});
