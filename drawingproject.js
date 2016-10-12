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

//window

canvas.fillRect(300, 150, 100, 100);
canvas.fillRect(550, 150, 100, 100);

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(430, 450, 10, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

//sun

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(100, 80, 85, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

//grass

canvas.fillStyle = "green";
canvas.fillRect(0, 550, 2001, 500);

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
canvas.arc(1050, 240, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1000, 240, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(950, 240, 30, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

//light

canvas.fillStyle = "grey";
canvas.fillRect(1040, 350, 25, 200);

canvas.fillStyle = "black";
canvas.fillRect(1025, 350, 60, 120);

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(1055, 410, 10, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "red";
canvas.arc(1055, 380, 10, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(1055, 440, 10, 0, 2*Math.PI);
canvas.fill();
canvas.stroke();
