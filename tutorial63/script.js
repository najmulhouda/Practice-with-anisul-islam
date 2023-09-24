var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");

ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.strokeRect(98, 98, 505, 405);

ctx.fillStyle = "green";
ctx.fillRect(100, 100, 500, 400);

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.closePath();
ctx.fill();
ctx.stroke();
