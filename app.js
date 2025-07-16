const clockBody = document.querySelector("#clockBody");
const numberDivs = document.querySelectorAll(".numbers");

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
  let angleRadians = (index * 30 - 90) * (Math.PI / 180);

  let positionX = centreX + radius * Math.cos(angleRadians);
  let positionY = centreY + radius * Math.sin(angleRadians);
  div.style.left = positionX + "px";
  div.style.top = positionY + "px";
});
