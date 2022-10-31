var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = '#00ffff';
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = '#00ffff'

var gradient = new Gradient()
gradient.initGradient('#gradient-canvas');

function degToRad(degree) {
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime() {
    var now = new Date();
    var today = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mil = now.getMilliseconds();
    var smoothsec = sec + (mil / 1000);
    var smoothmin = min + (smoothsec / 60);

    //Background
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'rgba(00 ,00 , 00, 0)';
    ctx.fillRect(0, 0, 500, 500);
    //Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRad(270), degToRad((hrs * 30) - 90));
    ctx.strokeStyle = 'hsl(' + (hrs * (360 / 12)) + ', 100%, 50%)';
    ctx.shadowColor = 'hsl(' + (hrs * (360 / 12)) + ', 100%, 50%)';
    ctx.stroke();
    //Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRad(270), degToRad((smoothmin * 6) - 90));
    ctx.strokeStyle = 'hsl(' + (smoothmin * (360 / 60)) + ', 100%, 50%)';
    ctx.shadowColor = 'hsl(' + (smoothmin * (360 / 60)) + ', 100%, 50%)';
    ctx.stroke();
    //Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRad(270), degToRad((smoothsec * 6) - 90));
    ctx.strokeStyle = 'hsl(' + (smoothsec * (360 / 60)) + ', 100%, 50%)';
    ctx.shadowColor = 'hsl(' + (smoothsec * (360 / 60)) + ', 100%, 50%)';
    ctx.stroke();

    //Time
    ctx.font = "25px Helvetica Bold";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time + ":" + mil, 180, 260);

}
setInterval(renderTime, 40);

function getInfoWeather() {
    $apiKey = 'd8a50b6b7d66021bb96c8edb82a33959';

    
}