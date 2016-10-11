var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
canvas.fillStyle = "pink";
canvas.fillRect(250, 100, 500, 500);

canvas.fillStyle = "black";
canvas.fillRect(400, 300, 200, 300);

canvas.beginPath();
canvas.moveTo(900,100);
canvas.lineTo(100,100);
canvas.lineTo(500,10);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(100, 80, 50, 0, 2*Math.PI);
canvas.stroke();

canvas.fillStyle = "green";
canvas.fillRect(0, 550, 2000, 500);
