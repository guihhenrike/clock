const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

//rotação do ponteiro
const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

//movimentação do ponteiro
const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

// acionar o set clock a cada 1 segundo -> ponteiro de segundos
setInterval(setClock, 1000);