const clockBody = document.querySelector("#clockBody");
const numberDivs = document.querySelectorAll(".numbers");
const hourHand = document.querySelector("#hourHand");
const minuteHand = document.querySelector("#minuteHand");
const secondHand = document.querySelector("#secondsHand");

// subtracting the values as it provides some padding to the numbers inside the
//  clock.
const radius = clockBody.offsetWidth / 2 - 55;

//subtracting the value here to make sure that the defined centre properly
//aligns with the centre of the circle
const centreX = clockBody.offsetWidth / 2 - 12;
const centreY = clockBody.offsetHeight / 2 - 12;

numberDivs.forEach((div, index) => {
  // subtracting the 90 because the numbers start from horizontally 0
  //  so subtracting 90 makes the numbers start from the top.
  const angleRadians = (index * 30 - 90) * (Math.PI / 180);

  const positionX = centreX + radius * Math.cos(angleRadians);
  const positionY = centreY + radius * Math.sin(angleRadians);
  div.style.left = positionX + "px";
  div.style.top = positionY + "px";
});

function clockTicking() {
  const time = new Date();

  const [hours, minutes, seconds] = [
    time.getHours() % 12,
    time.getMinutes(),
    time.getSeconds(),
  ];

  const hourHandRotation = hours * 30 + minutes * 0.5;
  const minuteHandRotation = minutes * 6 + seconds * 0.1;
  const secondHandRotation = seconds * 6;

  hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
  secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
}

clockTicking();
setInterval(clockTicking, 1000);
