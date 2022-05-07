const imgTag = document.querySelector('img');
let isLightOn = false;

imgTag.style.width = '300px';
imgTag.style.height = '400px';

imgTag.addEventListener('click', function () {
  if (isLightOn === true) {
    imgTag.src = 'https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png';
    isLightOn = false;
    console.log(isLightOn, 'it is off');
  } else {
    imgTag.src = "https://learn.seytech.co/assets/slides/js-intro/assets/lighton.png";
    isLightOn = true;
    console.log(isLightOn, 'it is on');
  }
});