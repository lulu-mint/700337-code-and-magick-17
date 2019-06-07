var GISTO_X = 100;
var GISTO_Y = 240;
var COL_WIDTH = 40; //зарезервированное место для текста/колонки
var GAP_COL = 50;  //марджин справа
var GAP_ROW = 20;
var GISTO_COLORS = ['red', 'blue', 'yellow', 'green'];

var drawPopup = function(ctx, color, x, y){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 420, 270);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  drawPopup(ctx, 'rgba(0, 0, 0, 0.7)', 110, 20);
  drawPopup(ctx, 'white', 100, 10);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], (GISTO_X + GAP_COL + (COL_WIDTH + GAP_COL) * i), GISTO_Y + GAP_ROW);

    ctx.fillText(parseInt(times[i]), (GISTO_X + GAP_COL + (COL_WIDTH + GAP_COL) * i), GISTO_Y - ((150 * times[i]) / maxTime)) - GAP_ROW*2;
    ctx.fillStyle = GISTO_COLORS[i];
    ctx.fillRect( (GISTO_X + GAP_COL + (COL_WIDTH + GAP_COL) * i), GISTO_Y - ((150 * times[i]) / maxTime), 40, (150 * times[i]) / maxTime);

  }
};