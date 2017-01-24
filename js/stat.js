'use strict';

window.renderStatistics = function (ctx, names, times) {
  var x = 110;
  var y = 20;
  var width = 420;
  var fieldHeight = 270;
  var offset = 10;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.quadraticCurveTo(((x + width) / 2) + offset, 40, x + width + offset, y + offset);
  ctx.lineTo(x + width + offset, y + fieldHeight + offset);
  ctx.quadraticCurveTo(((x + width) / 2) + offset,  y + fieldHeight - 30 + offset, x + offset, y + fieldHeight + offset);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.quadraticCurveTo((x + width) / 2, 30, (x + width), y);
  ctx.lineTo(x + width, y + fieldHeight);
  ctx.quadraticCurveTo((x + width) / 2,  y + fieldHeight - 30, x, y + fieldHeight);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var max = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 100 + histoHeight - height - 20);

    if(name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var alfaC = (Math.random() * (i + 1));
      alfaC = (alfaC > 0.3) ? alfaC : 0.3;
      ctx.fillStyle = 'rgba(0,0,' + parseInt(Math.random() * 255) + ',' + alfaC + ')';
    }

    ctx.fillRect(histoX + columnIndent * i, 90 + histoHeight - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 10);
  }
}
