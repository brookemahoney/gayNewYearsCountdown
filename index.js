const timerElement = document.getElementById('timer');
const loadingElement = document.getElementById('loading');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const getTimeBeforeNewYear = function() {
  const now = new Date();
  const nextNewYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = nextNewYear - now;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

setInterval(() => {
  const timeBeforeNewYear = getTimeBeforeNewYear();
  daysElement.innerHTML = timeBeforeNewYear.days;
  hoursElement.innerHTML = timeBeforeNewYear.hours;
  minutesElement.innerHTML = timeBeforeNewYear.minutes;
  secondsElement.innerHTML = timeBeforeNewYear.seconds;
}, 1000);

setTimeout(() => {
  timerElement.style.display = 'block';
  loadingElement.style.display = 'none';
}, 1001);
