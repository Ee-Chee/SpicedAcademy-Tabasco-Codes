var ctx = document.getElementById("cvs").getContext("2d");

ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(250, 150, 100, 0.5 * Math.PI, 2.5 * Math.PI);
ctx.lineTo(250, 350);
ctx.lineTo(50, 220);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 220);
ctx.lineTo(250, 350);
ctx.lineTo(250, 550);
ctx.lineTo(400, 700);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 550);
ctx.lineTo(100, 700);
ctx.stroke();

console.log(document.getElementById("cvs").toDataURL());
