var canvas;
var ctx;

window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function () {
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    img.src = 'board.svg';
    canvas.width = window.innerWidth * .95;
    canvas.height = window.innerHeight * .95;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
};
function click() {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;


    let arr = [];
    let row = 6;
    let col = 7;
    // Loop to initialize 2D array elements.
    for (let i = 0; i < row; i++) {
        gfg[i] = [];
        for (let j = 0; j < col; j++) {
            gfg[i][j] = false;
        }
    }
}



