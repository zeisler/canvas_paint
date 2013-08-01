'use strict';

angular.module('canvasPaintApp')
  .controller('MainCtrl', function ($scope) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;


     function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }


    $('#canvas').on('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
            ctx.beginPath();
            ctx.arc(mousePos.x, mousePos.y, 3,0,Math.PI*2,true);
            ctx.closePath();
            ctx.fillStyle = 'green';
            ctx.fill();
      });
  });
