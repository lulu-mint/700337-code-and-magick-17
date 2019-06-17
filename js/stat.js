'use strict';

var GISTOGRAM_X = 100;
var GISTOGRAM_Y = 240;
var COL_WIDTH = 40;
var GISTOGRAM_HORIZONTAL_GAP = 50;
var GISTOGRAM_VERTICAL_GAP = 20;

var drawPopup = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 420, 270);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var printCanvasText = function (ctx) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  var lineHeight = 30;
  var textArgs = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i < textArgs.length; i++) {
    ctx.fillText(textArgs[i], 120, lineHeight);
    lineHeight += 20;
  }
};

var randomRectColor = function (name) {
  var color;
  var RAND_OPACITY = (parseInt(Math.random() * 10, 10) / 10) + 0.08;
  if (name === 'Вы') {
    color = 'rgba(255, 0, 0, 1)';
  } else {
    color = 'rgba(0, 0, 255, ' + RAND_OPACITY + ')';
  }
  return color;
};

window.renderStatistics = function (ctx, names, times) {
  drawPopup(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  drawPopup(ctx, 'white', 100, 10);

  printCanvasText(ctx, 'Ура вы победили!', 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = 'black';
    // высота прямоугольника
    var gistogramColumnHeight = (150 * times[i]) / maxTime;
    // положение Х названия + пробел между колонками + (ширина колонки + пробел между) * i
    var gistogramLabelPositionX = GISTOGRAM_X + GISTOGRAM_HORIZONTAL_GAP + (COL_WIDTH + GISTOGRAM_HORIZONTAL_GAP) * i;
    // положение У названия + высота строчки
    var gistogramLabelPositionY = GISTOGRAM_Y + GISTOGRAM_VERTICAL_GAP;
    // позиция таймера У = положение гистограммы У - высота прямоугольника
    var gistogramTimePositionY = GISTOGRAM_Y - gistogramColumnHeight;
    // позиция прямоугольника У = положение гистограммы У - высота прямоугольника
    var gistorgamRectPositionY = GISTOGRAM_Y - gistogramColumnHeight;

    ctx.fillText(names[i], gistogramLabelPositionX, gistogramLabelPositionY);
    ctx.fillText(parseInt(times[i], 10), gistogramLabelPositionX, gistogramTimePositionY);

    ctx.fillStyle = randomRectColor(names[i]);
    ctx.fillRect(gistogramLabelPositionX, gistorgamRectPositionY, 40, gistogramColumnHeight);
  }
};
