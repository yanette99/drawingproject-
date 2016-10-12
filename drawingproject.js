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

//sun

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(100, 80, 85, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.fillStyle = "green";
canvas.fillRect(0, 550, 2000, 500);

//clouds

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(900, 80, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1000, 80, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(950, 80, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(900, 120, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1000, 120, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(950, 120, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

//2nd

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1050, 200, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1000, 200, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(950, 200, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1050, 100, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();
