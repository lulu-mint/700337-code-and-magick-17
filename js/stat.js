'use strict';

var GISTOGRAM_X = 100;
var GISTOGRAM_Y = 240;
var COL_WIDTH = 40;
var GAP_COL = 50;
var GAP_ROW = 20;

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

var canvasText = function (ctx) {
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

var randomOpacity = function () {
  return (parseInt(Math.random() * 10, 10) / 10);
};

window.renderStatistics = function (ctx, names, times) {
  drawPopup(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  drawPopup(ctx, 'white', 100, 10);

  canvasText(ctx, 'Ура вы победили!', 'Список результатов:');

  var maxTime = getMaxElement(times);

  ctx.textBaseline = 'bottom';
  ctx.fillStyle = 'black';
  for (var i = 0; i < names.length; i++) {

    var gistogramColumnHeight = (150 * times[i]) / maxTime;
    var gistogramLabelPositionX = GISTOGRAM_X + GAP_COL + (COL_WIDTH + GAP_COL) * i;
    var gistogramLabelPositionY = GISTOGRAM_Y + GAP_ROW;
    var gistogramTimePositionY = GISTOGRAM_Y - gistogramColumnHeight;
    var gistorgamRectPositionY = GISTOGRAM_Y - gistogramColumnHeight;

    ctx.fillText(names[i], gistogramLabelPositionX, gistogramLabelPositionY);
    ctx.fillText(parseInt(times[i], 10), gistogramLabelPositionX, gistogramTimePositionY);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var RAND_OPACITY = randomOpacity();
      ctx.fillStyle = 'rgba(0, 0, 255, ' + RAND_OPACITY + ')';
    }
    ctx.fillRect(gistogramLabelPositionX, gistorgamRectPositionY, 40, gistogramColumnHeight);
  }
};
