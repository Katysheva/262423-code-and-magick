'use strict';

var openBtn = document.querySelector('.setup-open');
var setupWindow = document.querySelector('.setup');
var setupCloseBtn = setupWindow.querySelector('.setup-close');

openBtn.addEventListener('click', function () {
  setupWindow.classList.remove('invisible');
});
setupCloseBtn.addEventListener('click', function () {
  setupWindow.classList.add('invisible');
});

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

function getColor(array) {
  return array[(Math.random() * (array.length - 1)).toFixed()];
}


var wizardCoat = setupWindow.querySelector('#wizard-coat');
var wizardEyes = setupWindow.querySelector('#wizard-eyes');
var fireball = setupWindow.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getColor(coatColors);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getColor(eyesColors);
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = getColor(fireballColors);
});
