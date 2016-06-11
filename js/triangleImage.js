var canvas = document.getElementById("canvasEV");
var ctx = canvas.getContext("2d");
var w = canvas.width = 200;
var h = canvas.height = 200;
var img = new Image();


img.src = "http://66.media.tumblr.com/f074c650c4e693b986fb40743962350f/tumblr_mkuldeb8EU1qhy6c9o2_250.gif";

img.onload = function () {
var pattern = ctx.createPattern(img, "no-repeat");
  
    ctx.beginPath();
    ctx.moveTo(200,0);
    ctx.lineTo(200,200);
    ctx.lineTo(0,200);
    ctx.lineTo(0,0)
    ctx.fillStyle = pattern;
    ctx.fill();
};