'use strict';

window.renderStatistics = function (ctx, names, times) {
  var x = 110;
  var y = 20;
  var width = 420;
  var fieldHeight = 270;
  var offset = 10;

  drawBgFigure(ctx, x, y, width, fieldHeight, offset, 'rgba(0, 0, 0, 0.7)');
  drawBgFigure(ctx, x, y, width, fieldHeight, 0, 'rgba(256, 256, 256, 1.0)');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var max = maxArrayItem(times);

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;
  var columnWidth = 40;

  var user = new Object();

  for (var i = 0; i < times.length; i++) {

    user.name = names[i];
    user.time =  times[i];

    var height = step * user.time;
    var columnX = histoX + columnIndent * i;
    var columnY = 90 + histoHeight - height;

    drawCurrentColumn(ctx, user, columnX, columnY, columnWidth, height);
  }
};


function drawBgFigure(ctx, x, y, width, fieldHeight, offset, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.quadraticCurveTo(((x + width) / 2) + offset, 40, x + width + offset, y + offset);
  ctx.lineTo(x + width + offset, y + fieldHeight + offset);
  ctx.quadraticCurveTo(((x + width) / 2) + offset, y + fieldHeight - 30 + offset, x + offset, y + fieldHeight + offset);
  ctx.closePath();
  ctx.fill();
}

function maxArrayItem(array) {
  var maxItem = -1;
  for (var j = 0 ; j < array.length; j++ ) {
    var curItem = array[j];
    if (curItem > maxItem) {
      maxItem = curItem;
    }
  }
  return maxItem;
}

function drawCurrentColumn(ctx, user, columnX, columnY, columnWidth, height) {
  if (user.name === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    var alfaChannel = Math.random();
    alfaChannel = alfaChannel > 0.3 ? alfaChannel : 0.3;
    ctx.fillStyle = 'rgba(0,0,' + (Math.random() * 255).toFixed() + ',' + alfaChannel + ')';
  }

  ctx.fillRect(columnX, columnY, columnWidth, height);

  ctx.fillStyle = '#000';
  ctx.fillText(user.name, columnX, columnY + height + 20);
  ctx.fillText(user.time.toFixed(0), columnX, columnY - 10);
}
