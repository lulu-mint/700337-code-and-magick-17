// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Хуан Себастьян', 'Иван', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var randomArrayNumber = function (MASIVE_BLEAT) {
  var x = MASIVE_BLEAT.length - 1;
  return Math.floor(Math.random() * Math.floor(x));
};

var createWizarduino = function () {
  return {
    name: WIZARD_NAMES[randomArrayNumber(WIZARD_NAMES)],
    surname: WIZARD_SURNAMES[randomArrayNumber(WIZARD_SURNAMES)],
    coatColor: coatColor[randomArrayNumber(coatColor)],
    eyesColor: eyesColor[randomArrayNumber(eyesColor)]
  };
};

var wizards = [
  createWizarduino(),
  createWizarduino(),
  createWizarduino(),
  createWizarduino()
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').innerHTML = wizard.name + '<br>' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;


  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
